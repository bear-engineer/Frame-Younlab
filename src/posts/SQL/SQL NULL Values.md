---
title: "SQL NULL Values(번역)"
date: 2018-06-16
description: SQL NULL Values W3schools
tags: ["sql", "translation"]
---

> 본 문서는 W3schools.com 의 SQL Tutorial 에서 발췌하여 자체적, 주관적인 해석을 담아 작성하였습니다.

## Null 값이란 무엇일까?

Null 값이 있는 필드는 값이 없는 필드다. 즉 비어있다는 의미

테이블의 필드에 값을 추가하지않고 새 레코드를 삽입하거나 레코드를 업데이트 할 수 있다. 그랬을 때 값을 주지 않고 추가한 필드에는 Null 값으로 저장된다.

> Null 값과 0, 공백은 다르다.

## Null 값을 테스트 하는 방법

```sql
	SELECT column_names
	FROM table_name
	WHERE column_name IS NULL;
```

=, < 과 > 와 같은 비교 연산자로 Null 값을 테스트 할 수 없다.
`IS NULL` 연산자와 `IS NOT NULL` 연산자를 사용해야 한다.

## IS NULL 구문

```sql
	SELECT column_name
	FROM table_name
	WHERE column_name IS NULL;
```

table_name 라는 데이터베이스에서 column_name 라는 필드가 값이 Null 인 경우 출력

## IS NOT NULL 구문

```sql
	SELECT column_names
	FROM table_name
	WHERE column_name IS NOT NULL;
```

table_name 라는 데이터베이스에서 column_name 라는 필드가 값이 Null 이 아닐 경우 출력

> Null 값을 찾으려면 항상 `IS NULL` 연산자를 사용하자.

### Extra IS NOT NULL

```sql
	SELECT LastName, FirstName, Address FROM Persons
	WHERE Address IS NOT NULL;
```

결과는 다음과 같다.

<table>
  <tr>
    <th>LastName</th>
    <th>FirstName</th>
    <th>Address</th>
  </tr>
  <tr>
    <td>Doe</td>
    <td>John</td>
    <td>542 W. 27th Street</td>
  </tr>
  <tr>
    <td>Smith</td>
    <td>John</td>
    <td>110 Bishopsgate</td>
  </tr>
</table>
