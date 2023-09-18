#!/usr/bin/env python3

import angr

pie = 0x400000

p = angr.Project("./jumpout")
sm = p.factory.simulation_manager(p.factory.full_init_state())
sm.explore(find=0x00001240 + pie, avoid=0x00001251 + pie)

print(sm.found[0].posix.dumps(0))
