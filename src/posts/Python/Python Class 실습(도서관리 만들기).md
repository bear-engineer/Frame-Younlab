---
title: "Python Class 실습 : 도서관리 프로그램"
date: 2018-09-18
description: python class 를 이용하여 도서관리에 대한 루틴을 실습해보다.
tags: ["python"]
---

## 실습 문제

- 도서 관리 프로그램

  - Library, Book, User클래스 구현
    - 프로그램 시작시 도서 5권 정도를 가진 상태로 시작
  - Library

    - attrs
      1. name: 도서관명 (str)
      2. book_list: 도서 목록 (Book인스턴스의 목록) (list)
    - methods
      1. add_book (책 제목을 받아서 새로운 Book을 생성, self.book_list에 추가)
      2. remove_book (책 제목을 받아서 해당 제목의 Book을 self.book_list에서 삭제)
    - property
      1. info: 가지고 있는 도서 목록을 보기좋은 텍스트로 리턴 (빌려간 도서는 출력 안해도 됨)
         -> print(library1.info)

  - Book

    - attrs
      1. title: 제목
      2. location: 현재 자신이 어떤 Library 또는 User에게 있는지를 출력
    - property
      1. is_borrowed: 대출되었는지 (location이 User인지 Library인지 확인)

  - User
    - attrs
      1. name: 이름
      2. book_list: 가지고 있는 도서 목록
    - methods
      1. borrow_book(library, book_name): library로부터 book을 가져옴
      2. return_book(library, book_name): library에 book을 다시 건네줌

## Coding

```python
class Library():
    """
    도서관
    """

    # 초기화
    def __init__(self, name):
        self.name = name
        self.book_list = []

    # 도서총판(Book) 에서 책을 인수
    def add_book(self, book):

        if book in self.book_list:
            print('이미 소장중인 도서입니다.')
        else:
            book.location = self.name
            book.is_borroweds = True
            self.book_list.append(book)
            print(f'{book.title} 이 도서관에 추가되었습니다.')

    # 책을 폐기
    def remove_book(self, book):
        if book in self.book_list:
            book.location = ''
            book.is_borrowed = '제고 없음'
            self.book_list.remove(book)
            print(f'{self.name}이 소장중인 도서목록 \n{self.book_list}')
        else:
            print('존재하지 않는 도서입니다.')

    # 정보
    @property
    def info(self):
        print(f'도서관: {self.name}\n장서목록: {[i.title for i in self.book_list]}')


class Book():
    """
    책 & 도서총판
    """

    # 초기화
    def __init__(self, title):
        self.title = title
        self.location = ''
        is_borroweds = ''

    # 대여 가능 여부
    @property
    def is_borrowed(self):
        if self.is_borroweds == False:
            return '대여중'
        elif self.is_borroweds == True:
            return '대여 가능'
        else:
            return '제고 없음'

	 # 정보
    @property
    def info(self):
        print(f'제목: {self.title}\n소재지: {self.location} \n대여여부: {self.is_borrowed}')

class User():
    """
    도서관 이용자
    """

    # 초기화
    def __init__(self, name):
        self.name = name
        self.book_list = []

    # 책 대여
    def borrow_book(self, library, book):
        if book in self.book_list:
            print('이미 소장중인 도서입니다.')
        else:
            library.book_list.remove(book)
            self.book_list.append(book)
            book.location = self.name
            book.is_borroweds = False
            print(f'{library.name} 에서 {book.title}을(를) 빌렸습니다.\n나의 소장 도서목록-\n{[i.title for i in self.book_list]}')

    # 책 반납
    def return_book(self, library, book):
        if book in self.book_list:
            library.book_list.append(book)
            self.book_list.remove(book)
            book.location = library.name
            book.is_borroweds = True
            print(f'{self.name} 이(가) {book.title}을(를) {library.name}에 반납했습니다.\n 나의 소장 도서목록-\n{[i.title for i in self.book_list]}')
        else:
            print('해당하는 도서가 없습니다.')

    # 정보
    @property
    def info(self):
        print(f'이름: {self.name}\n소장 도서목록-\n{[i.title for i in self.book_list]}')
```

<br>

### 나만의 엉터리 해법

- 도서총판(Book) 에서 책을 만들고 도서관(Library) 에 등록한다.
- 도서관은 책을 등록하고 폐기할 수 있다.
- 도서총판은 책의 소재지를 알 수 있도록 한다.
- 유저는 도서관에서 책을 빌리고 반납할 수 있다.
- 유저는 자신이 가지고 있는 책 목록을 보여줄 수 있다.
- 유저가 책을 빌리면 도서관에는 그 책이 없고, 반납하면 있다. 유저의 책 목록도 마찬가지

## 실행

```python
b001 = Book(title='사랑받는 방법')
b002 = Book(title='미움받을 용기')
b003 = Book(title='FBI의 심리학')
book_list = [b001,b002,b003]

library = Library(name='관산도서관')

for books in book_list:
    library.add_book(books)


```

    사랑받는 방법 이 도서관에 추가되었습니다.
    미움받을 용기 이 도서관에 추가되었습니다.
    FBI의 심리학 이 도서관에 추가되었습니다.

```python
library.info
```

    도서관: 관산도서관
    장서목록: ['사랑받는 방법', '미움받을 용기', 'FBI의 심리학']

```python
sh = User(name='윤세현')
sh.borrow_book(library, b003)
```

    관산도서관 에서 FBI의 심리학을(를) 빌렸습니다.
    나의 소장 도서목록-
    ['FBI의 심리학']

```python
b001.info
b003.info
```

    제목: 사랑받는 방법
    소재지: 관산도서관
    대여여부: 대여 가능
    제목: FBI의 심리학
    소재지: 윤세현
    대여여부: 대여중

```python
library.info
```

    도서관: 관산도서관
    장서목록: ['사랑받는 방법', '미움받을 용기']

```python
sh.info
```

    이름: 윤세현
    소장 도서목록-
    ['FBI의 심리학']

```python
sh.return_book(library,b003)
```

    윤세현 이(가) FBI의 심리학을(를) 관산도서관에 반납했습니다.
     나의 소장 도서목록-
    []

```python
library.info
```

    도서관: 관산도서관
    장서목록: ['사랑받는 방법', '미움받을 용기', 'FBI의 심리학']

```python
b003.info
```

    제목: FBI의 심리학
    소재지: 관산도서관
    대여여부: 대여 가능
