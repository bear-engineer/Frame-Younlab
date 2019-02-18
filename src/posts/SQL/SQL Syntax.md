---
title: "SQL Syntax(번역)"
date: 2018-06-15
description: SQL Syntax W3schools
tags: ["sql", "translation"]
---

> 본 문서는 W3schools.com 의 SQL Tutorial 에서 발췌하여 자체적, 주관적인 해석을 담아 작성하였습니다.

## Database Tables

데이터베이스는 대개 하나 이상의 테이블을 포함한다.
각 테이블은 이름(ex : ‘고객’ 또는 ‘주문’) 으로 식별된다. 테이블은 데이터가 있는 레코드 `row` 를 포함한다.

아래의 테이블은 ‘고객’ 표에서 선택한 항목이다.

<table>
  <tr>
    <th>CustomerID</th>
    <th>CustomerName</th>
    <th>ContactName</th>
    <th>Address</th>
    <th>City</th>
    <th>PostalCode</th>
    <th>Country</th>
  </tr>
  <tr>
    <td>1<br><br></td>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Obere Str. 57</td>
    <td>Berlin</td>
    <td>12209</td>
    <td>Germany</td>
  </tr>
  <tr>
    <td>2</td>
    <td>Ana Trujillo Emparedados y helados</td>
    <td>Ana Trujillo</td>
    <td>Avda. de la Constitución 2222</td>
    <td>México D.F.</td>
    <td>05021</td>
    <td>Mexico</td>
  </tr>
  <tr>
    <td>3</td>
    <td>Antonio Moreno Taquería</td>
    <td>Antonio Moreno</td>
    <td>Mataderos 2312</td>
    <td>México D.F.</td>
    <td>05023</td>
    <td>Mexico</td>
  </tr>
  <tr>
    <td>4<br><br></td>
    <td>Around the Horn</td>
    <td>Thomas Hardy</td>
    <td>120 Hanover Sq.</td>
    <td>London</td>
    <td>WA1 1DP</td>
    <td>UK</td>
  </tr>
  <tr>
    <td>5</td>
    <td>Berglunds snabbköp</td>
    <td>Christina Berglund</td>
    <td>Berguvsvägen 8</td>
    <td>Luleå</td>
    <td>S-958 22</td>
    <td>Sweden</td>
  </tr>
</table>

위의 표에는 다섯 개의 레코드 (각 고객 당 하나)와 일곱 개의 열 (CustomerID, CustomerName, ContactName, Address, City, PostalCode 및 Country)이 들어 있다.

## SQL문

데이터베이스에서 수행하야하는 대부분의 조치는 SQL문으로 수행된다.

다음 SQL 문은 “Customers” 테이블의 모든 레코드를 선택한다.

```sql
	SELECT * FROM Customers;
```

> 결과 확인은 여기서 : W3schools([SQL Tryit Editor v1.6](https://www.w3schools.com/sql/trysql.asp?filename=trysql_select_all))

### 잊지 말아야할 것

> SQL 키워드는 대소문자를 구분하지 않는다. `select` 는 `SELECT` 와 같다.

### SQL 문 다음에 오는 세미콜론 `;`

일부 데이터베이스 시스템에서는 각 SQL 문의 끝에 세미콜론이 필요하다.

세미콜론 `;` 은 데이터베이스 시스템에서 각 SQL 문을 분리하여 서버에 대한 동일한 호출에서 둘 이상의 SQL 문을 실행할 수 있도록 하는 표준 방법이다.

### 가장 중요한 SQL 명령 중 일부

- **_SELECT_** - 데이터베이스에서 데이터를 추출한다.
- **_UPDATE_**- 데이터베이스의 데이터를 업데이트 한다.
- **_DELETE_**- 데이터베이스에서 데이터를 삭제한다.
- **_INSERT INTO_**- 새로운 데이터를 데이터베이스에 삽입한다.
- **_CREATE DATABASE_**- 새 데이터베이스를 만든다.
- **_ALTER DATABASE_**- 데이터베이스를 수정한다.
- **_CREATE TABLE_**- 새 테이블을 만든다.
- **_ALTER TABLE_**- 테이블을 수정한다.
- **_DROP TABLE_**- 테이블을 삭제한다.
- **_CREATE INDEX_**- 색인(검색)을 작성한다.
- **_DROP INDEX_**- 색인(검색)을 삭제한다.
