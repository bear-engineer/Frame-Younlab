---
title: "SQL SELECT Where(번역)"
date: 2018-06-16
description: SQL SELECT Where W3schools
tags: ["sql", "translation"]
---

> 본 문서는 W3schools.com 의 SQL Tutorial 에서 발췌하여 자체적, 주관적인 해석을 담아 작성하였습니다.

## SQL Where 문

- Where 문은 레코드를 필터링 하는데 사용된다.
- Where 문은 지정된 조건을 충족하는 레코드만을 추출하는데 사용된다.

## Where 구문

```sql
SELECT column1, column2, ...
FROM table_name
WHERE condition;
```

> 참고로 Where문은 SELECT 문에서만 사용되는 것이 아닌 UPDATE, DELETE 문에서도 사용된다.

### Where Extra

다음의 SQL 문은 “Costomers” 테이블에서 “Mexico” 국가의 모든 고객을 선택한다.

```sql
SELECT * FROM Customers
WHERE Country='Mexico';
```

내가 원하는 필터링 네임을 넣고 해당하는 테이블에서 골라서 빼오는걸로 이해하면 될듯 하다.

> 결과 확인은 여기서 : W3schools([SQL Tryit Editor v1.6](https://www.w3schools.com/sql/trysql.asp?filename=trysql_select_where))

대부분의 언어는 텍스트(String) 값은 따옴표`""`, 또는 `''` 로 묶어야 출력된다.
SQL언어도 마찬가지로 텍스트(String) 값은 묶어주어야 한다. 숫자는 그대로 작성하여도 괜찮다.

### TEXT & INT

```sql
SELECT * FROM Customers
WHERE CustomerID=1;
```

CustomerID 값이 1인 행을 출력한다.

> 결과 확인은 여기서 : W3schools([SQL Tryit Editor v1.6](https://www.w3schools.com/sql/trysql.asp?filename=trysql_select_where_number))

## Where 문에 있는 연산자

<table class="w3-table-all notranslate">
  <tr>
    <th style="width:20%">Operator</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>=</td>
    <td>Equal</td>
  </tr>
  <tr>
    <td>&lt;&gt;</td>
    <td>Not equal. <b>Note:</b> In some versions of SQL this operator may be written as !=</td>
  </tr>
  <tr>
    <td>&gt;</td>
    <td>Greater than</td>
  </tr>
  <tr>
    <td>&lt;</td>
    <td>Less than</td>
  </tr>
  <tr>
    <td>&gt;=</td>
    <td>Greater than or equal</td>
  </tr>
  <tr>
    <td>&lt;=</td>
    <td>Less than or equal</td>
  </tr>
  <tr>
    <td>BETWEEN</td>
    <td>Between an inclusive range</td>
  </tr>
  <tr>
    <td>LIKE</td>
    <td>Search for a pattern</td>
  </tr>
  <tr>
    <td>IN</td>
    <td>To specify multiple possible values for a column</td>
  </tr>
</table>
