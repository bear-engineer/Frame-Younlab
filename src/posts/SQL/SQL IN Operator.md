---
title: "SQL IN Operator(번역)"
date: 2018-06-17
description: SQL IN Operator W3schools
tags: ["sql", "translation"]
---

> 본 문서는 W3schools.com 의 SQL Tutorial 에서 발췌하여 자체적, 주관적인 해석을 담아 작성하였습니다.

## The SQL IN Operator

- IN 연산자를 사용하여 WHERE 문의 여러 값을 지정 할 수 있다.
- IN 연산자는 여러 OR 조건의 줄임말이다.

## IN 구문

```sql
SELECT column_name(s)
FROM table_name
WHERE column_name IN (value1, value2, value3, ...)
```

Or

```sql
SELECT column_name(s)
FROM table_name
WHERE column_name IN (SELECT STATEMNT);
```

### Extra IN

다음의 SQL 문은 “Germany”, “France” 및 “UK” 에 있는 모든 고객을 출력한다.

```sql
SELECT * FROM Customers
WHERE Country IN ('Germany', 'France', 'UK');
```

> 결과 확인은 여기서 : W3schools([SQL Tryit Editor v1.6](https://www.w3schools.com/sql/trysql.asp?filename=trysql_select_in))

다음의 SQL 문은 “Germany”, “France” 또는 “UK” 에 있지 않은 모든 고객을 출력한다.

```sql
SELECT * FROM Customers
WHERE Country NOT IN ('Germany', 'France', 'UK');
```

> 결과 확인은 여기서 : W3schools([SQL Tryit Editor v1.6](https://www.w3schools.com/sql/trysql.asp?filename=trysql_select_in_not))

다음의 SQL 문은 공급 업체와 동일한 국가의 모든 고객을 출력한다.

```sql
SELECT * FROM Customers
WHERE Country IN (SELECT Country FROM Suppliers);
```

> 결과 확인은 여기서 : W3schools([SQL Tryit Editor v1.6](https://www.w3schools.com/sql/trysql.asp?filename=trysql_select_in2))

> 개인해석  
> Customers 테이블에서 Country 가 Suppliers 테이블의 Country 랑 같은 값만 출력
