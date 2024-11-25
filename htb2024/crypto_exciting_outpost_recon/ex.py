#!/usr/bin/env python3

from hashlib import sha256

with open('output.txt', 'r') as f:
    data = f.read()

LENGTH = 32
key = "Great and Noble Leader of the Tariaki This is sample text"

val = bytearray.fromhex(data)

k = bytes()

dataChunk = val[0: 32]
keyChunk = key[0: 32]
for a, b in zip(dataChunk, keyChunk):
    k += bytes([a ^ ord(b)])

k = sha256(k).digest()

decrypted = bytes()

for i in range(32, len(val), 32):
    chunk = val[i: i + LENGTH]

    for a, b in zip(chunk, k):
        decrypted += bytes([a ^ b])

    k = sha256(k).digest()

print(decrypted)
