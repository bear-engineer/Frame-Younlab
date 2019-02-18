---
title: "SQL DELETE(번역)"
date: 2018-06-16
description: SQL DELETE W3schools
tags: ["sql", "translation"]
---

> 본 문서는 W3schools.com 의 SQL Tutorial 에서 발췌하여 자체적, 주관적인 해석을 담아 작성하였습니다.

## The SQL DELETE

DELETE 문은 테이블의 기존 레코드를 삭제하는 데 사용된다.

## DELETE 구문

```sql
	DELETE FROM table_name
	WHERE condition;
```

> 테이블에서 레코드를 삭제할때 주의해야 할 점은 UPDATE 문과 같다. WHERE 문을 생략 할 경우 모든 레코드가 삭제된다. 축하한다!

### Extra DELETE

다음의 SQL 구문은 Customers 테이블에서 고객 “Alfreds Futterkiste" 를 삭제한다.

```sql
	DELETE FROM Customers
	WHERE CustomerName = 'Alfreds Futterkiste';
```

> 결과 확인은 여기서 : W3schools([SQL Tryit Editor v1.6](https://www.w3schools.com/sql/trysql.asp?filename=trysql_delete))

### 모든 레코드 삭제

테이블을 삭제하지 않고 테이블의 모든 행을 삭제할 수 있다. 이는 테이블 구조, 속성 및 인덱스가 손상되지 않는다는것을 의미한다.

```sql
	DELETE FROM table_name;
```

Or

```sql
	DELETE * FROM table_name;
```
