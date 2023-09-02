#!/usr/bin/env python3

from pwn import *
import re
#context.log_level = 'debug'

r = remote("sec-quals-alb-pwn-rev-7b5686e8d0f14e99.elb.ap-northeast-2.amazonaws.com", 5007)

r.sendlineafter(": ", str(10000))
res = r.recvn(10000)
p = re.compile(b'\[([^]]+)\]')

m = p.findall(res)
flag = ""
for c in m:
    flag += c.decode()

print(flag)

# FLAG{TurN_a1I_th3_StREetlIgHt5_0n}
