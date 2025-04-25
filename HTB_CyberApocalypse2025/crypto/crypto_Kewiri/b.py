import sympy
from sympy.ntheory import factorint

def factorize_curve_order(p, curve_order_fp):
    # elliptic curve order over F_p is given, use it to find order over F_{p^3}
    # Order over F_{p^3}: |E(F_{p^3})| = p^3 + 1 - alpha^3 - beta^3
    # alpha, beta는 complex conjugates이고, |alpha|=sqrt(p)
    # alpha + beta = p + 1 - curve_order_fp
    # alpha * beta = p
    # 따라서 alpha^3 + beta^3는 다음과 같이 간단히 계산 가능:
    trace = p + 1 - curve_order_fp
    alpha_beta = p
    alpha3_beta3 = trace**3 - 3*trace*alpha_beta
    
    # order of elliptic curve over F_{p^3}
    curve_order_fp3 = p**3 + 1 - alpha3_beta3
    
    # 소인수분해
    factors = factorint(curve_order_fp3)

    # 원하는 출력 포맷
    sorted_factors = sorted(factors.items())
    formatted_factors = '_'.join([f"{factor},{exp}" for factor, exp in sorted_factors])

    return formatted_factors

# 사용 예시:
p = 21214334341047589034959795830530169972304000967355896041112297190770972306665257150126981587914335537556050020788061 # 여기에 p값 입력
curve_order_fp = 21214334341047589034959795830530169972304000967355896041112297190770972306665257150126981587914335537556050020788061# F_p 위에서의 elliptic curve의 order 입력

print(factorize_curve_order(p, curve_order_fp))
