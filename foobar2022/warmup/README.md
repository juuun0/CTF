# Binary Specification

> [warmup.zip](./warmup.zip)

```c
chall: ELF 64-bit LSB shared object, x86-64, version 1 (SYSV), dynamically linked, interpreter /lib64/ld-linux-x86-64.so.2, BuildID[sha1]=8b72f0fc93f73d288141b26ac556a79cc1c3f495, for GNU/Linux 3.2.0, not stripped
```

ELF 64 and not stripped.

```c
❯ checksec chall
[*] '/root/warmup/chall'
    Arch:     amd64-64-little
    RELRO:    Full RELRO
    Stack:    Canary found
    NX:       NX enabled
    PIE:      PIE enabled
```

All mitigation is enabled and build in ubuntu 20.04

* * *

# Description

This challenge is very very simple **format string bug** binary also stack buffer overflow.

Try to leak canary and `__libc_start_main + 243` to libc base address. It can also leaking GOT address but i leak `__libc_start_main + 243` becase that is placed close to canary.

After leaking, i controlled to one gadget address.

* * *

# Exploit Code

> [solve](./solve.py)
