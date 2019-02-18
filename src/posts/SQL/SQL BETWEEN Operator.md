---
title: "SQL BETWEEN Operator(번역)"
date: 2018-06-17
description: SQL BETWEEN Operator W3schools
tags: ["sql", "translation"]
---

> 본 문서는 W3schools.com 의 SQL Tutorial 에서 발췌하여 자체적, 주관적인 해석을 담아 작성하였습니다.

## The SQL BETWEEN Operator

- BETWEEN 연산자는 주어진 범위 내의 값을 선택한다. 값은 숫자, 텍스트 또는 날짜 일 수도 있다.
- BETWEEN 연산자는 시작과 끝 값이 포함된다.

## BETWEEN 구문

```sql
SELECT column_name(s)
FROM table_name
WHERE column_name BETWEEN value1 AND value2;
```

### Extra BETWEEN

다음의 SQL 문은 가격이 10과 20 사이의 모든 제품을 출력한다.

```sql
SELECT * FROM Products
WHERE Price BETWEEN 10 AND 20;
```

> 결과 확인은 여기서 : W3schools([SQL Tryit Editor v1.6](https://www.w3schools.com/sql/trysql.asp?filename=trysql_select_between))

### Extra NOT BETWEEN

앞의 예제 범위를 벗어난 제품을 표시하려면 `NOT BETWEEN`

```sql
SELECT * FORM Products
WHERE Price NOT BETWEEN 10 AND 20;
```

> 결과 확인은 여기서 : W3schools([SQL Tryit Editor v1.6](https://www.w3schools.com/sql/trysql.asp?filename=trysql_select_not_between))

### Extra BETWEEN with IN

다음의 SQL 문은 가격이 10과 20 사이인 모든 제품을 출력한다. CategoryID가 1, 2 또는 3 인 제품을 표시하지 않는다.

```sql
SELECT * FROM Products
WHERE (Price BETWEEN 10 AND 20)
AND NOT CategoryID IN (1,2,3);
```

> 결과 확인은 여기서 : W3schools([SQL Tryit Editor v1.6](https://www.w3schools.com/sql/trysql.asp?filename=trysql_select_between_in))
