---
title: "Python level : 01 수박수박수박수박수?"
date: 2019-02-23
description: 프로그래머스 문제풀이 Level 1 수박수박수박수박수? python
tags: ["til", "python", "algorithm"]
---

> 프로그래머스의 알고리즘 연습 level 1

## 문제 설명

길이가 n이고, 수박수박수박수....와 같은 패턴을 유지하는 문자열을 리턴하는 함수, solution을 완성하세요. 예를들어 n이 4이면 수박수박을 리턴하고 3이라면 수박수를 리턴하면 됩니다.

## 제한 조건

- n은 길이 10,000이하인 자연수입니다.

## 풀이

```python
def solution(n):
    answer = ("수박"*n)[:n]
    return answer
```

## 해설

- "수박" 이라는 택스트를 `*n` 만큼 만든다.
- `[:n]` 으로 슬라이싱, `n` 만큼만 출력 하도록 한다.
