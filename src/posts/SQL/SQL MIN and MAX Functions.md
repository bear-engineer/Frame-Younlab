---
title: "SQL MIN and MAX Functions(번역)"
date: 2018-06-17
description: SQL MIN and MAX Functions W3schools
tags: ["sql", "translation"]
---

> 본 문서는 W3schools.com 의 SQL Tutorial 에서 발췌하여 자체적, 주관적인 해석을 담아 작성하였습니다.

## The SQL MIN() and MAX() Functions

- MIN() 함수는 선택된 열의 가장 작은 값을 출력한다.
- MAX() 함수는 선택된 열의 가장 큰 값을 출력한다.

## MIN() 구문

```sql
SELECT MIN(column_name)
FROM table_name
WHERE condition;
```

## MAX() 구문

```sql
SELECT MAX(column_name)
FROM table_name
WHERE condition;
```

### Extra MIN()

다음의 SQL 문은 가장 저렴한 제품의 가격을 찾는다.

```sql
SELECT MIN(Price) AS SamllestPrice
FROM Products;
```

> 결과 확인은 여기서 : W3schools([SQL Tryit Editor v1.6](https://www.w3schools.com/sql/trysql.asp?filename=trysql_select_min))

> 개인해석  
> 가장 작은 가격을 선택하고 `SmallestPrice` 에 할당하여 출력한다.  
> 실행할 테이블은 `Products` 다.

### Extra MAX()

다음의 SQL 문은 가장 비싼 제품의 가격을 찾습니다.

```sql
SELECT MAX(Price) AS LargestPrice
FROM Products;
```

> 결과 확인은 여기서 : W3schools([SQL Tryit Editor v1.6](https://www.w3schools.com/sql/trysql.asp?filename=trysql_select_max))
