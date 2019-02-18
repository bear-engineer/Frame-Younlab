---
title: "SQL TOP, LIMIT or ROWNUM(번역)"
date: 2018-06-17
description: SQL TOP, LIMIT or ROWNUM W3schools
tags: ["sql", "translation"]
---

> 본 문서는 W3schools.com 의 SQL Tutorial 에서 발췌하여 자체적, 주관적인 해석을 담아 작성하였습니다.

## The SQL SELECT TOP Clause

SELECT TOP 문은 리턴 할 레코드 수를 지정하는데 사용된다.

SELECT TOP 문은 수천개의 레코드가 있는 큰 테이블에서 유용한데, 많은 수의 레코드를 반환하면 성능에 영향을 줄 수도 있기 때문이다.

> 모든 데이터베이스 시스템이 SELECT TOP 문을 지원하진 않는다. MySQL은 제한된 수의 레코드를 선택하기위해 LIMIT 문을 지원하고 Oracle은 ROWNUM 문을 사용한다.

## SQL Server / MS Access 문

```sql
	SELECT TOP number|percent column_name(s)
	FROM table_name
	WHERE condition;
```

## MySQL 문

```sql
	SELECT column_name(s)
	FROM table_name
	WHERE condition
	LIMIT number;
```

## Oracle 문

```sql
	SELECT column_name(s)
	FROM table_name
	WHERE ROWNUM <= number;
```

### Extra SQL TOP, LIMIT, ROWNUM

다음의 SQL 문은 “Customers” 테이블에서 처음 세 개의 레코드를 출력한다.

```sql
	SELECT TOP 3 * FROM Customers;
```

> 결과 확인은 여기서 : W3schools([SQL Tryit Editor v1.6](https://www.w3schools.com/sql/trysql.asp?filename=trysql_select_top&ss=-1))

다음의 SQL 문은 LIMIT 문을 사용하는 동일한 예제를 보여준다.

```sql
	SELECT * FROM Customers
	LIMIT 3;
```

> 결과 확인은 여기서 : W3schools([MySQL Tryit Editor v1.0](https://www.w3schools.com/sql/trymysql.asp?filename=trysql_select_limit))

다음의 SQL 문은 ROWNUM 을 사용하는 동일한 예제를 보여준다.

```sql
	SELECT * FROM Customers
	WHERE ROWNUM <= 3;
```

### Extra SQL TOP PERCENT

다음의 SQL 문은 “Customers” 테이블에서 레코드의 50%만 출력한다.

```sql
	SELECT TOP 50 PERCENT * FROM Customers;
```

> 결과 확인은 여기서 : W3schools([SQL Tryit Editor v1.6](https://www.w3schools.com/sql/trysql.asp?filename=trysql_select_top_percent&ss=-1))

### 특정 값인 레코드를 숫자를 제한하여 줄력하기

다음 SQL 문은 “Customers” 테이블에서 국가가 “Germany” 인 처음 세개의 레코드를 출력한다.

```sql
	SELECT TOP 3 * FROM Customers
	WHERE Country = 'Germany';
```

> 결과 확인은 여기서 : W3schools([SQL Tryit Editor v1.6](https://www.w3schools.com/sql/trysql.asp?filename=trysql_select_top_where&ss=-1))

다음의 SQL 문은 LIMIT 문을 사용하는 동일한 예제다.

```sql
	SELECT * FROM Customers
	WHERE Country = 'Germany'
	LIMIT 3;
```

> 결과 확인은 여기서 : W3schools([MySQL Tryit Editor v1.0](https://www.w3schools.com/sql/trymysql.asp?filename=trysql_select_limit_where))

다음의 SQL 문은 ROWNUM 문을 사용하는 동일한 예제다.

```sql
	SELECT * FROM Customers
	WHERE Country='Germany' AND ROWNUM <= 3;
```
