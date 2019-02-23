---
title: "Python Set intersection 연산자"
date: 2019-02-23
description: set 의 앰퍼센트 연산자 & 와 합집합, 교집합, 차집합
tags: ["til", "python"]
---

Set 값의 콤비네이션(combination) 을 확인하려면 아래와 같이 작성하면 된다. 오렌지 주스 또는 버몬트가 들어가 있는 음료가 마시고 싶다고 가정할 때 `Set Intersection` 연산자인 앰퍼센트 `&` 를 사용해 우리가 원하는 음료를 찾을 수 있다.

```python
drinks = {
    'martini':{'vodka','vermouth'},
    'black russian':{'vodka','kahlua'},
    'white russian':{'cream','kahlua','vodka'},
    'manhattan':{'rye','vermouth','bitters'},
    'screwdriver':{'orange juice','vodka'}
}

for name, contents in drinks.items():
    if contents & {'vermouth', 'orange juice'}:
        print(name)

screwdriver
martini
manhattan
```

> Set 연산자로 값이 set 일 경우에만 사용할 수 있다.

보드카는 들어있지만 크림이나 버몬트는 들어 있지 않는 음료를 찾는다.

```python
for name, contents in drinks.items():
    if 'vodka' in contents and not contents & {'vermouth', 'cream'}:
        print(name)
```

1,2 들어 있는 a 셋과 2,3 이 들어있는 b 셋의 교집합을 찾아보자

```python
a = {1, 2}
b = {2, 3}

a & b

{2}
```

a 에도 있고 b 에도 있는 합집합을 찾아보자

```python
a | b
{1, 2, 3}
```

첫번째에는 있지만 두번째에는 없는 차집합을 찾아보자

```python
a - b
{1}
```
