import binascii

def xor_bytes(b1, b2):
    """두 바이트열을 XOR 연산하여 반환합니다."""
    return bytes(a ^ b for a, b in zip(b1, b2))

def is_printable(b):
    """바이트열의 모든 문자가 출력 가능한지 (ASCII 32~126) 확인합니다."""
    return all(32 <= byte < 127 for byte in b)

def crib_drag(xor_result, crib):
    """
    두 평문의 XOR 결과(xor_result)에서 예상 평문(crib)을
    슬라이딩하며 해당 위치에서 XOR 연산한 결과가 출력 가능한지 확인합니다.
    
    반환값은 (위치, 복원된 평문 후보) 튜플의 리스트입니다.
    """
    possibilities = []
    for i in range(len(xor_result) - len(crib) + 1):
        candidate = xor_bytes(xor_result[i:i+len(crib)], crib)
        if is_printable(candidate):
            possibilities.append((i, candidate))
    return possibilities

def main():
    # 제공해주신 암호문들을 hex 문자열로 리스트에 저장합니다.
    ct_hex_list = [
        "ff88eec9e7e048ded9187d7005c4",
        "ff88eec9e7e05fc5d90776730acd07",
        "ff88eec9e7e05ec4d810797d02c40a74",
        "8983a0dce9e06bdec2557a3105c615205b3a96a15a25a30c6f6338898ed29ac00b23cfbf46abb932ae398e875cb9a5a4e72a21343f4eab93bb8ed3beead2ade963e0",
        "8b88e3cffeb378ded911353123c211205b3b83f35e67ae1c7e2d6c80858bc8d60021cdec07edd523b27b908745b9a7a6a830242f714ae381a6c0c0a9a3cbb9ef26a29b7b2f8b83247f4434",
        "9089f38af5a5789d96176e654bea456d0f308ee4582ca5177c633f8e8697c8d00733d0b909e7d524b37993c65bafeef48e2374327748bad2bccbcdbfe684b9ee2aee8d6d7bc6872c61552ba5952b01f1fc6481cef7be417a9fc0fcbecde28fa0c0338101b627",
        "8a8eeed9aca364d0d81b7e7d4bca1120413c92a14826aa1c3b252393cb9e87cb0e66d7ad04e08679fa5298d310afe0a7b02c2025770db79defc1d6bea3d4bef470af8e6d7bd98124640f",
        "9683f5cfaca97f91c21d7e311bc211735f3b94e04822ec1f74316c8e9e80c8d60c25d6be0dab963fbb7093c25be6e0f1aa2c662169658bb1999bc593e8c7aea05cfa8c5d17da81124307649f",
        "9989f38ae5b42291f91b77684bd00a615d36c6e84f67bb106f2b6c8e9e80c8c80635d7ec1cf98024ae7b998756b0acbda2367a",
        "8783f484ac8f79c396197a621f830f6f5936c6ec5a3eec117a3529c187978ed14932d1ad0bee8679fa4998875aa9b3a0e72731666948b18befcdc2bee6c2b9f128",
        "97c1ea8aefa869d2dd1c75764bcc17720f3f89e64867b8163b2129c198879ac04928ccec1cf99434bf3e92c117b3b5a6e72437327642ad81efdcc6a1e2cda2ee28",
        "9583e2daacad6991c3057f701fc6062e0f1a80a14f2fa9003b202d95889ac8ca076a83bb0dac993bfa769cd152fcb4bbe72437323f4ba281bb80",
        "97c1ebc6aca363dcc61469744bd70a650f3f87f55e34b8597f223880cb8581d10166ccb91aab9736b97588d717acacb5a96b74117a0dae87bcda83a9f1c5bff826af94717bd8872c67017ca8d42a01a3ed2bc9c8edba01",
        "9780a7cffaa57ec8c21d727f0c830b730f308ae45a35e0596c266c8c84848d851d2983b800eed539bf66898744a8a1b3a26b74096a5fe395a0cfcfecead7ecea6fba9261358b9c2e684263e3",
        "9689ebceacaf629f963c3c7c4bd00765463d81a14833be18752429c1989b8fcb082ad0ec0ef99a3afa7188d344b5a4b1e96503233f40aa95a7da83aee684bbfc72ad926d3f85",
        "8983a7c9edae2bc596017a7a0e83036e567394e8482cbf573b0f2995cc81c8c90c27d5a948ff9d3ea93e9ecf56b2aeb1ab6536237942b197efdacba9fa84b8ef67ad91282ed8c0",
        "9f81f5cfe9a42291fb1a6d744bc20e6c0f2787ed5034ec0d746338898ed298d70030c2b80dab8738b573d38765a9aeb1a5293d217759efd2bfc2c6adf0c1ecfe6aab9b7a7bdf862e294d64aa877d0cb4fa6e8f",
        "8b88e3cffeb378ded911353122840f204b3a95e25429a21c7837258f8cd286ca1e6883850eab813fbf67ddcf56aaa5f4b42031283f58b0deefd9c6eceed1bfe926aa937b3adb9e2e68532ba4993001b5e16ad5c8f3a601",
        "ff8ae2cbfaa5",
        "ff8ae2cbfaa5",
        "ff8ae2cbfaa"
    ]
    
    # hex 문자열을 바이트열로 변환합니다.
    ct_list = [binascii.unhexlify(ct_hex) for ct_hex in ct_hex_list]
    
    crib = b"HTB{"  # 예상 평문의 crib
    
    # 모든 암호문 쌍에 대해 crib dragging 공격을 수행합니다.
    for i in range(len(ct_list)):
        for j in range(i+1, len(ct_list)):
            ct1 = ct_list[i]
            ct2 = ct_list[j]
            # 두 암호문의 길이가 다를 수 있으므로, 짧은 길이까지만 XOR합니다.
            min_len = min(len(ct1), len(ct2))
            xor_result = xor_bytes(ct1[:min_len], ct2[:min_len])
            
            candidates = crib_drag(xor_result, crib)
            if candidates:
                print(f"암호문 {i+1}과 암호문 {j+1}에 대해 후보 결과:")
                for pos, candidate in candidates:
                    print(f"  위치 {pos}: {candidate}")
                print("="*60)

if __name__ == "__main__":
    main()
