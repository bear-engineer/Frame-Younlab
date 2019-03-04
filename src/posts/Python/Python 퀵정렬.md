---
title: "Python 퀵 정렬"
date: 2019-03-05
description: 분할 정복 전략을 사용한 재귀적 정렬 방법
tags: ["til", "python", "algorithm"]
---

> 본 문서는 Hello Coding 그림으로 개념을 이해하는 알고리즘 책을 공부하고 정리한 내용입니다.

## Big O 성능

|             | Big O       |
| ----------- | ----------- |
| 시간복잡도  | O(n log n)  |
| 최악의 경우 | O(n \*\* 2) |

## 분할 정복 전략

- 가장 기본이 되는 단계를 찾는다.
- 문제를 더이상 줄일수 없을만큼 줄여나간다.

## 퀵 정렬 의 분할 정복 전략

- 기준 원소
- 기준 원소 보다 작은 숫자들로 이루어진 하위 배열
- 기준 원소 보다 큰 숫자들로 이루어진 하위 배열

기준 원소를 무엇으로 고르냐에 따라 시간 복잡도가 최선에서 최악으로 바뀔 수 있다.

불안정 정렬에 속한다.

```python
["기준 원소보다 큰 배열 (재귀)"] + ["기준 원소"] + ["기준 원소보다 작은 배열 (재귀)"]
```

## 구현

```python
def quickSort(arr):
    if len(arr) < 2:
        # 배열의 요소가 1 이면 정렬 할 필요가 없다.
        return arr
    # 기준이 되는 원소
    pivot = arr[0]
    # 기준이 되는 원소 보다 큰 정렬
    less = [i for i in arr[1:] if i >= pivot]
    # 기준이 되는 원소 보다 작은 정렬
    greater = [i for i in arr[1:] if i < pivot]

    # 재귀적으로 값을 리턴
    return quickSort(less) + [pivot] + quickSort(greater)
```

```bash
quickSort([2,0,5,5,11,8,7,55])
>> [55, 11, 8, 7, 5, 5, 2, 0]
```
