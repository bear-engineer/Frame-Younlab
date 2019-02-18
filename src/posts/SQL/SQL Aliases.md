---
title: "SQL Aliases(번역)"
date: 2018-06-17
description: SQL UPDATE W3schools
tags: ["sql", "translation"]
---

> 본 문서는 W3schools.com 의 SQL Tutorial 에서 발췌하여 자체적, 주관적인 해석을 담아 작성하였습니다.

## SQL Aliases

- SQL 의 Aliases 는 테이블 또는 테이블의 열에 임시의 이름을 지정하는데 사용된다.
- Aliases 는 열의 이름을 읽기 쉽게 하기 위해 자주 사용된다.
- Aliases 는 조회 기간동안만 존재한다.

## Aliases 문

```sql
SELECT column_name AS alias_name
FROM table_name;
```

## Aliases 테이블 문

```sql
SELECT column_name(s)
FROM table_name AS alias_name;
```

### Extra Aliases

다음의 SQL 문은 CustomerID 열과 CustomerName 열의 두가지 별칭을 만든다.

```sql
SELECT CustomerID AS ID, CustomerName AS Customer
FROM Customers;
```

> 결과 확인은 여기서 : W3schools([SQL Tryit Editor v1.6](https://www.w3schools.com/sql/trysql.asp?filename=trysql_select_alias_column0))

다음의 SQL 문은 CustomerName 열과 ContactName 열의 두 가지 별칭을 만든다.

> 별칭 이름에 공백이 포함되어 있으면 큰 타옴표 또는 대괄호가 필요하다.

```sql
SELECT CustomerName AS Customer, ContactName AS [Contact Person]
FROM Customers;
```

> 결과 확인은 여기서 : W3schools([SQL Tryit Editor v1.6](https://www.w3schools.com/sql/trysql.asp?filename=trysql_select_alias_column))

다음의 SQL 문은 네 개의 열(Address, PostalCode, City, Country)을 결합하는 “Address” 라는 별칭을 만든다.

```sql
SELECT CustomerName, Address + ', ' + PostalCode + ' ' + City + ', ' + Country As Address
FROM Customers;
```

> 결과 확인은 여기서 : W3schools([SQL Tryit Editor v1.6](https://www.w3schools.com/sql/trysql.asp?filename=trysql_select_alias_column2&ss=-1))

> 개인해석  
> Address, PostalCode, City, Country 의 값이 Address 라는 하나의 열에 결합되어 출력된다.

위의 SQL 문을 MySQL 에서 작동하게 하려면 다음을 사용하라

```sql
SELECT CustomerName, CONCAT(Address, ', ', PostalCode, ',', City, ', ', Country) AS Address
FROM Customers;
```

### Extra Aliases Table

다음의 SQL 문은 CustomerID = 4 (Around the Horn) 인 고객의 모든 주문을 선택한다. “Customers” 및 “Orders” 테이블을 사용하고 각각 “c” 및 “o” 테이블 별칭을 부여한다.

```sql
SELECT o.OrderID, o.OrderDate, c.CustomerName
FROM Customers AS c, Orders AS o
WHERE c.CustomerName = "Around the Horn" AND c.CustomerID = o.CustomerID;
```

> 결과 확인은 여기서 : W3schools([SQL Tryit Editor v1.6](https://www.w3schools.com/sql/trysql.asp?filename=trysql_select_alias_table))

다음의 SQL 문은 위와 동일하지만 별칭이 없다.

```sql
SELECT Orders.OrderID, Orders.OrderDate, Customers.CustomerName
FROM Customers, Orders
WHERE Customers.CustomerName="Around the Horn" AND Customers.CustomerID=Orders.CustomerID;
```

> 결과 확인은 여기서 : W3schools([SQL Tryit Editor v1.6](https://www.w3schools.com/sql/trysql.asp?filename=trysql_select_alias_no))

별칭은 다음과 같은 경우에 유용하다.

- 쿼리에 두 개 이상의 테이블이 관련되어 있다.
- 함수는 쿼리에서 사용된다.
- 열 이름이 크거나 매우 읽을 수 없다.
- 두 개 이상의 열이 결합되었다.
