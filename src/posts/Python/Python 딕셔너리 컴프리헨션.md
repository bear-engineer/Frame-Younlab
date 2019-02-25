---
title: "Python 딕셔너리 컴프리헨션"
date: 2019-02-25
description: python 의 딕셔너리로 축약반복문으로 자동으로 생성 할 수는 없을까?
tags: ["til", "python"]
---

```python
{키_표현식 : 값_표현식 for 표현식 in 순회_가능한_객체}
```

딕셔너리 컴프리헨션은 리스트 컴프리헨션과 크게 다르지 않다.

```python
wort = "letters"
letter_counts = {letter: word.count(letter) for letter in word}
letter_counts
{"l":1, "e":2, "t":2, "r":1, "s":1}
```

"e" 와 "t" 를 두번씩 세기 때문에 시간낭비이나 그저 교체만 하기 때문에 에러가 발생하지 않는다.
