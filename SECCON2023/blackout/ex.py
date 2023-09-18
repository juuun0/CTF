#!/usr/bin/env python3

from pwn import *

context.log_level = 'debug'

class ProbIO:
    def __init__(self, r):
        self.r = r
        self.sla = lambda t, x: self.r.sendlineafter(t, x)
        self.sa = lambda t, x: self.r.sendafter(t, x)
    
    def sel1(self, idx, size, val):
        self.sla("> ", str(1))
        self.sla("Index: ", str(idx))
        self.sla("Size: ", str(size))
        self.sa("String: ", val)

    def sel2(self, idx, val):
        self.sla("> ", str(2))
        self.sla("Index: ", str(idx))
        self.sa("redact: ", val)

    def sel3(self, idx):
        self.sla("> ", str(3))
        self.sla("Index: ", str(idx))

class Primitives:
    def __init__(self, io):
        self.io = io

    def new(self, idx, size, val): return self.io.sel1(idx, size, val)
    def blackout(self, idx, val): return self.io.sel2(idx, val)
    def delete(self, idx): return self.io.sel3(idx)

def exploit(io, pri):
    pause()
    
    pri.new(0, 8, "A" * 8)

    pause()
    io.r.interactive()

def main(r):
    io = ProbIO(r)
    pri = Primitives(io)
    exploit(io, pri)

if __name__ == "__main__":
    r = remote("127.0.0.1", 9929)
    main(r)
