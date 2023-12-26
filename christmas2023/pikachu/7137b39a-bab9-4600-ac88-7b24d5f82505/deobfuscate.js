"use strict";

(self.webpackChunkpikachu_volleyball = self.webpackChunkpikachu_volleyball || []).push([[0xb3], {
  0x3d6: (_0x54df34, _0x545c7f, _0x35adbe) => {
    _0x35adbe.d(_0x545c7f, {
      d: () => _0x5e1621
    });
    const _0x5e1621 = {
      SPRITE_SHEET: "../resources/assets/images/sprite_sheet.json",
      TEXTURES: {},
      SOUNDS: {}
    };
    const _0x222ad7 = _0x5e1621.TEXTURES;
    _0x222ad7.PIKACHU = (_0x1e19e5, _0x55a117) => "pikachu/pikachu_" + _0x1e19e5 + "_" + _0x55a117 + ".png";
    _0x222ad7.BALL = _0x25e20f => "ball/ball_" + _0x25e20f + ".png";
    _0x222ad7.NUMBER = _0x7672bb => "number/number_" + _0x7672bb + ".png";
    _0x222ad7.SKY_BLUE = "objects/sky_blue.png";
    _0x222ad7.MOUNTAIN = "objects/mountain.png";
    _0x222ad7.GROUND_RED = "objects/ground_red.png";
    _0x222ad7.GROUND_LINE = "objects/ground_line.png";
    _0x222ad7.GROUND_LINE_LEFT_MOST = "objects/ground_line_leftmost.png";
    _0x222ad7.GROUND_LINE_RIGHT_MOST = "objects/ground_line_rightmost.png";
    _0x222ad7.GROUND_YELLOW = "objects/ground_yellow.png";
    _0x222ad7.NET_PILLAR_TOP = "objects/net_pillar_top.png";
    _0x222ad7.NET_PILLAR = "objects/net_pillar.png";
    _0x222ad7.SHADOW = "objects/shadow.png";
    _0x222ad7.BALL_HYPER = "ball/ball_hyper.png";
    _0x222ad7.BALL_TRAIL = "ball/ball_trail.png";
    _0x222ad7.BALL_PUNCH = "ball/ball_punch.png";
    _0x222ad7.CLOUD = "objects/cloud.png";
    _0x222ad7.WAVE = "objects/wave.png";
    _0x222ad7.BLACK = "objects/black.png";
    _0x222ad7.SACHISOFT = "messages/common/sachisoft.png";
    _0x222ad7.READY = "messages/common/ready.png";
    _0x222ad7.GAME_END = "messages/common/game_end.png";
    _0x222ad7.MARK = "messages/ja/mark.png";
    _0x222ad7.POKEMON = "messages/ja/pokemon.png";
    _0x222ad7.PIKACHU_VOLLEYBALL = "messages/ja/pikachu_volleyball.png";
    _0x222ad7.FIGHT = "messages/ja/fight.png";
    _0x222ad7.WITH_COMPUTER = "messages/ja/with_computer.png";
    _0x222ad7.WITH_FRIEND = "messages/ja/with_friend.png";
    _0x222ad7.GAME_START = "messages/ja/game_start.png";
    _0x222ad7.SITTING_PIKACHU = "sitting_pikachu.png";
    const _0x54b67a = _0x5e1621.SOUNDS;
    _0x54b67a.BGM = "../resources/assets/sounds/bgm.mp3";
    _0x54b67a.PIPIKACHU = "../resources/assets/sounds/WAVE140_1.wav";
    _0x54b67a.PIKA = "../resources/assets/sounds/WAVE141_1.wav";
    _0x54b67a.CHU = "../resources/assets/sounds/WAVE142_1.wav";
    _0x54b67a.PI = "../resources/assets/sounds/WAVE143_1.wav";
    _0x54b67a.PIKACHU = "../resources/assets/sounds/WAVE144_1.wav";
    _0x54b67a.POWERHIT = "../resources/assets/sounds/WAVE145_1.wav";
    _0x54b67a.BALLTOUCHESGROUND = "../resources/assets/sounds/WAVE146_1.wav";
  },
  0x174: (_0x28d7f8, _0x3f8864, _0x95b830) => {
    var _0x5b4ec0 = _0x95b830(0x13f);
    var _0xa1ece1 = _0x95b830(0x2a8);
    var _0x32af96 = _0x95b830(0x2c6);
    var _0x26b9d3 = _0x95b830(0x2d4);
    var _0x5b5329 = _0x95b830(0x249);
    var _0x3d94a6 = _0x95b830(0x226);
    var _0x5c4051 = _0x95b830(0x7e);
    var _0x4632e9 = _0x95b830(0x2a7);
    var _0x164583 = _0x95b830(0x5d);
    var _0x485f52 = _0x95b830(0xc4);
    var _0x39aad7 = _0x95b830(0x26b);
    _0x95b830(0x3cb);
    class _0x3faded {
      constructor(_0x1e1bf7, _0x5da67e) {
        this.player1 = new _0x2baf64(false, _0x1e1bf7);
        this.player2 = new _0x2baf64(true, _0x5da67e);
        this.ball = new _0x1664ed(false);
      }
      ["runEngineForNextFrame"](_0x30cfe6) {
        const _0x5a20e4 = function (_0x4bc84a, _0x30b6d6, _0x42197d, _0x1af556) {
          const _0x14405b = function (_0x3af9da) {
            _0x3af9da.previousPreviousX = _0x3af9da.previousX;
            _0x3af9da.previousPreviousY = _0x3af9da.previousY;
            _0x3af9da.previousX = _0x3af9da.x;
            _0x3af9da.previousY = _0x3af9da.y;
            let _0xd5004b = _0x3af9da.fineRotation + (_0x3af9da.xVelocity / 0x2 | 0x0);
            if (_0xd5004b < 0x0) {
              _0xd5004b += 0x32;
            } else if (_0xd5004b > 0x32) {
              _0xd5004b += -0x32;
            }
            _0x3af9da.fineRotation = _0xd5004b;
            _0x3af9da.rotation = _0x3af9da.fineRotation / 0xa | 0x0;
            const _0x4cd080 = _0x3af9da.x + _0x3af9da.xVelocity;
            if (_0x4cd080 < 0x14 || _0x4cd080 > 0x1b0) {
              _0x3af9da.xVelocity = -_0x3af9da.xVelocity;
            }
            let _0x3572fc = _0x3af9da.y + _0x3af9da.yVelocity;
            if (_0x3572fc < 0x0) {
              _0x3af9da.yVelocity = 0x1;
            }
            if (Math.abs(_0x3af9da.x - 216) < 0x19 && _0x3af9da.y > 0xb0) {
              if (_0x3af9da.y <= 0xc0) {
                if (_0x3af9da.yVelocity > 0x0) {
                  _0x3af9da.yVelocity = -_0x3af9da.yVelocity;
                }
              } else if (_0x3af9da.x < 216) {
                _0x3af9da.xVelocity = -Math.abs(_0x3af9da.xVelocity);
              } else {
                _0x3af9da.xVelocity = Math.abs(_0x3af9da.xVelocity);
              }
            }
            _0x3572fc = _0x3af9da.y + _0x3af9da.yVelocity;
            return _0x3572fc > 0xfc ? (_0x3af9da.sound.ballTouchesGround = true, _0x3af9da.yVelocity = -_0x3af9da.yVelocity, _0x3af9da.punchEffectX = _0x3af9da.x, _0x3af9da.y = 0xfc, _0x3af9da.punchEffectRadius = 0x14, _0x3af9da.punchEffectY = 272, true) : (_0x3af9da.y = _0x3572fc, _0x3af9da.x = _0x3af9da.x + _0x3af9da.xVelocity, _0x3af9da.yVelocity += 0x1, false);
          }(_0x42197d);
          let _0x4087b2;
          let _0x4950a6;
          for (let _0x148847 = 0x0; _0x148847 < 0x2; _0x148847++) {
            if (0x0 === _0x148847) {
              _0x4087b2 = _0x4bc84a;
              _0x4950a6 = _0x30b6d6;
            } else {
              _0x4087b2 = _0x30b6d6;
              _0x4950a6 = _0x4bc84a;
            }
            _0x49a6c3(_0x42197d);
            _0x476f60(_0x4087b2, _0x1af556[_0x148847], _0x4950a6, _0x42197d);
          }
          for (let _0x174246 = 0x0; _0x174246 < 0x2; _0x174246++) {
            _0x4087b2 = 0x0 === _0x174246 ? _0x4bc84a : _0x30b6d6;
            if (true === _0x538a11(_0x42197d, _0x4087b2.x, _0x4087b2.y)) {
              if (false === _0x4087b2.isCollisionWithBallHappened) {
                _0x5861d1(_0x42197d, _0x4087b2.x, _0x1af556[_0x174246], _0x4087b2.state);
                _0x4087b2.isCollisionWithBallHappened = true;
              }
            } else {
              _0x4087b2.isCollisionWithBallHappened = false;
            }
          }
          return _0x14405b;
        }(this.player1, this.player2, this.ball, _0x30cfe6);
        return _0x5a20e4;
      }
    }
    class _0x2bfca0 {
      constructor() {
        this.xDirection = 0x0;
        this.yDirection = 0x0;
        this.powerHit = 0x0;
      }
    }
    class _0x2baf64 {
      constructor(_0x44f4a4, _0x2a7643) {
        this.isPlayer2 = _0x44f4a4;
        this.isComputer = _0x2a7643;
        this.initializeForNewRound();
        this.divingDirection = 0x0;
        this.lyingDownDurationLeft = -0x1;
        this.isWinner = false;
        this.gameEnded = false;
        this.computerWhereToStandBy = 0x0;
        this.sound = {
          pipikachu: false,
          pika: false,
          chu: false
        };
      }
      ["initializeForNewRound"]() {
        this.x = 0x24;
        if (this.isPlayer2) {
          this.x = 396;
        }
        this.y = 0xf4;
        this.yVelocity = 0x0;
        this.isCollisionWithBallHappened = false;
        this.state = 0x0;
        this.frameNumber = 0x0;
        this.normalStatusArmSwingDirection = 0x1;
        this.delayBeforeNextFrame = 0x0;
        this.computerBoldness = Math.floor(0x8000 * Math.random()) % 0x5;
      }
    }
    class _0x1664ed {
      constructor(_0x421641) {
        this.initializeForNewRound(_0x421641);
        this.expectedLandingPointX = 0x0;
        this.rotation = 0x0;
        this.fineRotation = 0x0;
        this.punchEffectX = 0x0;
        this.punchEffectY = 0x0;
        this.previousX = 0x0;
        this.previousPreviousX = 0x0;
        this.previousY = 0x0;
        this.previousPreviousY = 0x0;
        this.sound = {
          powerHit: false,
          ballTouchesGround: false
        };
      }
      ["initializeForNewRound"](_0xe00aa0) {
        this.x = 0x38;
        if (true === _0xe00aa0) {
          this.x = 376;
        }
        this.y = 0x0;
        this.xVelocity = 0x0;
        this.yVelocity = 0x1;
        this.punchEffectRadius = 0x0;
        this.isPowerHit = false;
      }
    }
    function _0x538a11(_0x1889e8, _0x1ce703, _0x3c7530) {
      let _0x2984b0 = _0x1889e8.x - _0x1ce703;
      return Math.abs(_0x2984b0) <= 0x20 && (_0x2984b0 = _0x1889e8.y - _0x3c7530, Math.abs(_0x2984b0) <= 0x20);
    }
    function _0x476f60(_0x1fd075, _0x2ea13b, _0x4e7831, _0x3cb634) {
      if (true === _0x1fd075.isComputer) {
        (function (_0x280650, _0x194f0f, _0x335257, _0x1f0faa) {
          _0x1f0faa.xDirection = 0x0;
          _0x1f0faa.yDirection = 0x0;
          _0x1f0faa.powerHit = 0x0;
          let _0x19e0bf = _0x194f0f.expectedLandingPointX;
          if (Math.abs(_0x194f0f.x - _0x280650.x) > 0x64 && Math.abs(_0x194f0f.xVelocity) < _0x280650.computerBoldness + 0x5) {
            const _0x2cd36b = Number(_0x280650.isPlayer2) * 216;
            if ((_0x194f0f.expectedLandingPointX <= _0x2cd36b || _0x194f0f.expectedLandingPointX >= Number(_0x280650.isPlayer2) * 0x1b0 + 216) && 0x0 === _0x280650.computerWhereToStandBy) {
              _0x19e0bf = _0x2cd36b + 108;
            }
          }
          if (Math.abs(_0x19e0bf - _0x280650.x) > _0x280650.computerBoldness + 0x8) {
            if (_0x280650.x < _0x19e0bf) {
              _0x1f0faa.xDirection = 0x1;
            } else {
              _0x1f0faa.xDirection = -0x1;
            }
          } else if (Math.floor(0x8000 * Math.random()) % 0x14 == 0x0) {
            _0x280650.computerWhereToStandBy = Math.floor(0x8000 * Math.random()) % 0x2;
          }
          if (0x0 === _0x280650.state) {
            if (Math.abs(_0x194f0f.xVelocity) < _0x280650.computerBoldness + 0x3 && Math.abs(_0x194f0f.x - _0x280650.x) < 0x20 && _0x194f0f.y > -0x24 && _0x194f0f.y < 0xa * _0x280650.computerBoldness + 0x54 && _0x194f0f.yVelocity > 0x0) {
              _0x1f0faa.yDirection = -0x1;
            }
            const _0x493e06 = Number(_0x280650.isPlayer2) * 216;
            const _0x13ff97 = (Number(_0x280650.isPlayer2) + 0x1) * 216;
            if (_0x194f0f.expectedLandingPointX > _0x493e06 && _0x194f0f.expectedLandingPointX < _0x13ff97 && Math.abs(_0x194f0f.x - _0x280650.x) > 0x5 * _0x280650.computerBoldness + 0x40 && _0x194f0f.x > _0x493e06 && _0x194f0f.x < _0x13ff97 && _0x194f0f.y > 0xae) {
              _0x1f0faa.powerHit = 0x1;
              if (_0x280650.x < _0x194f0f.x) {
                _0x1f0faa.xDirection = 0x1;
              } else {
                _0x1f0faa.xDirection = -0x1;
              }
            }
          } else {
            if ((0x1 === _0x280650.state || 0x2 === _0x280650.state) && (Math.abs(_0x194f0f.x - _0x280650.x) > 0x8 && (_0x280650.x < _0x194f0f.x ? _0x1f0faa.xDirection = 0x1 : _0x1f0faa.xDirection = -0x1), Math.abs(_0x194f0f.x - _0x280650.x) < 0x30 && Math.abs(_0x194f0f.y - _0x280650.y) < 0x30)) {
              const _0x32003d = function (_0x2efc3c, _0x1f681b, _0x1bb7cd, _0x3de5e0) {
                if (Math.floor(0x8000 * Math.random()) % 0x2 == 0x0) {
                  for (let _0x82a190 = 0x1; _0x82a190 > -0x1; _0x82a190--) {
                    for (let _0x395b16 = -0x1; _0x395b16 < 0x2; _0x395b16++) {
                      const _0x35976b = _0x50ead2(_0x82a190, _0x395b16, _0x1f681b);
                      if ((_0x35976b <= Number(_0x2efc3c.isPlayer2) * 216 || _0x35976b >= Number(_0x2efc3c.isPlayer2) * 0x1b0 + 216) && Math.abs(_0x35976b - _0x1bb7cd.x) > 0x40) {
                        _0x3de5e0.xDirection = _0x82a190;
                        _0x3de5e0.yDirection = _0x395b16;
                        return true;
                      }
                    }
                  }
                } else {
                  for (let _0x4b4c76 = 0x1; _0x4b4c76 > -0x1; _0x4b4c76--) {
                    for (let _0xa93602 = 0x1; _0xa93602 > -0x2; _0xa93602--) {
                      const _0x229c17 = _0x50ead2(_0x4b4c76, _0xa93602, _0x1f681b);
                      if ((_0x229c17 <= Number(_0x2efc3c.isPlayer2) * 216 || _0x229c17 >= Number(_0x2efc3c.isPlayer2) * 0x1b0 + 216) && Math.abs(_0x229c17 - _0x1bb7cd.x) > 0x40) {
                        _0x3de5e0.xDirection = _0x4b4c76;
                        _0x3de5e0.yDirection = _0xa93602;
                        return true;
                      }
                    }
                  }
                }
                return false;
              }(_0x280650, _0x194f0f, _0x335257, _0x1f0faa);
              if (true === _0x32003d) {
                _0x1f0faa.powerHit = 0x1;
                if (Math.abs(_0x335257.x - _0x280650.x) < 0x50 && -0x1 !== _0x1f0faa.yDirection) {
                  _0x1f0faa.yDirection = -0x1;
                }
              }
            }
          }
        })(_0x1fd075, _0x3cb634, _0x4e7831, _0x2ea13b);
      }
      if (0x4 === _0x1fd075.state) {
        _0x1fd075.lyingDownDurationLeft += -0x1;
        return void (_0x1fd075.lyingDownDurationLeft < -0x1 && (_0x1fd075.state = 0x0));
      }
      let _0x24c94b = 0x0;
      if (_0x1fd075.state < 0x5) {
        _0x24c94b = _0x1fd075.state < 0x3 ? 0x6 * _0x2ea13b.xDirection : 0x8 * _0x1fd075.divingDirection;
      }
      const _0x3e1ab3 = _0x1fd075.x + _0x24c94b;
      _0x1fd075.x = _0x3e1ab3;
      if (false === _0x1fd075.isPlayer2) {
        if (_0x3e1ab3 < 0x20) {
          _0x1fd075.x = 0x20;
        } else if (_0x3e1ab3 > 184) {
          _0x1fd075.x = 184;
        }
      } else if (_0x3e1ab3 < 248) {
        _0x1fd075.x = 248;
      } else if (_0x3e1ab3 > 400) {
        _0x1fd075.x = 400;
      }
      if (_0x1fd075.state < 0x3 && -0x1 === _0x2ea13b.yDirection && _0x1fd075.y === 0xf4) {
        _0x1fd075.yVelocity = -0x10;
        _0x1fd075.state = 0x1;
        _0x1fd075.frameNumber = 0x0;
        _0x1fd075.sound.chu = true;
      }
      const _0x5938ed = _0x1fd075.y + _0x1fd075.yVelocity;
      _0x1fd075.y = _0x5938ed;
      if (_0x5938ed < 0xf4) {
        _0x1fd075.yVelocity += 0x1;
      } else if (_0x5938ed > 0xf4) {
        _0x1fd075.yVelocity = 0x0;
        _0x1fd075.y = 0xf4;
        _0x1fd075.frameNumber = 0x0;
        if (0x3 === _0x1fd075.state) {
          _0x1fd075.state = 0x4;
          _0x1fd075.frameNumber = 0x0;
          _0x1fd075.lyingDownDurationLeft = 0x3;
        } else {
          _0x1fd075.state = 0x0;
        }
      }
      if (0x1 === _0x2ea13b.powerHit) {
        if (0x1 === _0x1fd075.state) {
          _0x1fd075.delayBeforeNextFrame = 0x5;
          _0x1fd075.frameNumber = 0x0;
          _0x1fd075.state = 0x2;
          _0x1fd075.sound.pika = true;
        } else if (0x0 === _0x1fd075.state && 0x0 !== _0x2ea13b.xDirection) {
          _0x1fd075.state = 0x3;
          _0x1fd075.frameNumber = 0x0;
          _0x1fd075.divingDirection = _0x2ea13b.xDirection;
          _0x1fd075.yVelocity = -0x5;
          _0x1fd075.sound.chu = true;
        }
      }
      if (0x1 === _0x1fd075.state) {
        _0x1fd075.frameNumber = (_0x1fd075.frameNumber + 0x1) % 0x3;
      } else {
        if (0x2 === _0x1fd075.state) {
          if (_0x1fd075.delayBeforeNextFrame < 0x1) {
            _0x1fd075.frameNumber += 0x1;
            if (_0x1fd075.frameNumber > 0x4) {
              _0x1fd075.frameNumber = 0x0;
              _0x1fd075.state = 0x1;
            }
          } else {
            _0x1fd075.delayBeforeNextFrame -= 0x1;
          }
        } else {
          if (0x0 === _0x1fd075.state && (_0x1fd075.delayBeforeNextFrame += 0x1, _0x1fd075.delayBeforeNextFrame > 0x3)) {
            _0x1fd075.delayBeforeNextFrame = 0x0;
            const _0x1ccf3e = _0x1fd075.frameNumber + _0x1fd075.normalStatusArmSwingDirection;
            if (_0x1ccf3e < 0x0 || _0x1ccf3e > 0x4) {
              _0x1fd075.normalStatusArmSwingDirection = -_0x1fd075.normalStatusArmSwingDirection;
            }
            _0x1fd075.frameNumber = _0x1fd075.frameNumber + _0x1fd075.normalStatusArmSwingDirection;
          }
        }
      }
      if (true === _0x1fd075.gameEnded) {
        if (0x0 === _0x1fd075.state) {
          if (true === _0x1fd075.isWinner) {
            _0x1fd075.state = 0x5;
            _0x1fd075.sound.pipikachu = true;
          } else {
            _0x1fd075.state = 0x6;
          }
          _0x1fd075.delayBeforeNextFrame = 0x0;
          _0x1fd075.frameNumber = 0x0;
        }
        (function (_0x5b5c2a) {
          if (true === _0x5b5c2a.gameEnded && _0x5b5c2a.frameNumber < 0x4) {
            _0x5b5c2a.delayBeforeNextFrame += 0x1;
            if (_0x5b5c2a.delayBeforeNextFrame > 0x4) {
              _0x5b5c2a.delayBeforeNextFrame = 0x0;
              _0x5b5c2a.frameNumber += 0x1;
            }
          }
        })(_0x1fd075);
      }
    }
    function _0x5861d1(_0x2951f3, _0x243940, _0x5d0c09, _0x509095) {
      if (_0x2951f3.x < _0x243940) {
        _0x2951f3.xVelocity = -(Math.abs(_0x2951f3.x - _0x243940) / 0x3 | 0x0);
      } else if (_0x2951f3.x > _0x243940) {
        _0x2951f3.xVelocity = Math.abs(_0x2951f3.x - _0x243940) / 0x3 | 0x0;
      }
      if (0x0 === _0x2951f3.xVelocity) {
        _0x2951f3.xVelocity = Math.floor(0x8000 * Math.random()) % 0x3 - 0x1;
      }
      const _0x37f3f5 = Math.abs(_0x2951f3.yVelocity);
      _0x2951f3.yVelocity = -_0x37f3f5;
      if (_0x37f3f5 < 0xf) {
        _0x2951f3.yVelocity = -0xf;
      }
      if (0x2 === _0x509095) {
        if (_0x2951f3.x < 216) {
          _0x2951f3.xVelocity = 0xa * (Math.abs(_0x5d0c09.xDirection) + 0x1);
        } else {
          _0x2951f3.xVelocity = 0xa * -(Math.abs(_0x5d0c09.xDirection) + 0x1);
        }
        _0x2951f3.punchEffectX = _0x2951f3.x;
        _0x2951f3.punchEffectY = _0x2951f3.y;
        _0x2951f3.yVelocity = Math.abs(_0x2951f3.yVelocity) * _0x5d0c09.yDirection * 0x2;
        _0x2951f3.punchEffectRadius = 0x14;
        _0x2951f3.sound.powerHit = true;
        _0x2951f3.isPowerHit = true;
      } else {
        _0x2951f3.isPowerHit = false;
      }
      _0x49a6c3(_0x2951f3);
    }
    function _0x49a6c3(_0x35d47d) {
      const _0x5cb796 = {
        x: _0x35d47d.x,
        y: _0x35d47d.y,
        xVelocity: _0x35d47d.xVelocity,
        yVelocity: _0x35d47d.yVelocity
      };
      let _0x52038a = 0x0;
      for (;;) {
        _0x52038a++;
        const _0x2e2b1d = _0x5cb796.xVelocity + _0x5cb796.x;
        if (_0x2e2b1d < 0x14 || _0x2e2b1d > 0x1b0) {
          _0x5cb796.xVelocity = -_0x5cb796.xVelocity;
        }
        if (_0x5cb796.y + _0x5cb796.yVelocity < 0x0) {
          _0x5cb796.yVelocity = 0x1;
        }
        if (Math.abs(_0x5cb796.x - 216) < 0x19 && _0x5cb796.y > 0xb0) {
          if (_0x5cb796.y < 0xc0) {
            if (_0x5cb796.yVelocity > 0x0) {
              _0x5cb796.yVelocity = -_0x5cb796.yVelocity;
            }
          } else if (_0x5cb796.x < 216) {
            _0x5cb796.xVelocity = -Math.abs(_0x5cb796.xVelocity);
          } else {
            _0x5cb796.xVelocity = Math.abs(_0x5cb796.xVelocity);
          }
        }
        _0x5cb796.y = _0x5cb796.y + _0x5cb796.yVelocity;
        if (_0x5cb796.y > 0xfc || _0x52038a >= 0x3e8) {
          break;
        }
        _0x5cb796.x = _0x5cb796.x + _0x5cb796.xVelocity;
        _0x5cb796.yVelocity += 0x1;
      }
      _0x35d47d.expectedLandingPointX = _0x5cb796.x;
    }
    function _0x50ead2(_0x178b0f, _0x48e7d9, _0x2eb8da) {
      const _0x13c59c = {
        x: _0x2eb8da.x,
        y: _0x2eb8da.y,
        xVelocity: _0x2eb8da.xVelocity,
        yVelocity: _0x2eb8da.yVelocity
      };
      if (_0x13c59c.x < 216) {
        _0x13c59c.xVelocity = 0xa * (Math.abs(_0x178b0f) + 0x1);
      } else {
        _0x13c59c.xVelocity = 0xa * -(Math.abs(_0x178b0f) + 0x1);
      }
      _0x13c59c.yVelocity = Math.abs(_0x13c59c.yVelocity) * _0x48e7d9 * 0x2;
      let _0x1dba6f = 0x0;
      for (;;) {
        _0x1dba6f++;
        const _0x15ee88 = _0x13c59c.x + _0x13c59c.xVelocity;
        if (_0x15ee88 < 0x14 || _0x15ee88 > 0x1b0) {
          _0x13c59c.xVelocity = -_0x13c59c.xVelocity;
        }
        if (_0x13c59c.y + _0x13c59c.yVelocity < 0x0) {
          _0x13c59c.yVelocity = 0x1;
        }
        if (Math.abs(_0x13c59c.x - 216) < 0x19 && _0x13c59c.y > 0xb0 && _0x13c59c.yVelocity > 0x0) {
          _0x13c59c.yVelocity = -_0x13c59c.yVelocity;
        }
        _0x13c59c.y = _0x13c59c.y + _0x13c59c.yVelocity;
        if (_0x13c59c.y > 0xfc || _0x1dba6f >= 0x3e8) {
          return _0x13c59c.x;
        }
        _0x13c59c.x = _0x13c59c.x + _0x13c59c.xVelocity;
        _0x13c59c.yVelocity += 0x1;
      }
    }
    var _0x517a99 = _0x95b830(0x198);
    var _0x4a2d5f = _0x95b830(0x21);
    var _0x4ef52b = _0x95b830(0x376);
    class _0x1879ef {
      constructor() {
        this.topLeftPointX = Math.floor(0x8000 * Math.random()) % 0x1f4 - 0x44;
        this.topLeftPointY = Math.floor(0x8000 * Math.random()) % 0x98;
        this.topLeftPointXVelocity = 0x1 + Math.floor(0x8000 * Math.random()) % 0x2;
        this.sizeDiffTurnNumber = Math.floor(0x8000 * Math.random()) % 0xb;
      }
      get ["sizeDiff"]() {
        return 0x5 - Math.abs(this.sizeDiffTurnNumber - 0x5);
      }
      get ["spriteTopLeftPointX"]() {
        return this.topLeftPointX - this.sizeDiff;
      }
      get ["spriteTopLeftPointY"]() {
        return this.topLeftPointY - this.sizeDiff;
      }
      get ["spriteWidth"]() {
        return 0x30 + 0x2 * this.sizeDiff;
      }
      get ["spriteHeight"]() {
        return 0x18 + 0x2 * this.sizeDiff;
      }
    }
    class _0x196ad9 {
      constructor() {
        this.verticalCoord = 0x0;
        this.verticalCoordVelocity = 0x2;
        this.yCoords = [];
        for (let _0x28f616 = 0x0; _0x28f616 < 0x1b; _0x28f616++) {
          this.yCoords.push(0x13a);
        }
      }
    }
    var _0x1d6868 = _0x95b830(0x3d6);
    const _0xc9216d = _0x1d6868.d.TEXTURES;
    class _0x1bcab2 {
      constructor(_0x4caea8) {
        const _0x363add = _0x4caea8[_0x1d6868.d.SPRITE_SHEET].textures;
        this.mark = _0x30e581(_0x363add, _0xc9216d.MARK, 0.5, 0.5);
        this.mark.x = 0xd8;
        this.mark.y = 0x98;
        this.container = new _0x5b5329.W2();
        this.container.addChild(this.mark);
      }
      get ["visible"]() {
        return this.container.visible;
      }
      set ["visible"](_0x3dbc7f) {
        this.container.visible = _0x3dbc7f;
      }
      ["drawMark"](_0xeb831b) {
        const _0x2e0817 = this.mark;
        if (0x0 !== _0xeb831b) {
          if (_0xeb831b < 0x64) {
            _0x2e0817.alpha = Math.min(0x1, _0x2e0817.alpha + 0.04);
          } else if (_0xeb831b >= 0x64) {
            _0x2e0817.alpha = Math.max(0x0, _0x2e0817.alpha - 0.04);
          }
        } else {
          _0x2e0817.alpha = 0x0;
        }
      }
    }
    class _0x23c9bd {
      constructor(_0x40dca0) {
        const _0x47ab62 = _0x40dca0[_0x1d6868.d.SPRITE_SHEET].textures;
        this.messages = {
          pokemon: _0x30e581(_0x47ab62, _0xc9216d.POKEMON, 0x0, 0x0),
          pikachuVolleyball: _0x30e581(_0x47ab62, _0xc9216d.PIKACHU_VOLLEYBALL, 0x0, 0x0),
          withWho: [_0x30e581(_0x47ab62, _0xc9216d.WITH_COMPUTER, 0x0, 0x0), _0x30e581(_0x47ab62, _0xc9216d.WITH_FRIEND, 0x0, 0x0)],
          sachisoft: _0x30e581(_0x47ab62, _0xc9216d.SACHISOFT, 0x0, 0x0),
          fight: _0x30e581(_0x47ab62, _0xc9216d.FIGHT, 0x0, 0x0)
        };
        this.sittingPikachuTilesContainer = function (_0x48ee2e) {
          const _0x1f7e31 = new _0x5b5329.W2();
          const _0x37c0d1 = _0x48ee2e[_0xc9216d.SITTING_PIKACHU];
          const _0x245a90 = _0x37c0d1.width;
          const _0x39e38b = _0x37c0d1.height;
          let _0x38c7e0;
          for (let _0x2eacec = 0x0; _0x2eacec < Math.floor(0x130 / _0x39e38b) + 0x2; _0x2eacec++) {
            for (let _0x3f534c = 0x0; _0x3f534c < Math.floor(0x1b0 / _0x245a90) + 0x2; _0x3f534c++) {
              _0x38c7e0 = new _0x4a2d5f.j(_0x37c0d1);
              _0x2fd797(_0x1f7e31, _0x38c7e0, _0x245a90 * _0x3f534c, _0x39e38b * _0x2eacec);
            }
          }
          return _0x1f7e31;
        }(_0x47ab62);
        this.messages.sachisoft.x = 0xd8 - this.messages.sachisoft.texture.width / 0x2;
        this.messages.sachisoft.y = 0x108;
        this.messages.pikachuVolleyball.x = 0x8c;
        this.messages.pikachuVolleyball.y = 0x50;
        this.messages.pokemon.x = 0xaa;
        this.messages.pokemon.y = 0x28;
        this.container = new _0x5b5329.W2();
        this.container.addChild(this.sittingPikachuTilesContainer);
        this.container.addChild(this.messages.pokemon);
        this.container.addChild(this.messages.pikachuVolleyball);
        this.container.addChild(this.messages.withWho[0x0]);
        this.container.addChild(this.messages.withWho[0x1]);
        this.container.addChild(this.messages.sachisoft);
        this.container.addChild(this.messages.fight);
        this.initializeVisibles();
        this.sittingPikachuTilesDisplacement = 0x0;
        this.selectedWithWho = -0x1;
        this.selectedWithWhoMessageSizeIncrement = 0x2;
      }
      get ["visible"]() {
        return this.container.visible;
      }
      set ["visible"](_0x4aa23c) {
        this.container.visible = _0x4aa23c;
        if (false === _0x4aa23c) {
          this.initializeVisibles();
        }
      }
      ["initializeVisibles"]() {
        for (const _0x373f3d in this.messages) this.messages[_0x373f3d].visible = false;
      }
      ["drawFightMessage"](_0x47f187) {
        const _0x15b793 = [0x14, 0x16, 0x19, 0x1b, 0x1e, 0x1b, 0x19, 0x16, 0x14];
        const _0x45aa9d = this.messages.fight;
        const _0x3259e7 = _0x45aa9d.texture.width;
        const _0x559f6f = _0x45aa9d.texture.height;
        if (0x0 === _0x47f187) {
          _0x45aa9d.visible = true;
        }
        if (_0x47f187 < 0x1e) {
          const _0x1aa318 = Math.floor(Math.floor(_0x47f187 * _0x3259e7 / 0x1e) / 0x2);
          const _0x279495 = Math.floor(Math.floor(_0x47f187 * _0x559f6f / 0x1e) / 0x2);
          _0x45aa9d.width = 0x2 * _0x1aa318;
          _0x45aa9d.height = 0x2 * _0x279495;
          _0x45aa9d.x = 0x64 - _0x1aa318;
          _0x45aa9d.y = 0x46 - _0x279495;
        } else {
          const _0x161850 = (_0x47f187 + 0x1) % 0x9;
          const _0x34a4ca = Math.floor(Math.floor(_0x15b793[_0x161850] * _0x3259e7 / 0x1e) / 0x2);
          const _0x35abbf = Math.floor(Math.floor(_0x15b793[_0x161850] * _0x559f6f / 0x1e) / 0x2);
          _0x45aa9d.width = 0x2 * _0x34a4ca;
          _0x45aa9d.height = 0x2 * _0x35abbf;
          _0x45aa9d.y = 0x46 - _0x35abbf;
          _0x45aa9d.x = 0x64 - _0x34a4ca;
        }
      }
      ["drawSachisoft"](_0x37c1e5) {
        if (0x0 === _0x37c1e5) {
          this.messages.sachisoft.visible = true;
          this.messages.sachisoft.alpha = 0x0;
        }
        this.messages.sachisoft.alpha = Math.min(0x1, this.messages.sachisoft.alpha + 0.04);
        if (_0x37c1e5 > 0x46) {
          this.messages.sachisoft.alpha = 0x1;
        }
      }
      ["drawSittingPikachuTiles"](_0x287e8a) {
        if (0x0 === _0x287e8a) {
          this.sittingPikachuTilesContainer.visible = true;
          this.sittingPikachuTilesContainer.alpha = 0x0;
        }
        const _0x5eb3f9 = this.sittingPikachuTilesContainer.getChildAt(0x0).texture.height;
        this.sittingPikachuTilesDisplacement = (this.sittingPikachuTilesDisplacement + 0x2) % _0x5eb3f9;
        this.sittingPikachuTilesContainer.x = -this.sittingPikachuTilesDisplacement;
        this.sittingPikachuTilesContainer.y = -this.sittingPikachuTilesDisplacement;
        if (_0x287e8a > 0x1e) {
          this.sittingPikachuTilesContainer.alpha = Math.min(0x1, this.sittingPikachuTilesContainer.alpha + 0.04);
        }
        if (_0x287e8a > 0x46) {
          this.sittingPikachuTilesContainer.alpha = 0x1;
        }
      }
      ["drawPikachuVolleyballMessage"](_0x1a316b) {
        if (0x0 !== _0x1a316b) {
          if (_0x1a316b > 0x1e) {
            this.messages.pikachuVolleyball.visible = true;
          }
          if (_0x1a316b > 0x1e && _0x1a316b <= 0x2c) {
            const _0x216304 = 0xc3 - 0xf * (_0x1a316b - 0x1e);
            this.messages.pikachuVolleyball.x = 0x8c + _0x216304;
          } else if (_0x1a316b > 0x2c && _0x1a316b <= 0x37) {
            this.messages.pikachuVolleyball.x = 0x8c;
            this.messages.pikachuVolleyball.width = 0xc8 - 0xf * (_0x1a316b - 0x2c);
          } else if (_0x1a316b > 0x37 && _0x1a316b <= 0x47) {
            this.messages.pikachuVolleyball.x = 0x8c;
            this.messages.pikachuVolleyball.width = 0x28 + 0xf * (_0x1a316b - 0x37);
          } else if (_0x1a316b > 0x47) {
            this.messages.pikachuVolleyball.x = 0x8c;
            this.messages.pikachuVolleyball.width = this.messages.pikachuVolleyball.texture.width;
          }
        } else {
          this.messages.pikachuVolleyball.visible = false;
        }
      }
      ["drawPokemonMessage"](_0x2aeb7a) {
        if (0x0 !== _0x2aeb7a) {
          if (_0x2aeb7a > 0x47) {
            this.messages.pokemon.visible = true;
          }
        } else {
          this.messages.pokemon.visible = false;
        }
      }
      ["drawWithWhoMessages"](_0x188b31) {
        const _0xc5e68a = this.messages.withWho;
        const _0x17cded = _0xc5e68a[0x0].texture.width;
        const _0x43c0a5 = _0xc5e68a[0x0].texture.height;
        if (0x0 !== _0x188b31) {
          if (_0x188b31 > 0x46) {
            if (this.selectedWithWhoMessageSizeIncrement < 0xa) {
              this.selectedWithWhoMessageSizeIncrement += 0x1;
            }
            for (let _0x3845a4 = 0x0; _0x3845a4 < 0x2; _0x3845a4++) {
              const _0x26851c = Number(this.selectedWithWho === _0x3845a4);
              const _0x4c0d96 = _0x26851c * (this.selectedWithWhoMessageSizeIncrement + 0x2);
              const _0x58005c = _0x26851c * this.selectedWithWhoMessageSizeIncrement;
              _0xc5e68a[_0x3845a4].visible = true;
              _0xc5e68a[_0x3845a4].x = 0xd8 - _0x17cded / 0x2 - _0x4c0d96;
              _0xc5e68a[_0x3845a4].y = 0xb8 + 0x1e * _0x3845a4 - _0x58005c;
              _0xc5e68a[_0x3845a4].width = _0x17cded + 0x2 * _0x4c0d96;
              _0xc5e68a[_0x3845a4].height = _0x43c0a5 + 0x2 * _0x58005c;
            }
          }
        } else {
          for (let _0x3b7df3 = 0x0; _0x3b7df3 < 0x2; _0x3b7df3++) {
            _0xc5e68a[_0x3b7df3].visible = false;
          }
        }
      }
      ["selectWithWho"](_0x226f1a) {
        this.selectedWithWho = _0x226f1a;
        this.selectedWithWhoMessageSizeIncrement = 0x2;
      }
    }
    class _0x5e8ece {
      constructor(_0x221ffb) {
        const _0x29750a = _0x221ffb[_0x1d6868.d.SPRITE_SHEET].textures;
        this.bgContainer = function (_0x5c0826) {
          const _0x55a9c9 = new _0x5b5329.W2();
          let _0x497f28;
          let _0x23112b = _0x5c0826[_0xc9216d.SKY_BLUE];
          for (let _0x20f15c = 0x0; _0x20f15c < 0xc; _0x20f15c++) {
            for (let _0x46a16f = 0x0; _0x46a16f < 0x1b; _0x46a16f++) {
              _0x497f28 = new _0x4a2d5f.j(_0x23112b);
              _0x2fd797(_0x55a9c9, _0x497f28, 0x10 * _0x46a16f, 0x10 * _0x20f15c);
            }
          }
          _0x23112b = _0x5c0826[_0xc9216d.MOUNTAIN];
          _0x497f28 = new _0x4a2d5f.j(_0x23112b);
          _0x2fd797(_0x55a9c9, _0x497f28, 0x0, 0xbc);
          _0x23112b = _0x5c0826[_0xc9216d.GROUND_RED];
          for (let _0xc8e7d2 = 0x0; _0xc8e7d2 < 0x1b; _0xc8e7d2++) {
            _0x497f28 = new _0x4a2d5f.j(_0x23112b);
            _0x2fd797(_0x55a9c9, _0x497f28, 0x10 * _0xc8e7d2, 0xf8);
          }
          _0x23112b = _0x5c0826[_0xc9216d.GROUND_LINE];
          for (let _0x2c95e3 = 0x1; _0x2c95e3 < 0x1a; _0x2c95e3++) {
            _0x497f28 = new _0x4a2d5f.j(_0x23112b);
            _0x2fd797(_0x55a9c9, _0x497f28, 0x10 * _0x2c95e3, 0x108);
          }
          _0x23112b = _0x5c0826[_0xc9216d.GROUND_LINE_LEFT_MOST];
          _0x497f28 = new _0x4a2d5f.j(_0x23112b);
          _0x2fd797(_0x55a9c9, _0x497f28, 0x0, 0x108);
          _0x23112b = _0x5c0826[_0xc9216d.GROUND_LINE_RIGHT_MOST];
          _0x497f28 = new _0x4a2d5f.j(_0x23112b);
          _0x2fd797(_0x55a9c9, _0x497f28, 0x1a0, 0x108);
          _0x23112b = _0x5c0826[_0xc9216d.GROUND_YELLOW];
          for (let _0x358dbf = 0x0; _0x358dbf < 0x2; _0x358dbf++) {
            for (let _0x22a474 = 0x0; _0x22a474 < 0x1b; _0x22a474++) {
              _0x497f28 = new _0x4a2d5f.j(_0x23112b);
              _0x2fd797(_0x55a9c9, _0x497f28, 0x10 * _0x22a474, 0x118 + 0x10 * _0x358dbf);
            }
          }
          _0x23112b = _0x5c0826[_0xc9216d.NET_PILLAR_TOP];
          _0x497f28 = new _0x4a2d5f.j(_0x23112b);
          _0x2fd797(_0x55a9c9, _0x497f28, 0xd5, 0xb0);
          _0x23112b = _0x5c0826[_0xc9216d.NET_PILLAR];
          for (let _0x42f94e = 0x0; _0x42f94e < 0xc; _0x42f94e++) {
            _0x497f28 = new _0x4a2d5f.j(_0x23112b);
            _0x2fd797(_0x55a9c9, _0x497f28, 0xd5, 0xb8 + 0x8 * _0x42f94e);
          }
          return _0x55a9c9;
        }(_0x29750a);
        const _0x57d46a = function (_0x44a28f) {
          const _0x2912c7 = [];
          for (let _0x54bd16 = 0x0; _0x54bd16 < 0x7; _0x54bd16++) {
            if (0x3 === _0x54bd16) {
              _0x2912c7.push(_0x44a28f[_0xc9216d.PIKACHU(_0x54bd16, 0x0)]);
              _0x2912c7.push(_0x44a28f[_0xc9216d.PIKACHU(_0x54bd16, 0x1)]);
            } else {
              if (0x4 === _0x54bd16) {
                _0x2912c7.push(_0x44a28f[_0xc9216d.PIKACHU(_0x54bd16, 0x0)]);
              } else {
                for (let _0x4a6ddd = 0x0; _0x4a6ddd < 0x5; _0x4a6ddd++) {
                  _0x2912c7.push(_0x44a28f[_0xc9216d.PIKACHU(_0x54bd16, _0x4a6ddd)]);
                }
              }
            }
          }
          const _0x1fb0d3 = new _0x517a99.K(_0x2912c7, false);
          const _0x4b946a = new _0x517a99.K(_0x2912c7, false);
          _0x1fb0d3.anchor.x = 0.5;
          _0x1fb0d3.anchor.y = 0.5;
          _0x4b946a.anchor.x = 0.5;
          _0x4b946a.anchor.y = 0.5;
          return [_0x1fb0d3, _0x4b946a];
        }(_0x29750a);
        this.player1 = _0x57d46a[0x0];
        this.player2 = _0x57d46a[0x1];
        this.ball = function (_0x42e574) {
          const _0x259866 = [_0x42e574[_0xc9216d.BALL(0x0)], _0x42e574[_0xc9216d.BALL(0x1)], _0x42e574[_0xc9216d.BALL(0x2)], _0x42e574[_0xc9216d.BALL(0x3)], _0x42e574[_0xc9216d.BALL(0x4)], _0x42e574[_0xc9216d.BALL("hyper")]];
          const _0x20a35d = new _0x517a99.K(_0x259866, false);
          _0x20a35d.anchor.x = 0.5;
          _0x20a35d.anchor.y = 0.5;
          return _0x20a35d;
        }(_0x29750a);
        this.ballHyper = _0x30e581(_0x29750a, _0xc9216d.BALL_HYPER, 0.5, 0.5);
        this.ballTrail = _0x30e581(_0x29750a, _0xc9216d.BALL_TRAIL, 0.5, 0.5);
        this.punch = _0x30e581(_0x29750a, _0xc9216d.BALL_PUNCH, 0.5, 0.5);
        this.score = new _0x4ef52b.xv("0", new _0x4ef52b.pn({
          fontFamily: "Arial",
          fontSize: 0xf,
          fill: "white",
          stroke: "black",
          strokeThickness: 0x2
        }));
        this.score.x = 0x64;
        this.score.y = 0x64;
        this.score.visible = false;
        this.scoreBoards = [_0x15b02e(_0x29750a), _0x15b02e(_0x29750a)];
        this.shadows = {
          forPlayer1: _0x30e581(_0x29750a, _0xc9216d.SHADOW, 0.5, 0.5),
          forPlayer2: _0x30e581(_0x29750a, _0xc9216d.SHADOW, 0.5, 0.5),
          forBall: _0x30e581(_0x29750a, _0xc9216d.SHADOW, 0.5, 0.5)
        };
        this.messages = {
          gameStart: _0x30e581(_0x29750a, _0xc9216d.GAME_START, 0x0, 0x0),
          ready: _0x30e581(_0x29750a, _0xc9216d.READY, 0x0, 0x0),
          gameEnd: _0x30e581(_0x29750a, _0xc9216d.GAME_END, 0x0, 0x0)
        };
        this.cloudContainer = function (_0x5d34d6) {
          const _0x487e71 = new _0x5b5329.W2();
          const _0x557fe6 = _0x5d34d6[_0xc9216d.CLOUD];
          for (let _0x73119 = 0x0; _0x73119 < 0xa; _0x73119++) {
            const _0x1fddcc = new _0x4a2d5f.j(_0x557fe6);
            _0x1fddcc.anchor.x = 0x0;
            _0x1fddcc.anchor.y = 0x0;
            _0x487e71.addChild(_0x1fddcc);
          }
          return _0x487e71;
        }(_0x29750a);
        this.waveContainer = function (_0x431ed5) {
          const _0x30a714 = new _0x5b5329.W2();
          const _0x9a1c54 = _0x431ed5[_0xc9216d.WAVE];
          for (let _0x4cb2b3 = 0x0; _0x4cb2b3 < 0x1b; _0x4cb2b3++) {
            _0x2fd797(_0x30a714, new _0x4a2d5f.j(_0x9a1c54), 0x10 * _0x4cb2b3, 0x0);
          }
          return _0x30a714;
        }(_0x29750a);
        this.container = new _0x5b5329.W2();
        this.container.addChild(this.bgContainer);
        this.container.addChild(this.cloudContainer);
        this.container.addChild(this.waveContainer);
        this.container.addChild(this.shadows.forPlayer1);
        this.container.addChild(this.shadows.forPlayer2);
        this.container.addChild(this.shadows.forBall);
        this.container.addChild(this.player1);
        this.container.addChild(this.player2);
        this.container.addChild(this.ballTrail);
        this.container.addChild(this.ballHyper);
        this.container.addChild(this.ball);
        this.container.addChild(this.punch);
        this.container.addChild(this.score);
        this.container.addChild(this.scoreBoards[0x0]);
        this.container.addChild(this.scoreBoards[0x1]);
        this.container.addChild(this.messages.gameStart);
        this.container.addChild(this.messages.ready);
        this.container.addChild(this.messages.gameEnd);
        this.bgContainer.x = 0x0;
        this.bgContainer.y = 0x0;
        this.cloudContainer.x = 0x0;
        this.cloudContainer.y = 0x0;
        this.waveContainer.x = 0x0;
        this.waveContainer.y = 0x0;
        this.messages.ready.x = 0xb0;
        this.messages.ready.y = 0x26;
        this.scoreBoards[0x0].x = 0xe;
        this.scoreBoards[0x0].y = 0xa;
        this.scoreBoards[0x1].x = 0x162;
        this.scoreBoards[0x1].y = 0xa;
        this.shadows.forPlayer1.y = 0x111;
        this.shadows.forPlayer2.y = 0x111;
        this.shadows.forBall.y = 0x111;
        this.initializeVisibles();
        this.cloudArray = [];
        for (let _0x1b90b9 = 0x0; _0x1b90b9 < 0xa; _0x1b90b9++) {
          this.cloudArray.push(new _0x1879ef());
        }
        this.wave = new _0x196ad9();
      }
      get ["visible"]() {
        return this.container.visible;
      }
      set ["visible"](_0x464d57) {
        this.container.visible = _0x464d57;
        if (false === _0x464d57) {
          this.initializeVisibles();
        }
      }
      ["initializeVisibles"]() {
        for (const _0x9f375c in this.messages) this.messages[_0x9f375c].visible = false;
      }
      ["drawPlayersAndBall"](_0xc0bd1d) {
        const _0x4228b5 = _0xc0bd1d.player1;
        const _0x5de3ed = _0xc0bd1d.player2;
        const _0xb44aca = _0xc0bd1d.ball;
        this.player1.x = _0x4228b5.x;
        this.player1.y = _0x4228b5.y;
        if (0x3 === _0x4228b5.state || 0x4 === _0x4228b5.state) {
          this.player1.scale.x = -0x1 === _0x4228b5.divingDirection ? -0x1 : 0x1;
        } else {
          this.player1.scale.x = 0x1;
        }
        this.shadows.forPlayer1.x = _0x4228b5.x;
        this.player2.x = _0x5de3ed.x;
        this.player2.y = _0x5de3ed.y;
        if (0x3 === _0x5de3ed.state || 0x4 === _0x5de3ed.state) {
          this.player2.scale.x = 0x1 === _0x5de3ed.divingDirection ? 0x1 : -0x1;
        } else {
          this.player2.scale.x = -0x1;
        }
        this.shadows.forPlayer2.x = _0x5de3ed.x;
        const _0x5d54f7 = _0x4228b5.state < 0x4 ? 0x5 * _0x4228b5.state + _0x4228b5.frameNumber : 0x4 === _0x4228b5.state ? 0x11 + _0x4228b5.frameNumber : _0x4228b5.state > 0x4 ? 0x12 + 0x5 * (_0x4228b5.state - 0x5) + _0x4228b5.frameNumber : undefined;
        const _0x33f8fe = _0x5de3ed.state < 0x4 ? 0x5 * _0x5de3ed.state + _0x5de3ed.frameNumber : 0x4 === _0x5de3ed.state ? 0x11 + _0x5de3ed.frameNumber : _0x5de3ed.state > 0x4 ? 0x12 + 0x5 * (_0x5de3ed.state - 0x5) + _0x5de3ed.frameNumber : undefined;
        this.player1.gotoAndStop(_0x5d54f7);
        this.player2.gotoAndStop(_0x33f8fe);
        this.ball.x = _0xb44aca.x;
        this.ball.y = _0xb44aca.y;
        this.shadows.forBall.x = _0xb44aca.x;
        this.ball.gotoAndStop(_0xb44aca.rotation);
        if (_0xb44aca.punchEffectRadius > 0x0) {
          _0xb44aca.punchEffectRadius -= 0x2;
          this.punch.width = 0x2 * _0xb44aca.punchEffectRadius;
          this.punch.height = 0x2 * _0xb44aca.punchEffectRadius;
          this.punch.x = _0xb44aca.punchEffectX;
          this.punch.y = _0xb44aca.punchEffectY;
          this.punch.visible = true;
        } else {
          this.punch.visible = false;
        }
        if (true === _0xb44aca.isPowerHit) {
          this.ballHyper.x = _0xb44aca.previousX;
          this.ballHyper.y = _0xb44aca.previousY;
          this.ballTrail.x = _0xb44aca.previousPreviousX;
          this.ballTrail.y = _0xb44aca.previousPreviousY;
          this.ballHyper.visible = true;
          this.ballTrail.visible = true;
        } else {
          this.ballHyper.visible = false;
          this.ballTrail.visible = false;
        }
      }
      ["drawScoresToScoreBoards"](_0x4b8322) {
        for (let _0x204cc4 = 0x0; _0x204cc4 < 0x2; _0x204cc4++) {
          const _0x221aef = this.scoreBoards[_0x204cc4];
          const _0x15a889 = _0x4b8322[_0x204cc4];
          const _0x78f41e = _0x221aef.getChildAt(0x0);
          const _0x1710c6 = _0x221aef.getChildAt(0x1);
          _0x78f41e.gotoAndStop(_0x15a889 % 0xa);
          _0x1710c6.gotoAndStop(Math.floor(_0x15a889 / 0xa) % 0xa);
          _0x1710c6.visible = _0x15a889 >= 0xa;
        }
      }
      ["drawCloudsAndWave"]() {
        const _0x3e7834 = this.cloudArray;
        const _0x462164 = this.wave;
        !function (_0x17e24e, _0x487c72) {
          for (let _0x41c11a = 0x0; _0x41c11a < 0xa; _0x41c11a++) {
            _0x17e24e[_0x41c11a].topLeftPointX += _0x17e24e[_0x41c11a].topLeftPointXVelocity;
            if (_0x17e24e[_0x41c11a].topLeftPointX > 0x1b0) {
              _0x17e24e[_0x41c11a].topLeftPointX = -0x44;
              _0x17e24e[_0x41c11a].topLeftPointY = Math.floor(0x8000 * Math.random()) % 0x98;
              _0x17e24e[_0x41c11a].topLeftPointXVelocity = 0x1 + Math.floor(0x8000 * Math.random()) % 0x2;
            }
            _0x17e24e[_0x41c11a].sizeDiffTurnNumber = (_0x17e24e[_0x41c11a].sizeDiffTurnNumber + 0x1) % 0xb;
          }
          _0x487c72.verticalCoord += _0x487c72.verticalCoordVelocity;
          if (_0x487c72.verticalCoord > 0x20) {
            _0x487c72.verticalCoord = 0x20;
            _0x487c72.verticalCoordVelocity = -0x1;
          } else if (_0x487c72.verticalCoord < 0x0 && _0x487c72.verticalCoordVelocity < 0x0) {
            _0x487c72.verticalCoordVelocity = 0x2;
            _0x487c72.verticalCoord = -Math.floor(0x8000 * Math.random()) % 0x28;
          }
          for (let _0x3325fe = 0x0; _0x3325fe < 0x1b; _0x3325fe++) {
            _0x487c72.yCoords[_0x3325fe] = 0x13a - _0x487c72.verticalCoord + Math.floor(0x8000 * Math.random()) % 0x3;
          }
        }(_0x3e7834, _0x462164);
        for (let _0xab3be5 = 0x0; _0xab3be5 < 0xa; _0xab3be5++) {
          const _0x42c088 = _0x3e7834[_0xab3be5];
          const _0x10e614 = this.cloudContainer.getChildAt(_0xab3be5);
          _0x10e614.x = _0x42c088.spriteTopLeftPointX;
          _0x10e614.y = _0x42c088.spriteTopLeftPointY;
          _0x10e614.width = _0x42c088.spriteWidth;
          _0x10e614.height = _0x42c088.spriteHeight;
        }
        for (let _0x4dc6de = 0x0; _0x4dc6de < 0x1b; _0x4dc6de++) {
          this.waveContainer.getChildAt(_0x4dc6de).y = _0x462164.yCoords[_0x4dc6de];
        }
      }
      ["drawGameStartMessage"](_0x1b9e11, _0x262ceb) {
        if (0x0 === _0x1b9e11) {
          this.messages.gameStart.visible = true;
        } else {
          if (_0x1b9e11 >= _0x262ceb - 0x1) {
            return void (this.messages.gameStart.visible = false);
          }
        }
        const _0x15ba47 = this.messages.gameStart;
        const _0x4d68f1 = _0x15ba47.texture.width;
        const _0x2eccb6 = _0x15ba47.texture.height;
        const _0x5f5cd9 = Math.floor(_0x4d68f1 * _0x1b9e11 / 0x32);
        const _0x5d21ba = Math.floor(_0x2eccb6 * _0x1b9e11 / 0x32);
        _0x15ba47.x = 0xd8 - _0x5f5cd9;
        _0x15ba47.y = 0x32 + 0x2 * _0x5d21ba;
        _0x15ba47.width = 0x2 * _0x5f5cd9;
        _0x15ba47.height = 0x2 * _0x5d21ba;
      }
      ["drawReadyMessage"](_0x54587d) {
        this.messages.ready.visible = _0x54587d;
      }
      ["toggleReadyMessage"]() {
        this.messages.ready.visible = !this.messages.ready.visible;
      }
      ["drawGameEndMessage"](_0x2097bc, _0x133a1a) {
        const _0xebf299 = this.messages.gameEnd;
        const _0xc813d0 = _0xebf299.texture.width;
        const _0x422e94 = _0xebf299.texture.height;
        if (0x0 === _0x2097bc) {
          _0xebf299.visible = true;
          this.score.text = _0x133a1a;
          if ("" != _0x133a1a) {
            this.score.visible = true;
          }
        }
        if (_0x2097bc < 0x32) {
          const _0x400011 = 0x2 * Math.floor((0x32 - _0x2097bc) * _0xc813d0 / 0x32);
          const _0x396c59 = 0x2 * Math.floor((0x32 - _0x2097bc) * _0x422e94 / 0x32);
          _0xebf299.x = 0xd8 - _0xc813d0 / 0x2 - _0x400011;
          _0xebf299.y = 0x32 - _0x396c59;
          _0xebf299.width = _0xc813d0 + 0x2 * _0x400011;
          _0xebf299.height = _0x422e94 + 0x2 * _0x396c59;
        } else {
          _0xebf299.x = 0xd8 - _0xc813d0 / 0x2;
          _0xebf299.y = 0x32;
          _0xebf299.width = _0xc813d0;
          _0xebf299.height = _0x422e94;
        }
      }
    }
    class _0x33348e {
      constructor(_0x250f97) {
        const _0x15e50d = _0x250f97[_0x1d6868.d.SPRITE_SHEET].textures;
        this.black = _0x30e581(_0x15e50d, _0xc9216d.BLACK, 0x0, 0x0);
        this.black.width = 0x1b0;
        this.black.height = 0x130;
        this.black.x = 0x0;
        this.black.y = 0x0;
        this.black.alpha = 0x1;
      }
      get ["visible"]() {
        return this.black.visible;
      }
      set ["visible"](_0x3c0323) {
        this.black.visible = _0x3c0323;
      }
      ["setBlackAlphaTo"](_0x3acf10) {
        this.black.alpha = _0x3acf10;
        if (0x0 === this.black.alpha) {
          this.black.visible = false;
        } else {
          this.black.visible = true;
        }
      }
      ["changeBlackAlphaBy"](_0x1202a2) {
        this.black.alpha = _0x1202a2 >= 0x0 ? Math.min(0x1, this.black.alpha + _0x1202a2) : Math.max(0x0, this.black.alpha + _0x1202a2);
        if (0x0 === this.black.alpha) {
          this.black.visible = false;
        } else {
          this.black.visible = true;
        }
      }
    }
    function _0x30e581(_0x395088, _0x4d6bbc, _0x4439a0, _0x12e3f) {
      const _0x34f1d5 = new _0x4a2d5f.j(_0x395088[_0x4d6bbc]);
      _0x34f1d5.anchor.x = _0x4439a0;
      _0x34f1d5.anchor.y = _0x12e3f;
      return _0x34f1d5;
    }
    function _0x15b02e(_0x38a281) {
      const _0x2d6387 = [];
      for (let _0x156711 = 0x0; _0x156711 < 0xa; _0x156711++) {
        _0x156711;
        _0x2d6387.push(_0x38a281[_0xc9216d.NUMBER(_0x156711)]);
      }
      const _0x5cca39 = [null, null];
      _0x5cca39[0x0] = new _0x517a99.K(_0x2d6387, false);
      _0x5cca39[0x1] = new _0x517a99.K(_0x2d6387, false);
      const _0x205421 = new _0x5b5329.W2();
      _0x2fd797(_0x205421, _0x5cca39[0x0], 0x20, 0x0);
      _0x2fd797(_0x205421, _0x5cca39[0x1], 0x0, 0x0);
      _0x205421.setChildIndex(_0x5cca39[0x0], 0x0);
      _0x205421.setChildIndex(_0x5cca39[0x1], 0x1);
      return _0x205421;
    }
    function _0x2fd797(_0x240a56, _0x23c2aa, _0x369011, _0xc876f0) {
      _0x240a56.addChild(_0x23c2aa);
      _0x23c2aa.anchor.x = 0x0;
      _0x23c2aa.anchor.y = 0x0;
      _0x23c2aa.x = _0x369011;
      _0x23c2aa.y = _0xc876f0;
    }
    class _0x35ba8 extends _0x2bfca0 {
      constructor(_0x118fef, _0xa350e9, _0x4452d3, _0x17e7ea, _0xfa001e, _0x337c20 = null) {
        super();
        this.powerHitKeyIsDownPrevious = false;
        this.leftKey = new _0x11a9b8(_0x118fef);
        this.rightKey = new _0x11a9b8(_0xa350e9);
        this.upKey = new _0x11a9b8(_0x4452d3);
        this.downKey = new _0x11a9b8(_0x17e7ea);
        this.powerHitKey = new _0x11a9b8(_0xfa001e);
        this.downRightKey = new _0x11a9b8(_0x337c20);
      }
      ["getInput"]() {
        if (this.leftKey.isDown) {
          this.xDirection = -0x1;
        } else if (this.rightKey.isDown || this.downRightKey && this.downRightKey.isDown) {
          this.xDirection = 0x1;
        } else {
          this.xDirection = 0x0;
        }
        if (this.upKey.isDown) {
          this.yDirection = -0x1;
        } else if (this.downKey.isDown || this.downRightKey && this.downRightKey.isDown) {
          this.yDirection = 0x1;
        } else {
          this.yDirection = 0x0;
        }
        const _0x11a03b = this.powerHitKey.isDown;
        if (!this.powerHitKeyIsDownPrevious && _0x11a03b) {
          this.powerHit = 0x1;
        } else {
          this.powerHit = 0x0;
        }
        this.powerHitKeyIsDownPrevious = _0x11a03b;
      }
      ["subscribe"]() {
        this.leftKey.subscribe();
        this.rightKey.subscribe();
        this.upKey.subscribe();
        this.downKey.subscribe();
        this.powerHitKey.subscribe();
        this.downRightKey.subscribe();
      }
      ["unsubscribe"]() {
        this.leftKey.unsubscribe();
        this.rightKey.unsubscribe();
        this.upKey.unsubscribe();
        this.downKey.unsubscribe();
        this.powerHitKey.unsubscribe();
        this.downRightKey.unsubscribe();
      }
    }
    class _0x11a9b8 {
      constructor(_0x46a8b7) {
        this.value = _0x46a8b7;
        this.isDown = false;
        this.isUp = true;
        this.downListener = this.downHandler.bind(this);
        this.upListener = this.upHandler.bind(this);
        this.subscribe();
      }
      ["downHandler"](_0x37f1d9) {
        if (_0x37f1d9.code === this.value) {
          this.isDown = true;
          this.isUp = false;
          _0x37f1d9.preventDefault();
        }
      }
      ["upHandler"](_0xe4b69a) {
        if (_0xe4b69a.code === this.value) {
          this.isDown = false;
          this.isUp = true;
          _0xe4b69a.preventDefault();
        }
      }
      ["subscribe"]() {
        window.addEventListener("keyup", this.upListener);
        window.addEventListener("keydown", this.downListener);
      }
      ["unsubscribe"]() {
        window.removeEventListener("keydown", this.downListener);
        window.removeEventListener("keyup", this.upListener);
        this.isDown = false;
        this.isUp = true;
      }
    }
    var _0x2469ab = _0x95b830(0x124);
    const _0x30082a = _0x1d6868.d.SOUNDS;
    class _0x4a541d {
      constructor(_0x1b8e5a) {
        this.sounds = {
          bgm: new _0x1e0cd7(_0x1b8e5a[_0x30082a.BGM].sound),
          pipikachu: new _0x1e0cd7(_0x1b8e5a[_0x30082a.PIPIKACHU].sound),
          pika: new _0x1e0cd7(_0x1b8e5a[_0x30082a.PIKA].sound),
          chu: new _0x1e0cd7(_0x1b8e5a[_0x30082a.CHU].sound),
          pi: new _0x1e0cd7(_0x1b8e5a[_0x30082a.PI].sound),
          pikachu: new _0x1e0cd7(_0x1b8e5a[_0x30082a.PIKACHU].sound),
          powerHit: new _0x1e0cd7(_0x1b8e5a[_0x30082a.POWERHIT].sound),
          ballTouchesGround: new _0x1e0cd7(_0x1b8e5a[_0x30082a.BALLTOUCHESGROUND].sound)
        };
        this.sounds.bgm.loop = true;
        this.properBGMVolume = 0.2;
        this.properSFXVolume = 0.35;
        this.adjustVolume();
      }
      ["adjustVolume"]() {
        for (const _0x135e1c in this.sounds) this.sounds[_0x135e1c].volume = "bgm" === _0x135e1c ? this.properBGMVolume : this.properSFXVolume;
      }
      ["turnBGMVolume"](_0x2eacf5) {
        let _0x49d33a;
        _0x49d33a = _0x2eacf5 ? this.properBGMVolume : 0x0;
        this.sounds.bgm.volume = _0x49d33a;
      }
      ["turnSFXVolume"](_0x5f2700) {
        let _0x192d66;
        _0x192d66 = _0x5f2700 ? this.properSFXVolume : 0x0;
        for (const _0xf041b in this.sounds) if ("bgm" !== _0xf041b) {
          this.sounds[_0xf041b].volume = _0x192d66;
        }
      }
      ["muteAll"]() {
        _0x2469ab.eq.muteAll();
      }
      ["unmuteAll"]() {
        _0x2469ab.eq.unmuteAll();
      }
    }
    class _0x1e0cd7 {
      constructor(_0x268d20) {
        this.center = _0x268d20;
        this.left = _0x2469ab.$u.from(_0x268d20.url);
        this.right = _0x2469ab.$u.from(_0x268d20.url);
        const _0xe4d2ef = new _0x2469ab.u8.StereoFilter(0x0);
        const _0x372b51 = new _0x2469ab.u8.StereoFilter(-0.75);
        const _0x305a91 = new _0x2469ab.u8.StereoFilter(0.75);
        this.center.filters = [_0xe4d2ef];
        this.left.filters = [_0x372b51];
        this.right.filters = [_0x305a91];
      }
      set ["volume"](_0x4f1de1) {
        this.center.volume = _0x4f1de1;
        this.left.volume = _0x4f1de1;
        this.right.volume = _0x4f1de1;
      }
      set ["loop"](_0x258e1e) {
        this.center.loop = _0x258e1e;
        this.left.loop = _0x258e1e;
        this.right.loop = _0x258e1e;
      }
      ["play"](_0x588788 = 0x0) {
        if (0x0 === _0x588788) {
          this.center.play();
        } else if (-0x1 === _0x588788) {
          this.left.play();
        } else if (0x1 === _0x588788) {
          this.right.play();
        }
      }
      ["stop"]() {
        this.center.stop();
        this.left.stop();
        this.right.stop();
      }
    }
    class _0x57debb {
      constructor(_0x33532d, _0x1d904b) {
        this.view = {
          intro: new _0x1bcab2(_0x1d904b),
          menu: new _0x23c9bd(_0x1d904b),
          game: new _0x5e8ece(_0x1d904b),
          fadeInOut: new _0x33348e(_0x1d904b)
        };
        _0x33532d.addChild(this.view.intro.container);
        _0x33532d.addChild(this.view.menu.container);
        _0x33532d.addChild(this.view.game.container);
        _0x33532d.addChild(this.view.fadeInOut.black);
        this.view.intro.visible = false;
        this.view.menu.visible = false;
        this.view.game.visible = false;
        this.view.fadeInOut.visible = false;
        this.audio = new _0x4a541d(_0x1d904b);
        this.physics = new _0x3faded(true, true);
        this.keyboardArray = [new _0x35ba8("KeyD", "KeyG", "KeyR", "KeyV", "KeyZ", "KeyF"), new _0x35ba8("ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Enter")];
        this.normalFPS = 0x19;
        this.slowMotionFPS = 0x5;
        this.SLOW_MOTION_FRAMES_NUM = 0x6;
        this.slowMotionFramesLeft = 0x0;
        this.slowMotionNumOfSkippedFrames = 0x0;
        this.selectedWithWho = 0x0;
        this.scores = [0x0, 0x0];
        this.winningScore = 0x63;
        this.message = new Uint8Array([0x44, 0x49, 0x7b, 0x60, 0x63, 0x46, 0x73, 0x2, 0x22, 0x21, 0x50, 0x1a, 0xdb, 0xf6, 0xab, 0xd9, 0x146, 0x154, 0x171, 0x10a, 0x1f1, 0x1cd, 0x1c5, 0x27e, 0x22e, 0x22e, 0x2c3, 0x2e9, 0x37f, 0x30d, 0x3bb, 0x7d]);
        this.gameEnded = false;
        this.roundEnded = false;
        this.isPlayer2Serve = false;
        this.frameCounter = 0x0;
        this.frameTotal = {
          intro: 0xa5,
          afterMenuSelection: 0xf,
          beforeStartOfNewGame: 0xf,
          startOfNewGame: 0x47,
          afterEndOfRound: 0x5,
          beforeStartOfNextRound: 0x1e,
          gameEnd: 0xd3
        };
        this.noInputFrameCounter = 0x0;
        this.noInputFrameTotal = {
          menu: 0xe1
        };
        this.paused = false;
        this.isStereoSound = true;
        this._isPracticeMode = false;
        this.state = this.intro;
      }
      ["gameLoop"]() {
        if (true !== this.paused) {
          if (this.slowMotionFramesLeft > 0x0) {
            this.slowMotionNumOfSkippedFrames++;
            if (this.slowMotionNumOfSkippedFrames % Math.round(this.normalFPS / this.slowMotionFPS) != 0x0) {
              return;
            }
            this.slowMotionFramesLeft--;
            this.slowMotionNumOfSkippedFrames = 0x0;
          }
          this.keyboardArray[0x0].getInput();
          this.keyboardArray[0x1].getInput();
          this.state();
        }
      }
      ["intro"]() {
        if (0x0 === this.frameCounter) {
          this.view.intro.visible = true;
          this.view.fadeInOut.setBlackAlphaTo(0x0);
          this.audio.sounds.bgm.stop();
        }
        this.view.intro.drawMark(this.frameCounter);
        this.frameCounter++;
        if (!(0x1 !== this.keyboardArray[0x0].powerHit && 0x1 !== this.keyboardArray[0x1].powerHit)) {
          this.frameCounter = 0x0;
          this.view.intro.visible = false;
          this.state = this.menu;
        }
        if (this.frameCounter >= this.frameTotal.intro) {
          this.frameCounter = 0x0;
          this.view.intro.visible = false;
          this.state = this.menu;
        }
      }
      ["menu"]() {
        if (0x0 === this.frameCounter) {
          this.view.menu.visible = true;
          this.view.fadeInOut.setBlackAlphaTo(0x0);
          this.selectedWithWho = 0x0;
          this.view.menu.selectWithWho(this.selectedWithWho);
        }
        this.view.menu.drawFightMessage(this.frameCounter);
        this.view.menu.drawSachisoft(this.frameCounter);
        this.view.menu.drawSittingPikachuTiles(this.frameCounter);
        this.view.menu.drawPikachuVolleyballMessage(this.frameCounter);
        this.view.menu.drawPokemonMessage(this.frameCounter);
        this.view.menu.drawWithWhoMessages(this.frameCounter);
        this.frameCounter++;
        if (this.frameCounter < 0x47 && (0x1 === this.keyboardArray[0x0].powerHit || 0x1 === this.keyboardArray[0x1].powerHit)) {
          this.frameCounter = 0x47;
        } else {
          if (!(this.frameCounter <= 0x47)) {
            if (-0x1 !== this.keyboardArray[0x0].yDirection && -0x1 !== this.keyboardArray[0x1].yDirection || 0x1 !== this.selectedWithWho) {
              if (0x1 !== this.keyboardArray[0x0].yDirection && 0x1 !== this.keyboardArray[0x1].yDirection || 0x0 !== this.selectedWithWho) {
                this.noInputFrameCounter++;
              } else {
                this.noInputFrameCounter = 0x0;
                this.selectedWithWho = 0x1;
                this.view.menu.selectWithWho(this.selectedWithWho);
                this.audio.sounds.pi.play();
              }
            } else {
              this.noInputFrameCounter = 0x0;
              this.selectedWithWho = 0x0;
              this.view.menu.selectWithWho(this.selectedWithWho);
              this.audio.sounds.pi.play();
            }
            if (0x1 === this.keyboardArray[0x0].powerHit || 0x1 === this.keyboardArray[0x1].powerHit) {
              if (0x1 === this.selectedWithWho) {
                this.physics.player1.isComputer = false;
                this.physics.player2.isComputer = false;
              } else if (0x1 === this.keyboardArray[0x0].powerHit) {
                this.physics.player1.isComputer = false;
                this.physics.player2.isComputer = true;
              } else if (0x1 === this.keyboardArray[0x1].powerHit) {
                this.physics.player1.isComputer = true;
                this.physics.player2.isComputer = false;
              }
              this.audio.sounds.pikachu.play();
              this.frameCounter = 0x0;
              this.noInputFrameCounter = 0x0;
              return void (this.state = this.afterMenuSelection);
            }
            if (this.noInputFrameCounter >= this.noInputFrameTotal.menu) {
              this.physics.player1.isComputer = true;
              this.physics.player2.isComputer = true;
              this.frameCounter = 0x0;
              this.noInputFrameCounter = 0x0;
              this.state = this.afterMenuSelection;
            }
          }
        }
      }
      ["afterMenuSelection"]() {
        this.view.fadeInOut.changeBlackAlphaBy(0.0625);
        this.frameCounter++;
        if (this.frameCounter >= this.frameTotal.afterMenuSelection) {
          this.frameCounter = 0x0;
          this.state = this.beforeStartOfNewGame;
        }
      }
      ["beforeStartOfNewGame"]() {
        this.frameCounter++;
        if (this.frameCounter >= this.frameTotal.beforeStartOfNewGame) {
          this.frameCounter = 0x0;
          this.view.menu.visible = false;
          this.state = this.startOfNewGame;
        }
      }
      ["startOfNewGame"]() {
        if (0x0 === this.frameCounter) {
          this.view.game.visible = true;
          this.gameEnded = false;
          this.roundEnded = false;
          this.gameFinished = false;
          this.isPlayer2Serve = false;
          this.physics.player1.gameEnded = false;
          this.physics.player1.isWinner = false;
          this.physics.player2.gameEnded = false;
          this.physics.player2.isWinner = false;
          this.scores[0x0] = 0x0;
          this.scores[0x1] = 0x0;
          this.view.game.drawScoresToScoreBoards(this.scores);
          this.physics.player1.initializeForNewRound();
          this.physics.player2.initializeForNewRound();
          this.physics.ball.initializeForNewRound(this.isPlayer2Serve);
          this.view.game.drawPlayersAndBall(this.physics);
          this.view.fadeInOut.setBlackAlphaTo(0x1);
          this.audio.sounds.bgm.play();
        }
        this.view.game.drawGameStartMessage(this.frameCounter, this.frameTotal.startOfNewGame);
        this.view.game.drawCloudsAndWave();
        this.view.fadeInOut.changeBlackAlphaBy(-0.058823529411764705);
        this.frameCounter++;
        if (this.frameCounter >= this.frameTotal.startOfNewGame) {
          this.frameCounter = 0x0;
          this.view.fadeInOut.setBlackAlphaTo(0x0);
          this.state = this.round;
        }
      }
      ["calcMessage"]() {
        var _0x5e4053 = this.scores[0x1];
        if (0x2 != _0x5e4053 && 0x1f != _0x5e4053 && _0x5e4053 < 0x21) {
          this.message[_0x5e4053] ^= _0x5e4053 * _0x5e4053;
        }
      }
      ["round"]() {
        const _0x4b6216 = 0x1 === this.keyboardArray[0x0].powerHit || 0x1 === this.keyboardArray[0x1].powerHit;
        if (true === this.physics.player1.isComputer && true === this.physics.player2.isComputer && _0x4b6216) {
          this.frameCounter = 0x0;
          this.view.game.visible = false;
          return void (this.state = this.intro);
        }
        const _0x277fa9 = this.physics.runEngineForNextFrame(this.keyboardArray);
        this.playSoundEffect();
        this.view.game.drawPlayersAndBall(this.physics);
        this.view.game.drawCloudsAndWave();
        if (true === this.gameEnded) {
          if (true === this.gameFinished) {
            var _0x2c4c8c = new TextDecoder().decode(this.message);
            this.view.game.drawGameEndMessage(this.frameCounter, _0x2c4c8c);
          } else {
            this.view.game.drawGameEndMessage(this.frameCounter, "");
          }
          this.frameCounter++;
          return void ((this.frameCounter >= this.frameTotal.gameEnd || this.frameCounter >= 0x46 && _0x4b6216) && (this.frameCounter = 0x0, this.view.game.visible = false, this.state = this.intro));
        }
        if (_0x277fa9 && false === this._isPracticeMode && false === this.roundEnded && false === this.gameEnded) {
          if (this.physics.ball.punchEffectX < 216) {
            this.isPlayer2Serve = true;
            this.scores[0x1] += 0x1;
            this.calcMessage();
            if (this.scores[0x1] > this.winningScore) {
              this.gameEnded = true;
              this.physics.player1.isWinner = false;
              this.physics.player2.isWinner = true;
              this.physics.player1.gameEnded = true;
              this.physics.player2.gameEnded = true;
            }
            if (this.scores[0x1] == this.winningScore) {
              this.gameEnded = true;
              if (0x0 == this.scores[0x0]) {
                this.gameFinished = true;
              }
              this.physics.player1.isWinner = false;
              this.physics.player2.isWinner = true;
              this.physics.player1.gameEnded = true;
              this.physics.player2.gameEnded = true;
            }
          } else {
            this.isPlayer2Serve = false;
            this.scores[0x0] += 0x1;
            if (this.scores[0x0] >= this.winningScore) {
              this.gameEnded = true;
              this.physics.player1.isWinner = true;
              this.physics.player2.isWinner = false;
              this.physics.player1.gameEnded = true;
              this.physics.player2.gameEnded = true;
            }
          }
          this.view.game.drawScoresToScoreBoards(this.scores);
          if (false === this.roundEnded && false === this.gameEnded) {
            this.slowMotionFramesLeft = this.SLOW_MOTION_FRAMES_NUM;
          }
          this.roundEnded = true;
        }
        if (true === this.roundEnded && false === this.gameEnded && 0x0 === this.slowMotionFramesLeft) {
          this.view.fadeInOut.changeBlackAlphaBy(0.0625);
          this.state = this.afterEndOfRound;
        }
      }
      ["afterEndOfRound"]() {
        this.view.fadeInOut.changeBlackAlphaBy(0.0625);
        this.frameCounter++;
        if (this.frameCounter >= this.frameTotal.afterEndOfRound) {
          this.frameCounter = 0x0;
          this.state = this.beforeStartOfNextRound;
        }
      }
      ["beforeStartOfNextRound"]() {
        if (0x0 === this.frameCounter) {
          this.view.fadeInOut.setBlackAlphaTo(0x1);
          this.view.game.drawReadyMessage(false);
          this.physics.player1.initializeForNewRound();
          this.physics.player2.initializeForNewRound();
          this.physics.ball.initializeForNewRound(this.isPlayer2Serve);
          this.view.game.drawPlayersAndBall(this.physics);
        }
        this.view.game.drawCloudsAndWave();
        this.view.fadeInOut.changeBlackAlphaBy(-0.0625);
        this.frameCounter++;
        if (this.frameCounter % 0x5 == 0x0) {
          this.view.game.toggleReadyMessage();
        }
        if (this.frameCounter >= this.frameTotal.beforeStartOfNextRound) {
          this.frameCounter = 0x0;
          this.view.game.drawReadyMessage(false);
          this.view.fadeInOut.setBlackAlphaTo(0x0);
          this.roundEnded = false;
          this.state = this.round;
        }
      }
      ["playSoundEffect"]() {
        const _0xe2df27 = this.audio;
        for (let _0x1a8038 = 0x0; _0x1a8038 < 0x2; _0x1a8038++) {
          const _0x5c1f78 = this.physics["player" + (_0x1a8038 + 0x1)].sound;
          let _0x1d946a = 0x0;
          if (this.isStereoSound) {
            _0x1d946a = 0x0 === _0x1a8038 ? -0x1 : 0x1;
          }
          if (true === _0x5c1f78.pipikachu) {
            _0xe2df27.sounds.pipikachu.play(_0x1d946a);
            _0x5c1f78.pipikachu = false;
          }
          if (true === _0x5c1f78.pika) {
            _0xe2df27.sounds.pika.play(_0x1d946a);
            _0x5c1f78.pika = false;
          }
          if (true === _0x5c1f78.chu) {
            _0xe2df27.sounds.chu.play(_0x1d946a);
            _0x5c1f78.chu = false;
          }
        }
        const _0x24d89a = this.physics.ball;
        const _0x1f4087 = _0x24d89a.sound;
        let _0x267190 = 0x0;
        if (this.isStereoSound) {
          if (_0x24d89a.punchEffectX < 216) {
            _0x267190 = -0x1;
          } else if (_0x24d89a.punchEffectX > 216) {
            _0x267190 = 0x1;
          }
        }
        if (true === _0x1f4087.powerHit) {
          _0xe2df27.sounds.powerHit.play(_0x267190);
          _0x1f4087.powerHit = false;
        }
        if (true === _0x1f4087.ballTouchesGround) {
          _0xe2df27.sounds.ballTouchesGround.play(_0x267190);
          _0x1f4087.ballTouchesGround = false;
        }
      }
      ["restart"]() {
        this.frameCounter = 0x0;
        this.noInputFrameCounter = 0x0;
        this.slowMotionFramesLeft = 0x0;
        this.slowMotionNumOfSkippedFrames = 0x0;
        this.view.menu.visible = false;
        this.view.game.visible = false;
        this.state = this.intro;
      }
      get ["isPracticeMode"]() {
        return this._isPracticeMode;
      }
      set ["isPracticeMode"](_0x5d47ef) {
        this._isPracticeMode = _0x5d47ef;
        this.view.game.scoreBoards[0x0].visible = !_0x5d47ef;
        this.view.game.scoreBoards[0x1].visible = !_0x5d47ef;
      }
    }
    var _0x20773c = _0x95b830(0xf8);
    const _0x71a86c = {
      _precedence: 0x0,
      pause: function (_0xf2c216, _0x3a9bea) {
        if (_0x3a9bea > this._precedence) {
          _0xf2c216.paused = true;
          this._precedence = _0x3a9bea;
        }
      },
      resume: function (_0x18f83a, _0x1d55ce) {
        if (_0x1d55ce === this._precedence) {
          _0x18f83a.paused = false;
          this._precedence = 0x0;
        }
      }
    };
    function _0x40e7d3(_0x3b4e7f) {
      if (_0x3b4e7f.graphic) {
        const _0x516572 = document.getElementById("graphic-sharp-btn");
        const _0xe75241 = document.getElementById("graphic-soft-btn");
        switch (_0x3b4e7f.graphic) {
          case "sharp":
            _0xe75241.classList.remove("selected");
            _0x516572.classList.add("selected");
            break;
          case "soft":
            _0x516572.classList.remove("selected");
            _0xe75241.classList.add("selected");
        }
      }
      if (_0x3b4e7f.bgm) {
        const _0x54e768 = document.getElementById("bgm-on-btn");
        const _0x12cec8 = document.getElementById("bgm-off-btn");
        switch (_0x3b4e7f.bgm) {
          case "on":
            _0x12cec8.classList.remove("selected");
            _0x54e768.classList.add("selected");
            break;
          case "off":
            _0x54e768.classList.remove("selected");
            _0x12cec8.classList.add("selected");
        }
      }
      if (_0x3b4e7f.sfx) {
        const _0x2c5e1d = document.getElementById("stereo-btn");
        const _0x21c773 = document.getElementById("mono-btn");
        const _0x54d971 = document.getElementById("sfx-off-btn");
        switch (_0x3b4e7f.sfx) {
          case "stereo":
            _0x21c773.classList.remove("selected");
            _0x54d971.classList.remove("selected");
            _0x2c5e1d.classList.add("selected");
            break;
          case "mono":
            _0x54d971.classList.remove("selected");
            _0x2c5e1d.classList.remove("selected");
            _0x21c773.classList.add("selected");
            break;
          case "off":
            _0x2c5e1d.classList.remove("selected");
            _0x21c773.classList.remove("selected");
            _0x54d971.classList.add("selected");
        }
      }
      if (_0x3b4e7f.speed) {
        const _0x5299ae = document.getElementById("slow-speed-btn");
        const _0x5bbc17 = document.getElementById("medium-speed-btn");
        const _0x18dee1 = document.getElementById("fast-speed-btn");
        switch (_0x3b4e7f.speed) {
          case "slow":
            _0x5bbc17.classList.remove("selected");
            _0x18dee1.classList.remove("selected");
            _0x5299ae.classList.add("selected");
            break;
          case "medium":
            _0x18dee1.classList.remove("selected");
            _0x5299ae.classList.remove("selected");
            _0x5bbc17.classList.add("selected");
            break;
          case "fast":
            _0x5299ae.classList.remove("selected");
            _0x5bbc17.classList.remove("selected");
            _0x18dee1.classList.add("selected");
        }
      }
      if (_0x3b4e7f.winningScore) {
        const _0x456c70 = document.getElementById("winning-score-5-btn");
        const _0x3548c9 = document.getElementById("winning-score-10-btn");
        const _0x4a0d9c = document.getElementById("winning-score-15-btn");
        switch (_0x3b4e7f.winningScore) {
          case "5":
            _0x3548c9.classList.remove("selected");
            _0x4a0d9c.classList.remove("selected");
            _0x456c70.classList.add("selected");
            break;
          case "10":
            _0x4a0d9c.classList.remove("selected");
            _0x456c70.classList.remove("selected");
            _0x3548c9.classList.add("selected");
            break;
          case "15":
            _0x456c70.classList.remove("selected");
            _0x3548c9.classList.remove("selected");
            _0x4a0d9c.classList.add("selected");
        }
      }
    }
    function _0x4384cf(_0x3ac592, _0x435843) {
      _0x4ed05c();
      _0x5f49b2(_0x3ac592);
      if (document.getElementById(_0x3ac592).classList.toggle("show")) {
        _0x71a86c.pause(_0x435843, 0x1);
      } else {
        _0x71a86c.resume(_0x435843, 0x1);
      }
    }
    function _0x64b2c2(_0x39746e, _0x305f95) {
      _0x4ed05c();
      document.getElementById(_0x39746e).classList.add("open");
      document.getElementById(_0x305f95).classList.add("show");
    }
    function _0x5f49b2(_0x1b8968) {
      const _0x411a87 = document.getElementsByClassName("dropdown");
      for (let _0x49eefa = 0x0; _0x49eefa < _0x411a87.length; _0x49eefa++) {
        if (_0x411a87[_0x49eefa].id !== _0x1b8968) {
          _0x411a87[_0x49eefa].classList.remove("show");
        }
      }
    }
    function _0x4ed05c() {
      const _0x4791cc = document.getElementsByClassName("submenu");
      for (let _0x36edfb = 0x0; _0x36edfb < _0x4791cc.length; _0x36edfb++) {
        _0x4791cc[_0x36edfb].classList.remove("show");
      }
      const _0x284574 = document.getElementsByClassName("submenu-btn");
      for (let _0x850b88 = 0x0; _0x850b88 < _0x284574.length; _0x850b88++) {
        _0x284574[_0x850b88].classList.remove("open");
      }
    }
    _0x32af96.Th.registerPlugin("prepare", _0x26b9d3.B9);
    _0x32af96.Th.registerPlugin("batch", _0x32af96.Bv);
    _0x164583.uK.registerPlugin("prepare", _0x39aad7.T);
    _0x164583.uK.registerPlugin("sprite", _0x485f52.O);
    _0x3d94a6.aN.registerPlugin(_0x5c4051.o);
    _0x5b4ec0.X.RESOLUTION = 0x2;
    _0x5b4ec0.X.SCALE_MODE = _0xa1ece1.aH.NEAREST;
    _0x5b4ec0.X.ROUND_PIXELS = true;
    0x0;
    const _0x4f222a = _0x32af96.e6({
      width: 0x1b0,
      height: 0x130,
      antialias: false,
      backgroundColor: 0x0,
      backgroundAlpha: 0x1,
      forceCanvas: true
    });
    const _0xfc3093 = new _0x5b5329.W2();
    const _0x1bad08 = new _0x4632e9.vB();
    const _0x594bdc = new _0x3d94a6.aN();
    _0x4f222a.view.setAttribute("id", "game-canvas");
    document.getElementById("game-canvas-container").appendChild(_0x4f222a.view);
    _0x4f222a.render(_0xfc3093);
    _0x594bdc.add(_0x1d6868.d.SPRITE_SHEET);
    for (const _0xa7369b in _0x1d6868.d.SOUNDS) _0x594bdc.add(_0x1d6868.d.SOUNDS[_0xa7369b]);
    function _0x24e184() {
      const _0x158651 = new _0x57debb(_0xfc3093, _0x594bdc.resources);
      (function (_0x41fb59, _0x210085) {
        const _0x40ca1a = _0x3d1a9e => {
          _0x40e7d3(_0x3d1a9e);
          switch (_0x3d1a9e.graphic) {
            case "sharp":
              document.getElementById("game-canvas").classList.remove("graphic-soft");
              break;
            case "soft":
              document.getElementById("game-canvas").classList.add("graphic-soft");
          }
          switch (_0x3d1a9e.bgm) {
            case "on":
              _0x41fb59.audio.turnBGMVolume(true);
              break;
            case "off":
              _0x41fb59.audio.turnBGMVolume(false);
          }
          switch (_0x3d1a9e.sfx) {
            case "stereo":
              _0x41fb59.audio.turnSFXVolume(true);
              _0x41fb59.isStereoSound = true;
              break;
            case "mono":
              _0x41fb59.audio.turnSFXVolume(true);
              _0x41fb59.isStereoSound = false;
              break;
            case "off":
              _0x41fb59.audio.turnSFXVolume(false);
          }
          switch (_0x3d1a9e.speed) {
            case "slow":
              _0x41fb59.normalFPS = 0x64;
              _0x210085.maxFPS = _0x41fb59.normalFPS;
              break;
            case "medium":
              _0x41fb59.normalFPS = 0x19;
              _0x210085.maxFPS = _0x41fb59.normalFPS;
              break;
            case "fast":
              _0x41fb59.normalFPS = 0x1e;
              _0x210085.maxFPS = _0x41fb59.normalFPS;
          }
          switch (_0x3d1a9e.winningScore) {
            case "5":
            case "10":
            case "15":
              _0x41fb59.winningScore = 0x63;
          }
        };
        _0x40ca1a({
          graphic: _0x20773c.Y.get("pv-offline-graphic"),
          bgm: _0x20773c.Y.get("pv-offline-bgm"),
          sfx: _0x20773c.Y.get("pv-offline-sfx"),
          speed: _0x20773c.Y.get("pv-offline-speed"),
          winningScore: _0x20773c.Y.get("pv-offline-winningScore")
        });
        (function (_0x11dabc, _0x23e92f) {
          const _0x27678e = document.getElementById("game-dropdown-btn");
          const _0x5ba2e3 = document.getElementById("options-dropdown-btn");
          const _0x4e33b0 = document.getElementById("about-btn");
          _0x27678e.disabled = false;
          _0x5ba2e3.disabled = false;
          _0x4e33b0.disabled = false;
          const _0x4520c0 = document.getElementById("pause-btn");
          _0x4520c0.addEventListener("click", () => {
            if (_0x4520c0.classList.contains("selected")) {
              _0x4520c0.classList.remove("selected");
              _0x71a86c.resume(_0x11dabc, 0x3);
            } else {
              _0x4520c0.classList.add("selected");
              _0x71a86c.pause(_0x11dabc, 0x3);
            }
          });
          document.getElementById("restart-btn").addEventListener("click", () => {
            if (_0x4520c0.classList.contains("selected")) {
              _0x4520c0.classList.remove("selected");
              _0x71a86c.resume(_0x11dabc, 0x3);
            }
            _0x11dabc.restart();
          });
          const _0x290721 = document.getElementById("graphic-sharp-btn");
          const _0x2dd1c5 = document.getElementById("graphic-soft-btn");
          _0x290721.addEventListener("click", () => {
            _0x23e92f({
              graphic: "sharp"
            });
          });
          _0x2dd1c5.addEventListener("click", () => {
            _0x23e92f({
              graphic: "soft"
            });
          });
          const _0x8c5fde = document.getElementById("bgm-on-btn");
          const _0x47e8ab = document.getElementById("bgm-off-btn");
          _0x8c5fde.addEventListener("click", () => {
            _0x23e92f({
              bgm: "on"
            });
          });
          _0x47e8ab.addEventListener("click", () => {
            _0x23e92f({
              bgm: "off"
            });
          });
          const _0x47ec18 = document.getElementById("stereo-btn");
          const _0x1b9915 = document.getElementById("mono-btn");
          const _0x49d2bf = document.getElementById("sfx-off-btn");
          _0x47ec18.addEventListener("click", () => {
            _0x23e92f({
              sfx: "stereo"
            });
          });
          _0x1b9915.addEventListener("click", () => {
            _0x23e92f({
              sfx: "mono"
            });
          });
          _0x49d2bf.addEventListener("click", () => {
            _0x23e92f({
              sfx: "off"
            });
          });
          const _0x56e06b = document.getElementById("slow-speed-btn");
          const _0x56ad76 = document.getElementById("medium-speed-btn");
          const _0x21e83a = document.getElementById("fast-speed-btn");
          _0x56e06b.addEventListener("click", () => {
            _0x23e92f({
              speed: "slow"
            });
          });
          _0x56ad76.addEventListener("click", () => {
            _0x23e92f({
              speed: "medium"
            });
          });
          _0x21e83a.addEventListener("click", () => {
            _0x23e92f({
              speed: "fast"
            });
          });
          const _0x439900 = document.getElementById("winning-score-5-btn");
          const _0x4c0c6a = document.getElementById("winning-score-10-btn");
          const _0x2a2723 = document.getElementById("winning-score-15-btn");
          const _0x4010e9 = document.getElementById("notice-box-1");
          const _0x328f4e = document.getElementById("notice-ok-btn-1");
          const _0xa3e44a = document.getElementById("winning-score-in-notice-box-1");
          const _0x86bd4e = document.getElementById("notice-box-2");
          const _0x2451ae = document.getElementById("notice-ok-btn-2");
          _0x439900.addEventListener("click", () => {
            if (!_0x439900.classList.contains("selected")) {
              return true === _0x11dabc.isPracticeMode ? (_0x86bd4e.classList.remove("hidden"), _0x27678e.disabled = true, _0x5ba2e3.disabled = true, _0x4e33b0.disabled = true, void _0x71a86c.pause(_0x11dabc, 0x2)) : !(_0x11dabc.state !== _0x11dabc.round && _0x11dabc.state !== _0x11dabc.afterEndOfRound && _0x11dabc.state !== _0x11dabc.beforeStartOfNextRound || !(_0x11dabc.scores[0x0] >= 0x63 || _0x11dabc.scores[0x1] >= 0x63)) ? (_0xa3e44a.textContent = "99", _0x4010e9.classList.remove("hidden"), _0x27678e.disabled = true, _0x5ba2e3.disabled = true, _0x4e33b0.disabled = true, void _0x71a86c.pause(_0x11dabc, 0x2)) : void _0x23e92f({
                winningScore: "99"
              });
            }
          });
          _0x4c0c6a.addEventListener("click", () => {
            if (!_0x4c0c6a.classList.contains("selected")) {
              return true === _0x11dabc.isPracticeMode ? (_0x86bd4e.classList.remove("hidden"), _0x27678e.disabled = true, _0x5ba2e3.disabled = true, _0x4e33b0.disabled = true, void _0x71a86c.pause(_0x11dabc, 0x2)) : !(_0x11dabc.state !== _0x11dabc.round && _0x11dabc.state !== _0x11dabc.afterEndOfRound && _0x11dabc.state !== _0x11dabc.beforeStartOfNextRound || !(_0x11dabc.scores[0x0] >= 0x63 || _0x11dabc.scores[0x1] >= 0x63)) ? (_0xa3e44a.textContent = "99", _0x4010e9.classList.remove("hidden"), _0x27678e.disabled = true, _0x5ba2e3.disabled = true, _0x4e33b0.disabled = true, void _0x71a86c.pause(_0x11dabc, 0x2)) : void _0x23e92f({
                winningScore: "99"
              });
            }
          });
          _0x2a2723.addEventListener("click", () => {
            if (!_0x2a2723.classList.contains("selected")) {
              return true === _0x11dabc.isPracticeMode ? (_0x86bd4e.classList.remove("hidden"), _0x27678e.disabled = true, _0x5ba2e3.disabled = true, _0x4e33b0.disabled = true, void _0x71a86c.pause(_0x11dabc, 0x2)) : !(_0x11dabc.state !== _0x11dabc.round && _0x11dabc.state !== _0x11dabc.afterEndOfRound && _0x11dabc.state !== _0x11dabc.beforeStartOfNextRound || !(_0x11dabc.scores[0x0] >= 0x63 || _0x11dabc.scores[0x1] >= 0x63)) ? (_0xa3e44a.textContent = "99", _0x4010e9.classList.remove("hidden"), _0x27678e.disabled = true, _0x5ba2e3.disabled = true, _0x4e33b0.disabled = true, void _0x71a86c.pause(_0x11dabc, 0x2)) : void _0x23e92f({
                winningScore: "99"
              });
            }
          });
          _0x328f4e.addEventListener("click", () => {
            if (!_0x4010e9.classList.contains("hidden")) {
              _0x4010e9.classList.add("hidden");
              _0x27678e.disabled = false;
              _0x5ba2e3.disabled = false;
              _0x4e33b0.disabled = false;
              _0x71a86c.resume(_0x11dabc, 0x2);
            }
          });
          _0x2451ae.addEventListener("click", () => {
            if (!_0x86bd4e.classList.contains("hidden")) {
              _0x86bd4e.classList.add("hidden");
              _0x27678e.disabled = false;
              _0x5ba2e3.disabled = false;
              _0x4e33b0.disabled = false;
              _0x71a86c.resume(_0x11dabc, 0x2);
            }
          });
          const _0x36f366 = document.getElementById("practice-mode-on-btn");
          const _0x576122 = document.getElementById("practice-mode-off-btn");
          _0x36f366.addEventListener("click", () => {
            _0x576122.classList.remove("selected");
            _0x36f366.classList.add("selected");
            _0x11dabc.isPracticeMode = true;
          });
          _0x576122.addEventListener("click", () => {
            _0x36f366.classList.remove("selected");
            _0x576122.classList.add("selected");
            _0x11dabc.isPracticeMode = false;
          });
          const _0x4e7668 = document.getElementById("about-box");
          const _0x2f46c5 = document.getElementById("close-about-btn");
          _0x4e33b0.addEventListener("click", () => {
            if (_0x4e7668.classList.contains("hidden")) {
              _0x4e7668.classList.remove("hidden");
              _0x27678e.disabled = true;
              _0x5ba2e3.disabled = true;
              _0x71a86c.pause(_0x11dabc, 0x2);
            } else {
              _0x4e7668.classList.add("hidden");
              _0x27678e.disabled = false;
              _0x5ba2e3.disabled = false;
              _0x71a86c.resume(_0x11dabc, 0x2);
            }
          });
          _0x2f46c5.addEventListener("click", () => {
            if (!_0x4e7668.classList.contains("hidden")) {
              _0x4e7668.classList.add("hidden");
              _0x27678e.disabled = false;
              _0x5ba2e3.disabled = false;
              _0x71a86c.resume(_0x11dabc, 0x2);
            }
          });
          document.getElementById("reset-to-default-btn").addEventListener("click", () => {
            _0x576122.click();
            _0x23e92f({
              graphic: "sharp",
              bgm: "on",
              sfx: "stereo",
              speed: "medium",
              winningScore: "99"
            });
          });
        })(_0x41fb59, _0x146fa1 => {
          _0x40ca1a(_0x146fa1);
          (_0x24ed85 => {
            _0x40e7d3(_0x24ed85);
            if (_0x24ed85.graphic) {
              _0x20773c.Y.set("pv-offline-graphic", _0x24ed85.graphic);
            }
            if (_0x24ed85.bgm) {
              _0x20773c.Y.set("pv-offline-bgm", _0x24ed85.bgm);
            }
            if (_0x24ed85.sfx) {
              _0x20773c.Y.set("pv-offline-sfx", _0x24ed85.sfx);
            }
            if (_0x24ed85.speed) {
              _0x20773c.Y.set("pv-offline-speed", _0x24ed85.speed);
            }
            if (_0x24ed85.winningScore) {
              _0x20773c.Y.set("pv-offline-winningScore", _0x24ed85.winningScore);
            }
          })(_0x146fa1);
        });
        (function (_0x459575) {
          window.addEventListener("click", _0x118d61 => {
            if (!_0x118d61.target.matches(".dropdown-btn, .submenu-btn")) {
              _0x4ed05c();
              _0x5f49b2("");
              _0x71a86c.resume(_0x459575, 0x1);
            }
          });
          document.getElementById("game-dropdown-btn").addEventListener("click", () => {
            _0x4384cf("game-dropdown", _0x459575);
          });
          document.getElementById("options-dropdown-btn").addEventListener("click", () => {
            _0x4384cf("options-dropdown", _0x459575);
          });
          document.getElementById("graphic-submenu-btn").addEventListener("mouseover", () => {
            _0x64b2c2("graphic-submenu-btn", "graphic-submenu");
          });
          document.getElementById("bgm-submenu-btn").addEventListener("mouseover", () => {
            _0x64b2c2("bgm-submenu-btn", "bgm-submenu");
          });
          document.getElementById("sfx-submenu-btn").addEventListener("mouseover", () => {
            _0x64b2c2("sfx-submenu-btn", "sfx-submenu");
          });
          document.getElementById("speed-submenu-btn").addEventListener("mouseover", () => {
            _0x64b2c2("speed-submenu-btn", "speed-submenu");
          });
          document.getElementById("winning-score-submenu-btn").addEventListener("mouseover", () => {
            _0x64b2c2("winning-score-submenu-btn", "winning-score-submenu");
          });
          document.getElementById("practice-mode-submenu-btn").addEventListener("mouseover", () => {
            _0x64b2c2("practice-mode-submenu-btn", "practice-mode-submenu");
          });
          document.getElementById("reset-to-default-btn").addEventListener("mouseover", () => {
            _0x4ed05c();
          });
          document.getElementById("bgm-submenu-btn").addEventListener("click", () => {
            _0x64b2c2("bgm-submenu-btn", "bgm-submenu");
          });
          document.getElementById("sfx-submenu-btn").addEventListener("click", () => {
            _0x64b2c2("sfx-submenu-btn", "sfx-submenu");
          });
          document.getElementById("speed-submenu-btn").addEventListener("click", () => {
            _0x64b2c2("speed-submenu-btn", "speed-submenu");
          });
          document.getElementById("winning-score-submenu-btn").addEventListener("click", () => {
            _0x64b2c2("winning-score-submenu-btn", "winning-score-submenu");
          });
          document.getElementById("practice-mode-submenu-btn").addEventListener("click", () => {
            _0x64b2c2("practice-mode-submenu-btn", "practice-mode-submenu");
          });
          document.getElementById("reset-to-default-btn").addEventListener("click", () => {
            _0x4ed05c();
          });
        })(_0x41fb59);
        window.addEventListener("keydown", _0x48602d => {
          if ("Escape" === _0x48602d.code) {
            const _0x513a1d = document.getElementById("menu-bar");
            if (_0x513a1d.classList.contains("hidden")) {
              _0x513a1d.classList.remove("hidden");
            } else {
              _0x513a1d.classList.add("hidden");
            }
            _0x48602d.preventDefault();
          } else if ("Space" === _0x48602d.code && document.getElementById("about-box").classList.contains("hidden")) {
            _0x48602d.preventDefault();
          }
        });
        document.addEventListener("visibilitychange", function () {
          if ("visible" === document.visibilityState) {
            _0x41fb59.audio.unmuteAll();
          } else {
            _0x41fb59.audio.muteAll();
          }
        });
      })(_0x158651, _0x1bad08);
      (function (_0x273439) {
        _0x1bad08.maxFPS = _0x273439.normalFPS;
        _0x1bad08.add(() => {
          _0x273439.gameLoop();
          _0x4f222a.render(_0xfc3093);
        });
        _0x1bad08.start();
      })(_0x158651);
    }
    !function () {
      const _0x132922 = document.getElementById("loading-box");
      const _0x241a50 = document.getElementById("progress-bar");
      _0x594bdc.onProgress.add(() => {
        _0x241a50.style.width = _0x594bdc.progress + "%";
      });
      _0x594bdc.onComplete.add(() => {
        _0x132922.classList.add("hidden");
      });
      const _0x37fdc5 = document.getElementById("about-box");
      const _0x18b7b5 = document.getElementById("about-btn");
      const _0x30ea78 = document.getElementById("close-about-btn");
      const _0x28c0fc = document.getElementById("game-dropdown-btn");
      const _0x160cdb = document.getElementById("options-dropdown-btn");
      _0x28c0fc.disabled = true;
      _0x160cdb.disabled = true;
      const _0x15cd89 = () => {
        if (!_0x37fdc5.classList.contains("hidden")) {
          _0x37fdc5.classList.add("hidden");
          _0x18b7b5.disabled = true;
        }
        _0x18b7b5.getElementsByClassName("text-play")[0x0].classList.add("hidden");
        _0x18b7b5.getElementsByClassName("text-about")[0x0].classList.remove("hidden");
        _0x18b7b5.classList.remove("glow");
        _0x30ea78.getElementsByClassName("text-play")[0x0].classList.add("hidden");
        _0x30ea78.getElementsByClassName("text-close")[0x0].classList.remove("hidden");
        _0x30ea78.classList.remove("glow");
        _0x594bdc.load(_0x24e184);
        _0x132922.classList.remove("hidden");
        _0x18b7b5.removeEventListener("click", _0x15cd89);
        _0x30ea78.removeEventListener("click", _0x15cd89);
      };
      _0x18b7b5.addEventListener("click", _0x15cd89);
      _0x30ea78.addEventListener("click", _0x15cd89);
    }();
  },
  0xf8: (_0xa5e2fc, _0x5e150c, _0x28729e) => {
    _0x28729e.d(_0x5e150c, {
      Y: () => _0x278175
    });
    const _0x278175 = {
      get: _0x2b305c => {
        let _0x228591 = null;
        try {
          _0x228591 = localStorage.getItem(_0x2b305c);
        } catch (_0x32d0d7) {
          console.error(_0x32d0d7);
        }
        return _0x228591;
      },
      set: (_0x5d55af, _0x5cd20) => {
        try {
          localStorage.setItem(_0x5d55af, _0x5cd20);
        } catch (_0x5e0a06) {
          console.error(_0x5e0a06);
        }
      }
    };
  }
}, _0x4acca3 => {
  0x174;
  _0x4acca3.O(0x0, [0x197], () => _0x4acca3(_0x4acca3.s = 0x174));
  _0x4acca3.O();
}]);