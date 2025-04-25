#!/usr/bin/env python3

input_str = "IUC|t2nqm4`gm5h`5s2uin4u2d~� a"

# 결과를 담을 문자열
output_str = ""

for char in input_str:
    # 아스키 코드 값이 0 이하(널 문자)인 경우는 그대로 둠
    if ord(char) > 0:
        new_char = chr(ord(char) - 1)
    else:
        new_char = char
    output_str += new_char

print(output_str)
