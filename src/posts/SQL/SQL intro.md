---
title: "SQL Intro(번역)"
date: 2018-06-15
description: SQL Intro W3schools
tags: ["sql", "translation"]
---

> 본 문서는 W3schools.com 의 SQL Tutorial 에서 발췌하여 자체적, 주관적인 해석을 담아 작성하였습니다.

## SQL 이란?

SQL은 데이터베이스의 데이터를 저장, 조작 및 검색하기위한 표준 언어다.

- SQL은 구조화된 \*쿼리 언어
- SQL을 사용하면 데이터베이스에 액세스하고 조작이 가능
- SQL은 1986년애 미국 표준 협회(ANSI)의 표준이 되었고 1987년에 국제 표준화 기구(ISO)의 표준이 됨

> \*쿼리언어란?  
> 데이터를 조회하기 위한 명령어  
> 정보 시스템에 데이터를 질의하는 일  
> 조건에 맞는 데이터를 추출하거나 조작하는 명령어

## SQL이 할 수 있는 일

- SQL은 데이터베이스에 대해 쿼리를 실행할 수 있습니다.
- SQL은 데이터베이스에서 데이터를 검색 할 수 있습니다.
- SQL은 데이터베이스에 레코드를 삽입 할 수 있습니다.
- SQL은 데이터베이스의 레코드를 업데이트 할 수 있습니다.
- SQL은 데이터베이스에서 레코드를 삭제할 수 있습니다.
- SQL은 새로운 데이터베이스를 생성 할 수 있습니다.
- SQL은 데이터베이스에 새로운 테이블을 생성 할 수 있습니다.
- SQL은 데이터베이스에 저장 과정의 일련을 실행하여 생성 할 수 있습니다.
- SQL은 데이터베이스에 view 를 생성 할 수 있습니다.
- SQL은 테이블과 실행 절차 및 view 에 대한 사용 권한을 설정할 수 있습니다.

## SQL은 표준이지만?

SQL은 ANSI / ISO 표준이지만 각각의 다른버전의 SQL 언어가 있다.
그러나 ANSI 표준을 준수하기 위해 모두 SELECT, UPDATE, DELETE, INSERT, WHERE 와 같은 주요 명령을 비슷한 방식으로 지원한다.

> 대부분의 SQL 데이터베이스 프로그램은 SQL 표준 이외에도 자체적인 확장 기능을 가지고있다.

## 웹 사이트에서 SQL 사용

데이터베이스의 데이터를 보여주는 웹 사이트를 구축 하려면 다음이 필요하다.

- RDBMS 데이터베이스 프로그램 `MS Access, SQL Server, MySQL`
- PHP 또는 ASP와 같은 서버 측 스크립팅 언어를 사용하려면
- SQL을 사용하여 원하는 데이터를 얻으려면
- HTML/CSS 를 사용하여 페이지의 스타일을 지정하려면

## RDBMS

- _RDBMS_ 는 관계형 데이터베이스 관리 시스템의 약자이다.
- *RDBMS*는 SQL과 MS Server, IBM DB2, Oracle, MySQL 및 Microsoft Access와 같은 모든 최신 데이터베이스 시스템의 기초이다.
- *RDBMS*의 데이터는 테이블 이라는 데이터베이스 객체에 저장된다. 테이블은 관련 데이터 항목의 모음이며 열과 행으로 구성된다.

### Extra `Customers` 테이블을 확인해보자

```sql
	SELECT * FROM Customers;
```

> 결과 확인은 여기서 : W3schools([SQL Tryit Editor v1.6](https://www.w3schools.com/sql/trysql.asp?filename=trysql_select_all))

모든 테이블은 필드라는 더 작은 엔티티로 나뉜다.

Customers 테이블 필드는 CustomerID, CustomerName, ContactName, Address, City, PostalCode 및 Country 로 구성된다.

필드는 테이블의 모든 레코드에 대한 특정정보를 유지 관리 하도록 설계된 테이블의 열`row`
열 `row` 이라고도 부르는 레코드는 테이블에 있는 개별 항목이다. 예를 들어, 위의 Customers테이블에는 91개의 레코드가 있는데, 레코드는 테이블의 가로 엔티티 이다.

컬럼 `Column` 은 테이블의 특정 필드와 연관된 모든 정보를 포함하는 테이블의 수직 엔티티 이다.
