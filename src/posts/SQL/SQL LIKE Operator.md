---
title: "SQL LIKE Operator(번역)"
date: 2018-06-17
description: SQL LIKE Operator W3schools
tags: ["sql", "translation"]
---

> 본 문서는 W3schools.com 의 SQL Tutorial 에서 발췌하여 자체적, 주관적인 해석을 담아 작성하였습니다.

## The SQL LIKE Operator

LIKE 연산자는 WHERE 문에서 열의 지정된 패턴을 검색하는데 사용된다.

LIKE 연산자와 함께 사용되는 두 개의 와일드 카드가 있다.

- % : 백분율 기호는 0, 1 또는 복수 문자를 나타낸다.
- \_ : 밑줄은 한 문자를 나타낸다.

> 나는 SQL 식 정규표현식이라 생각할란다...

> MS Access 는 밑줄`__` 대신 물음표 `?` 를 사용한다.

백분율 기호와 밑줄은 조합하여 사용할 수도 있다.

## LIKE 구문

```sql
	SELECT column1, column2, ...
	FROM table_name
	WHERE columnN LIKE pattern;
```

> AND , OR 연산자를 사용하여 여러 조건을 결합 할 수도 있다.

다음은 `%` 와 `_` 와일드 카드가 다른 LIKE 연산자를 보여주는 몇가지 예시다.

<table class="w3-table-all notranslate">
  <tr>
    <th>LIKE Operator</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>WHERE CustomerName LIKE 'a%'</td>
    <td>”a” 로 시작하는 값을 찾는다.</td>
  </tr>
  <tr>
    <td>WHERE CustomerName LIKE '%a'</td>
    <td>”a” 로 끝나는 값을 찾는다.</td>
  </tr>
  <tr>
    <td>WHERE CustomerName LIKE '%or%'</td>
    <td>어떤 위치에 “or” 값이 있는 값을 찾는다.</td>
  </tr>
  <tr>
    <td>WHERE CustomerName LIKE '_r%'</td>
    <td>두 번째 위치에 “r” 이 있는 값을 찾는다.</td>
  </tr>
  <tr>
    <td>WHERE CustomerName LIKE 'a_%_%'</td>
    <td>”a” 로 시작하고 길이가 3자 이상인 값을 찾는다.</td>
  </tr>
  <tr>
    <td>WHERE ContactName LIKE 'a%o'</td>
    <td>”a” 로 시작하고 “o” 로 끝나는 값을 찾는다.</td>
  </tr>
</table>

### Extra LIKE

다음의 SQL 문은 CustomerName 가 “a” 로 시작하는 모든 고객을 출력한다.

```sql
	SELECT * FROM Customers
	WHERE CustomerName LIKE 'a%';
```

> 결과 확인은 여기서 : W3schools([SQL Tryit Editor v1.6](https://www.w3schools.com/sql/trysql.asp?filename=trysql_select_like))

다음의 SQL 문은 CustomerName 가 ”a” 로 끝나는 모든 고객을 출력한다.

```sql
	SELECT * FROM Customers
	WHERE CustomerName LIKE '%a';
```

> 결과 확인은 여기서 : W3schools([SQL Tryit Editor v1.6](https://www.w3schools.com/sql/trysql.asp?filename=trysql_select_like_ending))

다음의 SQL 문은 CustomerName 가 “or” 이 들어간 모든 고객을 출력한다.

```sql
	SELECT * FROM Customers
	WHERE CustomerName LIKE '%or%';
```

> 결과 확인은 여기서 : W3schools([SQL Tryit Editor v1.6](https://www.w3schools.com/sql/trysql.asp?filename=trysql_select_like_pattern))

다음의 SQL 문은 두 번째 위치에 “r” 이 들어간 CustomerName 를 가진 모든 고객을 출력한다.

```sql
	SELECT * FROM Customers
	WHERE CustomerName LIKE '_r%';
```

> 결과 확인은 여기서 : W3schools([SQL Tryit Editor v1.6](https://www.w3schools.com/sql/trysql.asp?filename=trysql_select_like_underscore))

다음의 SQL 문은 CustomerName 가 “a” 로 시작하고 길이가 3자 이상인 모든 고객을 출력한다.

```sql
	SELECT * FROM Customers
	WHERE CustomerName LIKE 'a_%_%';
```

> 결과 확인은 여기서 : W3schools([SQL Tryit Editor v1.6](https://www.w3schools.com/sql/trysql.asp?filename=trysql_select_like_start_least))

다음의 SQL 문은 ContactName 가 “a” 로 시작하고 “o” 로 끝나는 모든 고객을 출력한다.

```sql
	SELECT * FROM Customers
	WHERE ContactName LIKE 'a%o';
```

> 결과 확인은 여기서 : W3schools([SQL Tryit Editor v1.6](https://www.w3schools.com/sql/trysql.asp?filename=trysql_select_like_start_end))

다음의 SQL 문은 CustomerName 가 “a” 로 시작하지 않는 모든 고객을 출력한다.

```sql
	SELECT * FROM Customers
	WHERE CustomerName NOT LIKE 'a%';
```

> 결과 확인은 여기서 : W3schools([SQL Tryit Editor v1.6](https://www.w3schools.com/sql/trysql.asp?filename=trysql_select_like_not))
