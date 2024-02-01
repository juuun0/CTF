#!/usr/bin/env python3
import struct

with open("./flag.enc", 'rb') as f:
    enc = f.read()

with open("./key", 'rb') as f:
    key = f.read()

val = enc[0: 4]
part_1 = val[0: 2]
part_2 = val[2: 4]

for i in range(3):
    key_part_1 = key[]
    (part_1 >> 9 | part_1 << 7) ^ 
