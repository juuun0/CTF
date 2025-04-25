#!/usr/bin/env python3

from pwn import *
from binascii import hexlify, unhexlify
import string

sla = lambda t, x: r.sendlineafter(t, x)
cmd = lambda x: r.sendlineafter(" :: ", x)

def get_cipher(payload):
    cmd(str(1))
    cmd(payload)
    r.recvuntil("scrolls: ") # receive dummy response
    response = unhexlify(r.recvline().decode().strip("\n"))
    return response

def split_into_blocks(data: bytes, block_size: int = 16) -> list:
    blocks = [data[i: i + block_size] for i in range(0, len(data), block_size)]
    return blocks

def guessing_password_by_block(idx: int, original_block: bytes, password: str):
    txt_list = string.ascii_letters + string.digits
    padding = "A" * 16

    for ch in txt_list:
        payload = padding + password + ch
        log.warn(payload)
        block = get_cipher(payload)[idx]
        if original_block == block:
            print(ch)
            return ch

if __name__ == '__main__':
    r = remote("94.237.57.68", 38855)

    password_1 = ""
    password_length = 20
    max_length = 31
    ch_list = string.ascii_letters + string.digits

    for i in range(password_length):        # Stage 1
        padding = "A" * (max_length - i)
        if (len(padding) < 16):
            break
        origin_cipher = get_cipher(padding)
        origin_block = split_into_blocks(origin_cipher)

        for ch in ch_list:
            payload = padding + password_1 + ch
            log.warn(f"Payload: {payload}")
            compare_cipher = get_cipher(payload)
            compare_block = split_into_blocks(compare_cipher)
            if origin_block[1] == compare_block[1]:
                password_1 += ch
                log.critical(f"Found {i}: {ch}")
                break
    
    log.warn(f"Stage 1 password: {password_1}")

    offset = 31
    password_2 = ""
    for i in range(4):
        padding = "A" * (offset - i)
        origin_cipher = get_cipher(padding)
        origin_block = split_into_blocks(origin_cipher)

        for ch in ch_list:
            payload = padding + password_1 + password_2 + ch
            log.warn(f"Payload: {payload}")
            compare_cipher = get_cipher(payload)
            compare_block = split_into_blocks(compare_cipher)
            if origin_block[2] == compare_block[2]:
                password_2 += ch
                log.critical(f"Found {i + 16}: {ch}")
                break

    final_password = password_1 + password_2
    log.warn(f"Final password: {final_password}")

    cmd(str(2))
    sleep(0.1)
    cmd(final_password)

    log.critical(r.recvline().decode())
