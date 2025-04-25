from sympy import *

p = 21214334341047589034959795830530169972304000967355896041112297190770972306665257150126981587914335537556050020788061
factor_p2_plus3 = factorint(p**2 + 3)

formatted = f"{p},1_" + "_".join(f"{prime},{exp}" for prime, exp in sorted(factor_p2_plus3.items()))
print(formatted)
