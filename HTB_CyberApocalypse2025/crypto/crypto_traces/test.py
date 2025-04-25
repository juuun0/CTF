import binascii

def xor_bytes(b1, b2):
    """두 바이트열을 XOR 연산합니다."""
    return bytes(a ^ b for a, b in zip(b1, b2))

def is_printable(b):
    """바이트열의 모든 문자가 출력 가능한지 확인합니다."""
    return all(32 <= byte < 127 for byte in b)

def crib_drag(xor_result, crib):
    """
    두 평문의 XOR 결과(xor_result)에서 예상 평문(crib)를 슬라이딩하며
    출력 가능한 후보 평문 조각을 찾아 반환합니다.
    반환값은 (위치, 복원된 평문 후보) 튜플의 리스트입니다.
    """
    possibilities = []
    for i in range(len(xor_result) - len(crib) + 1):
        candidate = xor_bytes(xor_result[i:i+len(crib)], crib)
        if is_printable(candidate):
            possibilities.append((i, candidate))
    return possibilities

if __name__ == "__main__":
    # 예시 암호문 (hex 문자열) 중 두 개를 선택합니다.
    # 실제 문제에서는 여러 암호문을 비교하면서 진행할 수 있습니다.
    ct1_hex = "ff88eec9e7e048ded9187d7005c4"    # 예: 첫 번째 암호문
    ct2_hex = "ff88eec9e7e05fc5d90776730acd07"    # 예: 두 번째 암호문
    
    # hex 문자열을 바이트열로 변환합니다.
    ct1 = binascii.unhexlify(ct1_hex)
    ct2 = binascii.unhexlify(ct2_hex)
    
    # 두 암호문을 XOR하면 m1 ⊕ m2가 됩니다.
    m1_xor_m2 = xor_bytes(ct1, ct2)
    print("두 암호문 XOR 결과 (m1 ⊕ m2):")
    print(m1_xor_m2)
    
    # 예상 평문(crib) 지정: HTB{ 형식으로 시작한다고 가정합니다.
    crib = b"HTB{"
    
    # crib dragging을 이용하여 crib가 등장할 수 있는 후보 위치를 찾습니다.
    candidates = crib_drag(m1_xor_m2, crib)
    
    if candidates:
        print("\n예상 평문(crib)을 이용한 후보 결과:")
        for pos, candidate in candidates:
            print(f"위치 {pos}: {candidate}")
    else:
        print("\n해당 crib에 대해 출력 가능한 후보를 찾지 못했습니다.")
