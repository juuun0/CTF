#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
pymavlink로 이미 이륙된 드론을 GUIDED 모드로 전환 후
지정 GPS 좌표로 이동시킬 때까지 명령을 반복 전송하는 스크립트
"""

import time
import math
from pymavlink import mavutil

# ── 설정값 ───────────────────────────────────────────────────────────────
TARGET_LAT   = -35.36276     # 목표 위도
TARGET_LON   = 149.165771    # 목표 경도
TARGET_ALT   = 10.0          # 목표 고도 (m)
DIST_THRESH  = 1.0           # 수평 허용 반경 (m)
ALT_THRESH   = 0.5           # 수직 허용 오차 (m)
GUIDED_MODE  = 4             # ArduPilot에서 GUIDED 모드 ID :contentReference[oaicite:0]{index=0}
# ────────────────────────────────────────────────────────────────────────

def connect_and_set_guided(connection_str):
    """
    1) MAVLink/TCP 연결
    2) Heartbeat 수신 대기
    3) GUIDED 모드로 전환
    4) GUIDED 모드 진입 확인
    반환: (master, boot_time)
    """
    master = mavutil.mavlink_connection(connection_str)
    print(f"[INFO] {connection_str}에 연결 시도 중...")
    master.wait_heartbeat()
    print(f"[INFO] Heartbeat 수신됨. SYS_ID={master.target_system}, COMP_ID={master.target_component}")
    boot_time = time.time()

    # GUIDED 모드로 변경 요청
    master.mav.set_mode_send(
        master.target_system,
        mavutil.mavlink.MAV_MODE_FLAG_CUSTOM_MODE_ENABLED,
        GUIDED_MODE
    )
    # GUIDED 진입 확인 (Heartbeat의 custom_mode 필드 사용)
    print("[INFO] GUIDED 모드 전환 대기 중...")
    while True:
        msg = master.recv_match(type='HEARTBEAT', blocking=True, timeout=1)
        if msg and msg.custom_mode == GUIDED_MODE:
            print("[INFO] GUIDED 모드 진입 확인")
            break

    return master, boot_time

def send_position(master, boot_time, lat, lon, alt):
    """
    SET_POSITION_TARGET_GLOBAL_INT 메시지 전송
    (위치 x,y,z만 활성화; 속도·가속·Yaw 모두 무시)
    ─ MAV_FRAME_GLOBAL_RELATIVE_ALT_INT: home 기준 상대고도
    ─ type_mask: 위치만 사용 (비트마스크 값 예시는 Dev 문서 참고) :contentReference[oaicite:1]{index=1}
    """
    # 부팅 후 경과 시간 (ms 단위)
    t_ms = int((time.time() - boot_time) * 1000)
    mask = (
        mavutil.mavlink.POSITION_TARGET_TYPEMASK_VX_IGNORE |
        mavutil.mavlink.POSITION_TARGET_TYPEMASK_VY_IGNORE |
        mavutil.mavlink.POSITION_TARGET_TYPEMASK_VZ_IGNORE |
        mavutil.mavlink.POSITION_TARGET_TYPEMASK_AX_IGNORE |
        mavutil.mavlink.POSITION_TARGET_TYPEMASK_AY_IGNORE |
        mavutil.mavlink.POSITION_TARGET_TYPEMASK_AZ_IGNORE |
        mavutil.mavlink.POSITION_TARGET_TYPEMASK_YAW_IGNORE |
        mavutil.mavlink.POSITION_TARGET_TYPEMASK_YAW_RATE_IGNORE
    )
    master.mav.set_position_target_global_int_send(
        t_ms,
        master.target_system,
        master.target_component,
        mavutil.mavlink.MAV_FRAME_GLOBAL_RELATIVE_ALT_INT,
        mask,
        int(lat * 1e7),
        int(lon * 1e7),
        alt,
        0, 0, 0,   # vx, vy, vz (무시)
        0, 0, 0,   # afx, afy, afz (무시)
        0, 0       # yaw, yaw_rate (무시)
    )
    print(f"[CMD] ({t_ms} ms) → 위도 {lat}, 경도 {lon}, 고도 {alt}m 전송")

def get_current_position(master):
    """
    GLOBAL_POSITION_INT 메시지 수신 후
    (lat, lon, rel_alt) 반환
    """
    msg = master.recv_match(type='GLOBAL_POSITION_INT', blocking=True, timeout=1)
    if not msg:
        return None, None, None
    return msg.lat / 1e7, msg.lon / 1e7, msg.relative_alt / 1000.0

def haversine(lat1, lon1, lat2, lon2):
    """
    두 지점 간 수평 거리 계산 (m)
    """
    R = 6378137.0
    dlat = math.radians(lat2 - lat1)
    dlon = math.radians(lon2 - lon1)
    a = math.sin(dlat/2)**2 + math.cos(math.radians(lat1))*math.cos(math.radians(lat2))*math.sin(dlon/2)**2
    return R * 2 * math.atan2(math.sqrt(a), math.sqrt(1-a))

if __name__ == "__main__":
    import argparse
    parser = argparse.ArgumentParser(description="지정 위치에 도달할 때까지 offboard 제어")
    parser.add_argument("--connect", dest="conn", default="tcp:127.0.0.1:5760",
                        help="MAVLink 연결 문자열 (예: tcp:192.168.2.1:5760)")
    args = parser.parse_args()

    master, boot_time = connect_and_set_guided(args.conn)

    print("[INFO] 목표 지점까지 이동 시작")
    while True:
        send_position(master, boot_time, TARGET_LAT, TARGET_LON, TARGET_ALT)

        lat_c, lon_c, alt_c = get_current_position(master)
        if lat_c is not None:
            dist   = haversine(lat_c, lon_c, TARGET_LAT, TARGET_LON)
            alt_diff = abs(alt_c - TARGET_ALT)
            print(f"[POS] 현재 ({lat_c:.6f}, {lon_c:.6f}, {alt_c:.1f}m) → 거리 {dist:.1f}m, 고도차 {alt_diff:.2f}m")
            if dist < DIST_THRESH and alt_diff < ALT_THRESH:
                print("[INFO] 목표 지점 도달")
                break

        time.sleep(1)

    print("[INFO] 스크립트 종료. 이후 RTL/LOITER 등 후속 모드 전환 필요")
    master.close()
