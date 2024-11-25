#!/usr/bin/env python3

from Cryptodome.Util.number import bytes_to_long as b2l

with open('test.txt', 'rb') as f:
    data = f.read()

print(int(bin(b2l(data))[2]))
