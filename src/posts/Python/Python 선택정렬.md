---
title: "Python 선택정렬"
date: 2019-03-04
description: 작은 값과 비교하여 위치를 스왑(swap) 해보자
tags: ["til", "python", "algorithm"]
---

> 본 문서는 Hello Coding 그림으로 개념을 이해하는 알고리즘 책을 공부하고 정리한 내용입니다.

배열에서 가장 작은 수를 찾아 새로운 배열에 추가 한후 원본에서 제거한다.

## Big O 성능

| 시간복잡도 | O(n \*\* 2) |
| ---------- | ----------- |
| 공간복잡도 | O(1)        |

## Case 01: Find Min Number Selection Sort

```python
def selectionSort(arr):
    def findMin(in_arr):
        """
        최소값 출력
        """
        minData = in_arr[0]
        minIndex = 0

        for i in range(1, len(in_arr)):
            if minData > in_arr[i]:
                minData = in_arr[i]
                minIndex = i
        return minIndex
    """
    내부함수를 실행하여 최소값 인덱스를 찾고 새로운 배열에 추가하고 원본에 제거
    """
    newArr = []
    for i in range(len(arr)):
        minIndex = findMin(arr)
        newArry.append(arr.pop(minIndex))
    return newArry

selectionSort([2,0,6,7,1,3,1])
```

```bash
>> [0, 1, 1, 2, 3, 6, 7]
```

## Case 02: Swap Index Selection Sort

```python
def selectionSort(arr):
    """
    스왑(swap) 으로 위치를 바꿔주는 선택정렬
    """
    for i in range(0 ,len(arr) - 1):
        for j in range(i + 1, len(arr)):
            if arr[i] > arr[j]:
                arr[i], arr[j] = arr[j], arr[i]
    return arr
selectionSort([2,0,6,7,1,3,1])
```

```bash
>> [0, 1, 1, 2, 3, 6, 7]
```
