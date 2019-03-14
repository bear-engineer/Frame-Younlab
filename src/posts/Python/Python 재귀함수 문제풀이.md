---
title: "Python 재귀함수 문제풀이"
date: 2019-03-05
description: python 의 내장함수를 재귀함수로 표현해보다.
tags: ["til", "python"]
---

## sum 함수를 구현해보자

주어진 배열의 합을 구한다.

```python
def sum(arr):
    if len(arr) < 2:
        return arr[0]
    return arr[0] + sum(arr[1:])
```

```bash
sum([1,2,3])
>> 6
```

이루어지는 재귀

```python
arr[0] = 1 + 재귀 대기
    arr[0] = 2 + 재귀 대기
        arr[0] = 3 return
    2 + 3 = 5
1 + 5 = 6
```

## len 함수를 구현해보자

주어진 배열 요소의 수

```python
def len(arr):
    if arr == []:
        return 0
    return 1 + len(arr[1:])
```

```bash
len([1, 2, 3])
>> 3
```

이루어지는 재귀

```python
1 + 재귀 대기
    1 + 재귀 대기
        1 + 0 = 1 return
    1 + 1 = 2
1 + 2 = 3
```

## max 함수를 구현해보자

주어진 배열중 가장 큰 값

```python
def max(arr):
    if len(arr) == 2:
        return arr[0] if arr[0] > arr[1] else arr[1]
    sub = max(arr[1:])
    return arr[0] if arr[0] > sub else sub
```

```bash
max([1, 2, 3, 4, 5])
>> 3
```

이루어지는 재귀

```python
sub = 재귀 대기 #[2, 3, 4, 5]
    sub = 재귀 대기 #[3, 4, 5]
        sub = 4 < 5 = return 5
    sub = 3 < 5 = return 5
sub = 2 < 5 = return 5
```

## 이진탐색을 재귀적으로 구현해보자

```python
def binarySearch(target, arr, start=0, end=None):
    if end == None:
        end = len(arr) - 1
    if arr == []:
        return None
    if start > end:
        return None

    mid = (start + end) // 2
    if arr[mid] == target:
        return mid
    elif arr[mid] < target:
        start = mid + 1
        return binarySearch(target, arr, start, end)
    elif arr[mid] > target:
        end = mid - 1
        return binarySearch(target, arr, start, end)
```

## 하노이의 탑

```python
def hanoi(disk, start, end):
    if disk == 0:
        return
    if disk:
        other = 6 - (start + end)
        hanoi(disk - 1, start, other)
        print(f'{disk}번 원판을 {start}번 기둥에서 {end}번 기둥으로 이동')
        hanoi(disk - 1, other, end)
hanoi(3, 1, 3)
```

```bash
1번 원판을 1번 기둥에서 3번 기둥으로 이동
2번 원판을 1번 기둥에서 2번 기둥으로 이동
1번 원판을 3번 기둥에서 2번 기둥으로 이동
3번 원판을 1번 기둥에서 3번 기둥으로 이동
1번 원판을 2번 기둥에서 1번 기둥으로 이동
2번 원판을 2번 기둥에서 3번 기둥으로 이동
1번 원판을 1번 기둥에서 3번 기둥으로 이동
```
