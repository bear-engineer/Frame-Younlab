---
title: "SQL INSERT INTO(번역)"
date: 2018-06-16
description: SQL INSERT INTO W3schools
tags: ["sql", "translation"]
---

> 본 문서는 W3schools.com 의 SQL Tutorial 에서 발췌하여 자체적, 주관적인 해석을 담아 작성하였습니다.

## The SQL INSERT INTO Statement

INSERT INTO 문은 테이블에 새 레코드를 삽입하는데 사용된다.

## INSERT INTO 구문

두 가지 방법으로 INSERT INTO 문을 작성할 수 있다.

첫 번째 방법은 삽입 할 열 이름과 값을 모두 지정하는 것이다.

```sql
INSERT INTO table_name (column1, column2, column3, ...)
VALUES (value1, value2, value3, ...);
```

표의 모든 열에 값을 추가하는 경우 SQL 조회에소 열 이름을 지정할 필요가 없다. 그러나 값의 순서가 표의 열과 동일한 순서인지를 확인하라, INSERT INTO 구문은 다음과 같다.

```sql
INSERT INTO table_name
VALUES (value1, value2, value3, ...);
```

### Extra INSERT INTO

다음의 SQL 문은 “Customers” 테이블에 새 레코드를 삽입한다.

```sql
INSERT INTO Customers (CustomerName, ContactName, Address, City, PostalCode, Country)
VALUES('Cardianl', 'Tom B. Erichsen', 'Skagen 21', 'Stavanger', '4006', 'Norway');
```

> 결과 확인은 여기서 : W3schools([SQL Tryit Editor v1.6](https://www.w3schools.com/sql/trysql.asp?filename=trysql_insert_colname))

각각 의 순서에 맞는 구문에 데이터가 들어간다. 위의 링크에서 실행해 보고 `SELECT * FROM Customers` 를 입력해 데이터가 추가 되었는지 확인해 보자

> CustomerID 필드에 숫자를 삽입하지 않아도 자동으로 증가되는 필드라 새로운 레코드를 만들 때 자동 삽입되도록 되어있다.

### Extra Insert Data Only in Specified Columns

특정 열에만 데이터를 삽입 할 수 있도록 한다.

다음의 SQL 문은 새 레코드를 삽입하지만 “CustomerName”, “City” 및 “Country” 열에만 데이터를 삽입한다. CustomerID는 자동으로 업데이트 된다.

```sql
INSERT INTO Customers (CustomerName, City, Country)
VALUES ('Cardinal', 'Stavanger', 'Norway');
```

> 결과 확인은 여기서 : W3schools([SQL Tryit Editor v1.6](https://www.w3schools.com/sql/trysql.asp?filename=trysql_insert_cols))

삽입하지 않은 데이터는 `null` 값으로 출력된다.
