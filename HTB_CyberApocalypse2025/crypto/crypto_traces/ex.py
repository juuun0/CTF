#!/usr/bin/env python3

from pwn import *
import re
import operator

sla = lambda t, x: r.sendlineafter(t, x)
sl = lambda x: r.sendline(x)
cmd = lambda x: r.sendlineafter("> ", x)

freq = {
' ' : 18.28846265,
'E' : 10.26665037,
'T' : 7.51699827,
'A' : 6.53216702,
'O' : 6.15957725,
'N' : 5.71201113,
'I' : 5.66844326,
'S' : 5.31700534,
'R' : 4.98790855,
'H' : 4.97856396,
'L' : 3.31754796,
'D' : 3.28292310,
'U' : 2.27579536,
'C' : 2.23367596,
'M' : 2.02656783,
'F' : 1.98306716,
'W' : 1.70389377,
'G' : 1.62490441,
'P' : 1.50432428,
'Y' : 1.42766662,
'B' : 1.25888074,
'V' : 0.79611644,
'K' : 0.56096272,
'X' : 0.14092016,
'J' : 0.09752181,
'Q' : 0.08367550,
'Z' : 0.05128469,
}

def alphabetScore(txt):
    score = 0.0
    for c in txt:
        c = chr(c).upper()
        if c in freq:
            score += freq[c]
    return score

def getKeyString(ciphers):
    key_string = []
    for nColumnCipher in ciphers:
        max_score = 0.0
        key = 0
        for sbyte in range(0, 256):
            normal_string = [single ^ sbyte for single in nColumnCipher]
            score = alphabetScore(normal_string)

            if score > max_score:
                max_score = score
                key = sbyte
        key_string.append(key)
    return key_string

def xorWithKey(str1, key):
    result = []
    for x in str1:
        result.append("".join(chr(a ^ b) for a, b in zip(x, key)))
    return result

def xorWithKey_single(str1, key):
    result = []
    result.append("".join(chr(a ^ b) for a, b in zip(str1, key)))
    return result

def fixKeyString(key_string, cipher, original):
    decrypted = [x ^ y for x, y in zip(cipher, key_string)]
    aligned = [ord(x) for x in original]
    fixed = [x ^ y for x, y in zip(decrypted, aligned)]
    fixed_key_string = [x ^ y for x, y in zip(key_string, fixed)]
    key_string[:len(fixed_key_string)] = fixed_key_string
    return key_string

r = remote("94.237.61.48", 40637)

# Join general channel
cmd("join #general")

# Receive exists context
cipher = []
cipher_pattern = re.compile(" : .+")
context = r.recvuntil("guest >").decode()
chat_context = cipher_pattern.findall(context)
for txt in chat_context:
    cipher.append(bytes.fromhex(txt[3:]))

max_length = max([len(x) for x in cipher])
log.warn(f"max_length: {max_length}")

nColumnCipher = []
for n in range(0, max_length):
    nColumn = []
    for c in cipher:
        if len(c) > n:
            nColumn.append(c[n])
    nColumnCipher.append(nColumn)

key_string = getKeyString(nColumnCipher)
key_string = fixKeyString(key_string, cipher[6], "This channel is not safe for long talks. Let's switch to our private room.")
key_string = fixKeyString(key_string, cipher[15], "We can't take any risks. Let's leave this channel before they track us.")
key_string = fixKeyString(key_string, cipher[5], "Not yet, but I'm checking some unusual signals. If they sense us, we might have to")
key_string = fixKeyString(key_string, cipher[17], "Understood. I'm disconnecting now. If they have seen us, we must disappear immediately")
decrypt_list = xorWithKey(cipher, key_string)

for i in range(len(decrypt_list)):
    print(f"{i} {decrypt_list[i]}")

passphrase = re.findall(r'channel: .+', decrypt_list[7])[0]
passphrase = passphrase[9:]

sl("!nick hi")
sl("!leave")
cmd(f"join #secret {passphrase}")

# Receive exists context
cipher = []
cipher_pattern = re.compile(" : .+")
context = r.recvuntil("guest >").decode()
chat_context = cipher_pattern.findall(context)
for txt in chat_context:
    cipher.append(bytes.fromhex(txt[3:]))

max_length = max([len(x) for x in cipher])
log.warn(f"max_length: {max_length}")

nColumnCipher = []
for n in range(0, max_length):
    nColumn = []
    for c in cipher:
        if len(c) > n:
            nColumn.append(c[n])
    nColumnCipher.append(nColumn)

key_string = getKeyString(nColumnCipher)
key_string = fixKeyString(key_string, cipher[3], "We should keep our planning here. The outer halls are not secure, and too many eyes watch the open channels.")
key_string = fixKeyString(key_string, cipher[4], "Agreed. The enemy's scouts grow more persistent. If they catch even a whisper of our designs, they will move against us. We must not allow their seers or spies to track our")
key_string = fixKeyString(key_string, cipher[5], "I've been studying the traces left behind by our previous incantations, and something feels wrong. Our network of spells has sent out signals to an unknown beacon-one that")
key_string = fixKeyString(key_string, cipher[6], "I'm already cross-checking our spellwork against the ancient records. If this beacon was part of an older enchantment, I'll find proof. But if it is active now, then we have a problem")
key_string = fixKeyString(key_string, cipher[9], "Yes, but we must treat it only as a last resort. If we activate it too soon, we risk revealing its location. It is labeled as: HTB{")
key_string = fixKeyString(key_string, cipher[10], "Good. No record of it must exist in the written tomes. I will ensure all traces are erased, and it shall never be spoken of openly. If the enemy ever")
key_string = fixKeyString(key_string, cipher[11], "Agreed. The more we discuss it, the greater the risk. Every moment we delay, the Council strengthens its defenses. We must act soon before our window of opportunity closes.")
key_string = fixKeyString(key_string, cipher[12], "We should end this meeting and move to a more secure sanctum. If their mages or spies are closing in, they may intercept our words. We must not take that chance. Let this be the")

decrypt_list = xorWithKey(cipher, key_string)
for i in range(len(decrypt_list)):
    print(f"{i} {decrypt_list[i]}")

r.interactive()
