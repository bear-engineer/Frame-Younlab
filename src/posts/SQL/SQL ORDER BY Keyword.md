---
title: "SQL ORDER BY(번역)"
date: 2018-06-16
description: SQL ORDER BY W3schools
tags: ["sql", "translation"]
---

> 본 문서는 W3schools.com 의 SQL Tutorial 에서 발췌하여 자체적, 주관적인 해석을 담아 작성하였습니다.

## The SQL ORDER BY Keyword

Order by 키워드는 결과 집합을 오름차순 또는 내림차순으로 정렬하는 데 사용된다.

- ORDER BY 키워드는 기본적으로 레코드를 오름차순으로 정렬한다.
- DESC 키워드를 사용하면 내림차순으로 변경 할 수 있다.

## ORDER BY 구문

```sql
	SELECT column1, column2, ...
	FROM table_name
	ORDER BY column1, column2, ... ASC|DESC;
```

### Extra ORDER BY

다음의 SQL 문은 “고객” 테이블의 모든 고객을 “국가”순으로 정렬한다.

```sql
	SELECT * FROM Customers
	ORDER BY Country;
```

> 결과 확인은 여기서 : W3schools([SQL Tryit Editor v1.6](https://www.w3schools.com/sql/trysql.asp?filename=trysql_select_orderby))

### Extra ORDER BY DESC

다음의 SQL 문은 “고객” 테이블의 모든 고객을 “국가”의 격순으로 정렬한다.

```sql
	SELECT * FROM Customers
	ORDER BY Country DESC;
```

> 결과 확인은 여기서 : W3schools([SQL Tryit Editor v1.6](https://www.w3schools.com/sql/trysql.asp?filename=trysql_select_orderby_desc))

### Extra ORDER BY Several Columns

다음의 SQL 문은 “Customers” 테이블의 모든 고객을 “Country” 및 “CoustomerName” 열 순으로 정렬한다.

```sql
	SELECT * FROM Customers
	ORDER BY Country, CustomersName;
```

> 결과 확인은 여기서 : W3schools([SQL Tryit Editor v1.6](https://www.w3schools.com/sql/trysql.asp?filename=trysql_select_orderby2))

### Extra ORDER BY Several Columns 02

다음의 SQL 문은 “Customers” 테이블의 모든 고객을 “Country” 로 오름차순으로 정렬하고 “CustomerName”열로 내림차순으로 정렬한다.

```sql
	SELECT * FROM Customers
	ORDER BY Country ASC, CustomerName DESC;
```

> 결과 확인은 여기서 : W3schools([SQL Tryit Editor v1.6](https://www.w3schools.com/sql/trysql.asp?filename=trysql_select_orderby3))
