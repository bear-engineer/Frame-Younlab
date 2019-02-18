---
title: "SQL SELECT Distinct(번역)"
date: 2018-06-16
description: SQL SELECT Distinct W3schools
tags: ["sql", "translation"]
---

> 본 문서는 W3schools.com 의 SQL Tutorial 에서 발췌하여 자체적, 주관적인 해석을 담아 작성하였습니다.

## SQL SELECT Distinct 문

SELECT Distinct 는 고유한 값만 리턴한다.

테이블 내에서 열은 종종 많은 중복값을 포함하는데, 때로는 서로 다른 값만 나열하려고 한다.

### SELECT Distinct 구문

```sql
SELECT DISTINCT column1, column2, ...
FROM table_name;
```

### SELECT Extra

다음의 SQL 문은 Customers 테이블의 “Country” 열에 있는 모든(중복 포함) 값을 선택한다.

```sql
SELECT Country FROM Customers;
```

> 결과 확인은 여기서 : W3schools([SQL Tryit Editor v1.6](https://www.w3schools.com/sql/trysql.asp?filename=trysql_select_no_distinct))

### SELECT DISTINCT Extra

> 이제 Distinct 키워드를 위의 SELECT 문과 함꼐 사용하여 결과를 알아보자.

다음의 SQL 문은 Customers 테이블의 “Country” 열에서 중복되지 않게 값을 출력한다.

```sql
SELECT DISTINCT Country FROM Customers;
```

> 결과 확인은 여기서 : W3schools([SQL Tryit Editor v1.6](https://www.w3schools.com/sql/trysql.asp?filename=trysql_select_distinct))

다음의 SQL 문은 서로 다른 고객 국가의 수를 나열한다.(중복되지 않은 국가의 숫자)

```sql
SELECT COUNT(DISTINCT Country) FROM Customers;
```

> 결과 확인은 여기서 : W3schools([SQL Tryit Editor v1.6](https://www.w3schools.com/sql/trysql.asp?filename=trysql_select_distinct2))
