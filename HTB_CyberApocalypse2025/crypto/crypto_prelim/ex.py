import ast
from hashlib import sha256
from Crypto.Cipher import AES
from Crypto.Util.Padding import unpad

def compute_root(scrambled: list[int], e: int) -> list[int]:
    n = len(scrambled)
    root = [None] * n
    visited = [False] * n

    for i in range(n):
        if visited[i]:
            continue

        cycle = []
        j = i
        while not visited[j]:
            visited[j] = True
            cycle.append(j)
            j = scrambled[j]

        L = len(cycle)
        d = pow(e, -1, L)  # modular inverse of e mod cycle length

        for idx, pos in enumerate(cycle):
            root[pos] = cycle[(idx + d) % L]

    return root

def main():
    with open('tales.txt') as f:
        lines = f.read().splitlines()

    scrambled = ast.literal_eval(lines[0].split('=', 1)[1].strip())
    enc_flag = lines[1].split('=', 1)[1].strip().strip("'")
    e = 0x10001

    message = compute_root(scrambled, e)
    key = sha256(str(message).encode()).digest()

    cipher = AES.new(key, AES.MODE_ECB)
    flag = unpad(cipher.decrypt(bytes.fromhex(enc_flag)), 16)

    print(flag.decode())

if __name__ == '__main__':
    main()
