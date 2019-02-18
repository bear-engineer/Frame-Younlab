---
title: "SQL and, or, not 연산자(번역)"
date: 2018-06-16
description: SQL and, or, not 연산자 W3schools
tags: ["sql", "translation"]
---

> 본 문서는 W3schools.com 의 SQL Tutorial 에서 발췌하여 자체적, 주관적인 해석을 담아 작성하였습니다.

## SQL AND, OR 및 NOT 연산자

Where 문은 and, or, not 연산자와 결합할 수 있다.

And 및 or 연산자는 둘 이상의 조건에 따라 레코드를 필터링 하는데 사용된다.

- and 로 구분된 모든 조건이 `TRUE` 이면 and 연산자는 레코드를 표시한다.
- or 로 구분된 조건이 `TRUE` 인 경우 OR 연산자는 레코드를 표시한다.

not 연산자는 조건이 참이 아닌 경우 즉 `FALSE` 일 경우에 레코드를 표시한다.

## and 구문

```sql
SELECT colunm1, colum2, ...
FROM table_name
WHERE condition1 AND condition2 AND condition3 ...;
```

condition1 과 condition2 와 condition3 가 모두 해당할 경우

## or 구문

```sql
SELECT column1, column2, ...
FROM table_name
WHERE condition1 OR condition2 OR condition3 ...;
```

condition1 이나 condition2 나 condition3 어느것중 하나라도 해당할 경우

## not 문법

```sql
SELECT column1, column2, ...
FROM table_name
WHERE NOT condition;
```

condition 이 아닐 경우

### Extra `and`

다음 SQL 문은 country 가 “Germany” 이고 도시가 “Berlin” 인 “Customers” 의 모든 필드를 선택한다.

```sql
SELECT * FROM Customers
WHERE Country='Germany' AND City='Berlin';
```

> 결과 확인은 여기서 : W3schools([SQL Tryit Editor v1.6](https://www.w3schools.com/sql/trysql.asp?filename=trysql_select_where_and))

### Extra `or`

```sql
SELECT * FROM Customers
WHERE City='Berlin' OR City='München';
```

> 결과 확인은 여기서 : W3schools([SQL Tryit Editor v1.6](https://www.w3schools.com/sql/trysql.asp?filename=trysql_select_where_or))

### Extra `not`

```sql
SELECT * FROM Customers
WHERE NOT Country='Germany';
```

> 결과 확인은 여기서 : W3schools([SQL Tryit Editor v1.6](https://www.w3schools.com/sql/trysql.asp?filename=trysql_select_where_not))

### and, or, not 결합

and, or, not 연산자를 결합 할 수도 있다.

다음의 SQL 문은 country가 “Germany” 이고 도시가 “Berlin” 또는 “München”인 “Customers” 의 모든 필드를 선택한다.

> 복잡한 표현식을 사용 할 경우 괄호를 이용한다.

```sql
SELECT * FROM Customers
WHERE Country='Germany' AND (City='Berlin' OR City='München');
```

> 결과 확인은 여기서 : W3schools([SQL Tryit Editor v1.6](https://www.w3schools.com/sql/trysql.asp?filename=trysql_select_where_and_or))

다음의 SQL 문은 country가 “Germany”가 아니며 “USA”가 아닌 “Customers”의 모든 필드를 선택한다.

```sql
SELECT *FROM Customers
WHERE NOT Country='Germany' AND NOT Country='USA';
```

> 결과 확인은 여기서 : W3schools([SQL Tryit Editor v1.6](https://www.w3schools.com/sql/trysql.asp?filename=trysql_select_where_not_and))
