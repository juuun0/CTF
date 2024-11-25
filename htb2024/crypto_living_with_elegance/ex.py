#!/usr/bin/env python3

from pwn import *

context.log_level = 'debug'

sla = lambda t, x: r.sendlineafter(t, x)

def getCipher(idx):
    sla("for :", str(idx))
    r.recvuntil("A = ")
    A = int(r.recvline().decode().strip("\n"))
    r.recvuntil("b = ")
    b = int(r.recvline().decode().strip("\n"))
    if b < 0:
        return True

def checkBit(idx, val):
    for i in range(20):
        result = getCipher(idx)
        if result:
            val += "1"
            return
    val += "0"
    return

r = remote("83.136.255.125", 37899)

val = "0b"

for idx in range(471):
    checkBit(idx, val)

print(int(val, 2).to_bytes(60, "little"))
r.interactive()
