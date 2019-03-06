---
title: "너비 우선 탐색(BFS)"
date: 2019-03-06
description: 그래프 알고리즘 중 너비 우선 탐색
tags: ["til", "python", "algorithm"]
---

> 본 문서는 Hello Coding 그림으로 개념을 이해하는 알고리즘 책을 공부하고 정리한 내용입니다.

![BFS](image/bfs.jpg)

가장 가까운 목적지부터 탐색 후 결과가 없다면 탐색한 원소와 연결되어 있는 원소를 탐색한다. 그의 반복

## Python 그래프 표현

```python
graph = {}
graph["you"] = ["alice", "bob", "claire"]
graph["bob"] = ["anju","peggy"]
graph["alice"] = ["peggy"]
graph["claire"] = ["thom", "jonny"]
graph["anju"] = []
graph["peggy"] = []
graph["thom"] = []
graph["jonny"] = []
```

```python
{
    'you': ['alice', 'bob', 'claire'],
    'bob': ['anju', 'peggy'],
    'alice': ['peggy'],
    'claire': ['thom', 'jonny'],
    'anju': [],
    'peggy': [],
    'thom': [],
    'jonny': []
}
```

## 망고 판매상 찾기

```python
from collections import deque

def search(name):
    search_queue = deque()
    # 큐에 정점 추가
    search_queue += graph[name]
    # 이미 확인한사람 추적
    searched = []
    # search_queue 에 원소가 있으면 반복
    while search_queue:
        # 스택의 맨 앞 출력 후 제거
        person = search_queue.popleft()
        # searched 배열에 없으면 실행
        if not person in searched:
            # person 의 마지막 글자가 "m" 으로 시작 할 경우
            if person[-1] == 'm':
                print(person + " is a mango seller!")
                return True
            else:
                # 찾지 못했다면 큐에 graph["person"] 에 해당하는 배열 추가
                search_queue += graph[person]
                # person 은 이미 확인했으므로 확인한 리스트에 저장
                searched.append(person)
    return False
```

```bash
thom is a mango seller!
>> True
```

## Queue 에 프린트를 찍어보면?

```bash
pop 전 :  deque(['alice', 'bob', 'claire'])
pop : alice queue : deque(['bob', 'claire'])
pop 전 :  deque(['bob', 'claire', 'peggy'])
pop : bob queue : deque(['claire', 'peggy'])
pop 전 :  deque(['claire', 'peggy', 'anju', 'peggy'])
pop : claire queue : deque(['peggy', 'anju', 'peggy'])
pop 전 :  deque(['peggy', 'anju', 'peggy', 'thom', 'jonny'])
pop : peggy queue : deque(['anju', 'peggy', 'thom', 'jonny'])
pop 전 :  deque(['anju', 'peggy', 'thom', 'jonny'])
pop : anju queue : deque(['peggy', 'thom', 'jonny'])
pop 전 :  deque(['peggy', 'thom', 'jonny'])
pop : peggy queue : deque(['thom', 'jonny'])
pop 전 :  deque(['thom', 'jonny'])
pop : thom queue : deque(['jonny'])
thomis a mango seller!

>> True
```
