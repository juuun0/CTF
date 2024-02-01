#!/usr/bin/env python3

from pwn import *

#context.log_level = 'debug'

r = remote("host3.dreamhack.games", 24182)

def calc(formula):
    val1, val2 = int(formula.split('+')[0]), int(formula.split('+')[1].split('=')[0])
    result = val1 + val2
    return result

for i in range(50):
    result = calc(r.recvline().decode())
    r.sendline(str(result))

r.interactive()
