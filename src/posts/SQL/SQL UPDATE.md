---
title: "SQL UPDATE(번역)"
date: 2018-06-16
description: SQL UPDATE W3schools
tags: ["sql", "translation"]
---

> 본 문서는 W3schools.com 의 SQL Tutorial 에서 발췌하여 자체적, 주관적인 해석을 담아 작성하였습니다.

## The SQL UPDATE

UPDATE 문은 테이블의 기존에 있던 레코드를 수정하는데 사용된다.

## UPDATE 구문

```sql
	UPDATE table_name
	SET column1 = value1, column2 = value2, ...
	WHERE condition;
```

> 테이블에서 레코드를 업데이트 할 때 주의해야 할 점은 UPDATE 문에서 WHERE 문을 잘 확인해야 한다는 것이다. WHERE 문은 수정해야하는 레코드를 지정하는데 WHERE 문을 생략하면 모든 레코드가 수정되어버린다. 타겟을 찾지 못하여 발생하는 일

## Table Update

다음의 SQL 문은 첫 번째 고객(CustomersID = 1) 을 새 담당자 및 새 도시로 업데이트 한다.

```sql
	UPDATE Customers
	SET ContactName = 'Alfred Schmidt', City = 'Frankfurt'
	WHERE CustomersID = 1;
```

> 결과 확인은 여기서 : W3schools([SQL Tryit Editor v1.6](https://www.w3schools.com/sql/trysql.asp?filename=trysql_update_2))

### 여러 레코드 Update

업데이트 될 레코드의 수를 결정하는 것은 WHERE문이다.
Id 처럼 고유한 번호는 하나밖에 없어서 하나만 수정되지만 country 같은 경우 여러 레이블에 같은 값이 존재 할 수도 있다.

다음의 SQL 문은 country 가 “Mexico” 인 모든 레코드에 연락처 이름을 “Juan”으로 업데이트 한다.

```sql
	UPDATE Customers
	SET ContactName='Juan'
	WHERE Country = 'Mexico'
```

> 결과 확인은 여기서 : W3schools([SQL Tryit Editor v1.6](https://www.w3schools.com/sql/trysql.asp?filename=trysql_update_3))
