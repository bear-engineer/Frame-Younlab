---
title: "이진탐색(Binary Search) with Python"
date: 2019-03-01
description: 이진탐색에 대하여 공부해보았다.
tags: ["til", "python", "algorithm"]
---

처음과 끝, 중간을 정하고 타겟과 중간을 비교해 타겟이 클 경우 시작범위를 중간부터, 중간이 클 경우 끝 범위를 중간부터 하는 식으로 범위를 절반씩 줄여가며 검색하는 알고리즘이다.

- 검색하려는 배열과 타겟이 있어야한다.
- 배열 정렬되어 있어야한다.
- 처음과 끝, 중간이 있고 타겟과 중간을 비교하면서 반복한다.
- 계산복잡도는 O(logn)

## 타겟의 위치를 찾아라.

```python
def binary_search(element, some_list):
    min = 0
    max = len(some_list) - 1

    while min <= max:
        mid = (min + max) // 2
        if some_list[mid] == element:
            return mid
        elif some_list[mid] > element:
            max = mid - 1
        elif some_list[mid] < element:
            min = mid + 1
    return None

print(binary_search(2, [2, 3, 5, 7, 11]))
print(binary_search(0, [2, 3, 5, 7, 11]))
print(binary_search(5, [2, 3, 5, 7, 11]))
print(binary_search(3, [2, 3, 5, 7, 11]))
print(binary_search(11, [2, 3, 5, 7, 11]))
```

```bash
>> 0
>> None
>> 2
>> 1
>> 4
```

## 알파벳의 위치를 찾아라

```python
def binary_search(element, some_list):
    loop_count = 0
    start = 0
    end = len(some_list) - 1
    while start <= end:
        mid = (start + end) // 2
        loop_count += 1
        if element == some_list[mid]:
            return f'target : {element}, index : {mid}, count : {loop_count}'
        elif element > some_list[mid]:
            start = mid + 1
        elif element < some_list[mid]:
            end = mid - 1
        else:
            return None

binary_search('B',['A', 'B', 'C', 'D', 'E', 'F','G'])
```

```bash
>> 'target : B, index : 1, count : 2'
```
