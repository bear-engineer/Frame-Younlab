---
title: "Python 삽입정렬"
date: 2019-03-22
description: 삽입정렬 list pop 을 이용해보자
tags: ["til", "python", "algorithm"]
---

## Big O 성능

|            | Big O       |
| ---------- | ----------- |
| 시간복잡도 | O(n \*\* 2) |
| 공간복잡도 | O(n)        |

## Case 01: Insert Sort

앞의 인덱스와 뒤의 인덱스를 비교하여 뒤의 인덱스가 작다면 빼와서 앞에다 삽입한다.

```python
def insertSort(arr):
    for i in range(1,len(arr)):
        # i 가 1이라면 j 의 루프는 0, 1 을 가지게 된다.
        for j in range(i):
            if arr[i] < arr[j]:
                arr.insert(j,arr.pop(i))
    return arr
```

```bash
insertSort([4,1,5,2,3])
>> [1, 2, 3, 4, 5]
```
