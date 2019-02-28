---
title: "Python 매직매서드로 2차원 백터 Class 만들기"
date: 2019-02-28
description: python class 로 2차원 계산 x,y * x,y 만들기, 클래스에 매직매서드 활용하기
tags: ["til", "python"]
---

## 문자열

- `__repr__` 해당 매서드가 정의되지 않는다면 객체는 콘솔에 `<객체이름, 타입, 아이디값>` 으로 출력된다.
- `__str__` 해당 매서드는 프린트문에서 사용자가 볼때 사용된다.

## 산술연산자

산술연산자는 객체를 연산하고 새로운 객체로 돌려주며 원본 객체는 변하지 않는다.

- `__add__` 더하기 연산자다. 인자로 `outer` 가 자동으로 제공된다. `outer` 는 더하려는 값이다.
- `__mul__` 곱하기 연산자다. 더하기와 같다.

## 불리언 값

- `__bool__` 0 이면 `False` 를 반환하고 값이 있으면 `True` 를 반환한다.

```python
class Vector:
    """
    2차원 백터 클래스
    """
    def __init__(self, x = 0, y = 0):
        self.x = x
        self.y = y

    def __repr__(self):
        return f'Vector(%r, %r)' % (self.x, self.y)

    def __abs__(self):
        return bool(abs(self))

    def __bool__(self):
        return bool(abs(self))

    def __add__(self, other):
        x = self.x + other.x
        y = self.y + other.y
        return Vector(x, y)

    def __mul__(self, scalar):
        return Vector(self.x * scalar.x , self.y * scalar.y)
```

```bash
Vector(2, 3) * Vector(1, 4)
>> Vector(2, 12)
```
