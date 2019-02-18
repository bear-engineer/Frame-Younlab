---
title: "Python 제어문(if, elif, else)"
date: 2018-08-25
description: python 의 제어문중 if, elif, else에 대하여 정리
tags: ["python"]
---

## 조건문 (if, elif, else)

if 와 else는 조건이 참인지 거짓인지를 판단하는 선언문(Statement) 이며, elif는 else 내의 if를 중첩해야 할 때 사용한다.

```python
# 1. if, else

if 조건:
	조건이 참일 경우
else:
	조건이 거짓(위의 if 문을 통과하지 못했을 경우)일 경우

# 2. if, elif

if 조건:
	조건이 참일 경우
else:
	조건이 거짓 일 경우
	if 조건2:
		조건1 은 거짓이나, 조건2는 참일 경우
	else:
		조건1, 2 가 모두 거짓일 경우

# 위의 2번은 아래와같이 elif 를 사용하여 축약 할 수 있다.

if 조건:
	조건이 참일 경우
elif 조건2:
	조건1은 거짓이나 조건 2는 참일 경우
else:
	조건1, 2 가 모두 거짓일 경우
```

## 조건표현식

조건표현식은 그 자체로 무엇인가를 return 해준다.

```python
참일경우 if 조건식 else 거짓일 경우
```

is_holiday 에 True 또는 False 값을 할당한 후, if 문과 조건표현식을 사용해서 각각 'Good'과 'Bad'를 출력하는 코드를 짜본다.

```python
# False 는 거짓
# True 는 진실

# 일반적인 if 문

is_holiday = False
if is_holiday:
	print('Good')
else:
	print('Bad')

# 변수 안에 바로 할당할 수 있는 표현식
a = 'Good' if is_holiday else 'Bad'
```

조건 표현식은 처음과 끝에 조건의 결과값이 들어간다고 생각하면 편하지 않을까?

## 중첩 조건표현식

한 조건표현식 안에 여러개의 조건문이 들어가는 것을 중첩 조건표현식이라고 한다.

```python
# 단순히 조건1 이 거짓일 경우에 다른 if 문이 else 부분에 들어간다고 생각하면 편하다.

is_holiday = False
is_workday = True

a = 'Good' if is_holiday else 'Oh my god' if is_workday else 'Thank'
```

`is_holiday` 가 참이면 'Good'를 반환하는데 거짓이라면 'Oh my god' 을 반환하는데 이 경우는 `is_workday` 가 참일 경우이다. 거짓이라면 'Thank'를 반환하라

> 조건 표현식에서는 `elif`의 사용이 불가능하다.
