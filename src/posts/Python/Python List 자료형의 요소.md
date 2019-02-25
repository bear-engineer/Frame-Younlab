---
title: "Python List 자료형의 요소"
date: 2019-02-25
description: python 의 list 자료형으로 추가, 삭제, 정렬 방법에 대해 알아보았다.
tags: ["til", "python"]
---

## 리스트 (List)

### append

- `append()` 는 리스트의 맨 마지막 항목에 추가한다.

```python
result = [1 ,2 ,3 ,4]
[1, 2, 3, 4]

result.append(5)
[1, 2, 3, 4, 5]
```

### extend

- `extend()` 는 타겟 리스트에 다른 리스트를 병합 할 수 있다. 다른 방법으로는 `+=` 으로 사용할 수도 있다.

```python
result = [1, 2, 3, 4]
[1, 2, 3, 4]

result.extend([5, 6])
[1, 2, 3, 4, 5, 6]

# append 의 경우
result.append([5, 6])
[1, 2, 3, 4, [5, 6]]
```

### inset

- `inset()` 은 원하는 위치에 오프셋 을 사용해 추가 할 수 있다. 리스트 끝을 넘는 오프셋은 자동으로 맨 끝에 추가된다.

```python
result = [1, 2, 3, 4]
[1, 2, 3, 4]

result.inset(2, "a")
[1, "a", 2, 3, 4]
```

### del

- `del` 은 함수가 아닌 파이썬 구문이다. del 은 할당(=) 의 반대이다. 이것은 객체로부터 이름을 분리하고 객체의 메모리를 비워준다.

```python
result = [1, 2, 3, 4]
[1, 2, 3, 4]

del result[-1]
[1, 2, 3]
```

### remove

- `remove()` 는 리스트의 삭제할 항목의 위치를 모를 경우에 원하는 값을 특정해 삭제한다.

```python
result = [1, 2, 3, 4]
[1, 2, 3, 4]

result.remove(2)
[1, 3, 4]
```

### pop

- `pop()` 은 리스트에서 해당 항목을 가져오는 동시에 리스트에서 제거한다. 오프셋 인자가 없다면 마지막을 호출 후 삭제한다.

```python
result = [1, 2, 3, 4]
[1, 2, 3, 4]

result.pop()
4

result
[1, 2, 3]

result.pop(0)
1

result
[2, 3]
```

### index

- `index()` 는 해당 인자의 오프셋 위치를 찾아준다.

```python
result = [1, 2, 3, 4]
[1, 2, 3, 4]

result.index(3)
2
```

### count

- `count()` 는 리스트 내의 해당하는 인자의 갯수를 구한다.

```python
result = [1, 2, 2, 3, 4, 2]
[1, 2, 2, 3, 4, 2]

result.count(2)
3
```

### sort, sorted

- `sort()` 리스트를 정렬한다. 숫자라면 오른차순으로, 영어라면 알파벳 순으로 정렬한다.

- `sorted()` 리스트를 정렬하되, 원본의 복사본을 만들어 정렬한다. 두번제 인자로 정렬 방식을 정할 수 있다.
  1. `revers = True` 정렬 방법이 역순으로 변경된다.
  2. `key = key` 정렬이 되는 기준을 설정 할 수 있다. 함수를 받는 파라미터이기 때문에 람다식(lambda) 을 사용할 수 있다.

```python
result = [1, 2, 6, 5, 3, 0]
[1, 2, 6, 5, 3, 0]

result.sort()
[0, 1, 2, 3, 5, 6]

sorted(result)
[0, 1, 2, 3, 5, 6]

sorted(result, reverse = True)
[6, 5, 3, 2, 1, 0]

# key 를 사용한 경우
result = [1, 2, 3, 4, 5, 6]
[1, 2, 3, 4, 5, 6]

sorted(result, key= lambda x: x % 2 == 0)
[1, 3, 5, 2, 4, 6]
```
