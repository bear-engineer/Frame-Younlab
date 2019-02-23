---
title: "Python level : 01 완주하지 못한 선수"
date: 2019-02-23
description: 프로그래머스 문제풀이 Level 1 완주하지 못한 선수 python
tags: ["til", "python", "algorithm"]
---

> 프로그래머스의 알고리즘 연습 level 1

## 문제 설명

수많은 마라톤 선수들이 마라톤에 참여하였습니다. 단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.

마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때, 완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.

## 제한사항

- 마라톤 경기에 참여한 선수의 수는 1명 이상 100,000명 이하입니다.
- completion의 길이는 participant의 길이보다 1 작습니다.
- 참가자의 이름은 1개 이상 20개 이하의 알파벳 소문자로 이루어져 있습니다.
- 참가자 중에는 동명이인이 있을 수 있습니다.

## 풀이

어찌어찌 많은 삽질을해도 풀수 없어서 결국 검색하게 되었다. level 1 도 풀지못한 부족한 나에게 반성하자.

[출처:dreamhollic.tistory.com](https://dreamhollic.tistory.com/entry/%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%EB%AC%B8%EC%A0%9C%ED%92%80%EC%9D%B4-10-%EC%99%84%EC%A3%BC%ED%95%98%EC%A7%80-%EB%AA%BB%ED%95%9C-%EC%84%A0%EC%88%98-JAVA)

```python
import collections

def solution(participant, completion):
    answer = collections.Counter(participant) - collections.Counter(completion)
    return list(answer.keys())[0]
```

## 해설

- `collections` 모듈의 `Counter()` 함수는 배열 내의 객체를 `key(객체이름) : value(배열 내에 중복수)` 로 리턴한다.
- 반환된 딕셔너리를 `-` 연산하여 차집합 한다.
- 값, 즉 키값만 추출하여 되돌려준다.
