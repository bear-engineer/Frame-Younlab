---
title: "SQL COUNT, AVG and SUM(번역)"
date: 2018-06-17
description: SQL COUNT, AVG and SUM W3schools
tags: ["sql", "translation"]
---

> 본 문서는 W3schools.com 의 SQL Tutorial 에서 발췌하여 자체적, 주관적인 해석을 담아 작성하였습니다.

## The SQL COUNT(), AVG() and SUM() Functions

- COUNT() 함수는 지정된 기준과 일치하는 행 수를 반환한다.
- AVG() 함수는 숫자 열의 평균값을 반환한다.
- SUM() 함수는 숫자 열의 총 합계를 반환한다.

## COUNT() 구문

```sql
SELECT COUNT(column_name)
FROM table_name
WHERE condition;
```

## AVG() 구문

```sql
SELECT AVG(column_name)
FROM table_name
WHERE condition;
```

## SUM() 구문

```sql
SELECT SUM(column_name)
FROM table_name
WHERE condition;
```

### Extra COUNT()

다음의 SQL 문은 제품의 수를 찾는다.

```sql
SELECT COUNT(ProductID)
FROM Products;
```

> 결과 확인은 여기서 : W3schools([SQL Tryit Editor v1.6](https://www.w3schools.com/sql/trysql.asp?filename=trysql_select_count))

### Extra AVG()

다음의 SQL 문은 모든 제품의 평균 가격을 찾는다.

```sql
SELECT AVG(Price)
FROM Products;
```

> 결과 확인은 여기서 : W3schools([SQL Tryit Editor v1.6](https://www.w3schools.com/sql/trysql.asp?filename=trysql_select_avg))

### Extra SUM()

다음의 SQL 문은 OrderDetails 테이블의 “Quantity” 필드의 합계를 찾는다.

```sql
SELECT SUM(Quantity)
FROM OrderDetails;
```

> 결과 확인은 여기서 : W3schools([SQL Tryit Editor v1.6](https://www.w3schools.com/sql/trysql.asp?filename=trysql_select_sum))
