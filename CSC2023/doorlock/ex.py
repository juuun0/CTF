#!/usr/bin/env python3

encode = "5067491628217439052E156D2B160A2E0D272A61355C27700A150B4C060A0E4B36"
keylen = 5
arr = []

def rotate(strg, n):
    return strg[n:] + strg[:n]

for i in range(0, len(encode), 2):
    arr.append(int(encode[i: i+2], 16))

encoded = b""
for ch in arr:
    encoded += ch.to_bytes(1, byteorder="big")

key = "g8xBU"

flag = ""
for i, ch in enumerate(encoded):
    flag += chr(ch ^ ord(key[i % 5]))

print(rotate(flag, 5))

# FLAG{rUST_I5_h4Rd_2_r34D_isN7_1T}
