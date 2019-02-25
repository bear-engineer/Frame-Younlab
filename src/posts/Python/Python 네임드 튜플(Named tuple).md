---
title: "Python 네임드 튜플(Named tuple)"
date: 2019-02-26
description: python 의 named tuple 사용법과 특징, 그리고 사용함에 얻는 이점
tags: ["til", "python"]
---

> 귀도 반 로섬의 조언 : 자료구조를 과하게 엔지니어링 하는것을 피하라. **객체보다 튜플** 이 더 낫다. getter/setter 함수보다 간단한 필드가 더 낫다. 내장된 데이터 타입은 우리의 친구다. 숫자, 문자열, 튜플, 리스트, 셋, 딕셔너리를 활용하라. 또한 데크와 같은 컬렉션 라이브러리를 활용하라.

네임드 튜플은 튜플(tuple) 의 서브클래스다. 이름 `.name` 과 위치 `[offset]` 로 접근할 수 있다.

```python
from collections import namedtuple

# 객체 초기화, 이름, 항목(스페이스바로 구분)
Duck = namedtuple('Duck', 'bill tail')

duck = Duck('wide orange', 'long')

duck
Duck(bill='wide orange', tail='long')
```

딕셔너리로 키워드인자 `**kwargs` 를 사용하여 네임드 튜플을 만들 수 있다.

```python
from collections import namedtuple

duck = {'bill': 'wide orange', 'tail': 'long'}

dict_duck = Duck(**duck)

duct_duck
Duck(bill='wide orange', tail='long')
```

네임드 튜플은 불변속성이나 필드를 바꿔서 다른 네임드 튜플을 반환할 수 있다.

```python
duck2 = duck._replace(tail='magnificent', bill='crushing')

duck2
Duck(tail='magnificent', bill='crushing')
```

## 네임드 튜플의 특징

- 불변하는 객체처럼 사용된다.
- 객체(Class) 보다 공간 효율성과 시간 효율성이 더 좋다.
- 딕셔너리 형식의 괄호 `[]` 대신 점 `.` 표기법으로 접근할 수 있다.
- 네임드 튜플을 딕셔너리의 키처럼 쓸 수 있다.
