#!/usr/bin/env python3

from Cryptodome.Cipher import AES
import itertools

with open('output.txt', 'r') as f:
    data = f.read().splitlines()

ENCFLAG = bytearray.fromhex(data[1])
key = bytearray.fromhex("786f36dd7c9d902f1921629161d9b057")

# Generate all possible combinations of 16 bytes with values from 0x00 to 0xFF
combinations = itertools.product(range(256), repeat=16)

# Convert the first combination (or any other combination you choose) to a bytearray
first_combination = next(combinations)
byte_array = bytearray(first_combination)

print(len(ENCFLAG))
