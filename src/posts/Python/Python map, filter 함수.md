---
title: "Python map(), filter() 함수"
date: 2019-03-02
description: python map(), filter() 함수를 알아보았다.
tags: ["til", "python"]
---

## map() 함수

- 입력받은 함수에 순회 가능한 인자를 하나씩 실행한 결과물을 묶어서(iterator) 리턴한다.
- `map()` 로 만들면 제네레이터로 만들어져서 메모리 절약이 가능하다.

```python
map(function, iterable)
```

### 예시

```python
map_list = map(lambda x:x * x, [1, 2, 3, 4, 5]
```

```bash
map_list
>> [1, 4, 9, 16, 25]
```

## filter() 함수

- 입력핟은 함수에 순회 가능한 인자를 하나씩 실행하여 결과가 `참` 인 경우만 묶어서 돌려준다.
- 함수의 리턴값은 `False` 나 `True` 이어야한다.
- `map()` 과 같이 제네레이터로 만들어져서 메모리 절약이 가능하다.

```python
filter(lambda x:x % 2 == 0, [1, 2, 3, 4, 5]
```

### 예시

```python
print(filter(lambda x:x % 2 == 0, [1, 2, 3, 4, 5])

filter_list = list(filter(lambda x:x % 2 == 0, [1, 2, 3, 4, 5]
print(filter_list)
```

```bash
>> <filter object at 0x104326940>
>> [2, 4]
```
