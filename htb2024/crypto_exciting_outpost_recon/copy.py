from hashlib import sha256

import os

LENGTH = 32


def encrypt_data(data, k):
    data += b'\x00' * (-len(data) % LENGTH)
    encrypted = b''

    for i in range(0, len(data), LENGTH):
        chunk = data[i:i+LENGTH]

        for a, b in zip(chunk, k):
            print(a, b)
            encrypted += bytes([a ^ b])

        print(k)
        k = sha256(k).digest()

    return encrypted


key = os.urandom(32)
print(type(key))

with open('plaintext.txt', 'rb') as f:
    plaintext = f.read()

assert plaintext.startswith(b'Great and Noble Leader of the Tariaki')       # have to make sure we are aptly sycophantic

with open('copy.txt', 'w') as f:
    enc = encrypt_data(plaintext, key)
    f.write(enc.hex())
