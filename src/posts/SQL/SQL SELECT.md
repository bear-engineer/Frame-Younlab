---
title: "SQL SELECT(번역)"
date: 2018-06-15
description: SQL Select W3schools
tags: ["sql", "translation"]
---

> 본 문서는 W3schools.com 의 SQL Tutorial 에서 발췌하여 자체적, 주관적인 해석을 담아 작성하였습니다.

## SQL SELECT 문

SELECT 문은 데이터베이스에서 데이터를 선택하는 데 사용된다.
Return 된 데이터는 result-set 이라고 하는 테이블에 저장된다.

### SELECT 구문

```sql
	SELECT column1, column2, ...
	FROM table_name;
```

여기에서 column1, column2,... 는 데이터를 선택할 테이블 필드의 이름이다. 테이블에서 사용 가능한 모든 필드를 선택하려면 다음 구문을 사용하자

```sql
	SELECT * FROM table_name;
```

## SELECT \* 예제

다음 SQL 문은 `Customers` 테이블의 모든 열을 선택한다.

```sql
	SELECT * FROM Customers;
```

> 결과 확인은 여기서 : W3schools([SQL Tryit Editor v1.6](https://www.w3schools.com/sql/trysql.asp?filename=trysql_select_all))
