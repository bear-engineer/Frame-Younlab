---
title: "Postgresql commend line 설치하고 제어하기 for mac"
date: 2018-11-15
description: psql 설치 및 Setting
tags: ["sql", "psql", "cmd"]
---

## install brew

```zsh
brew install postgresql
```

## restart auto reboot psql commend

```zsh
pg_ctl -D /usr/local/var/postgres start && brew services start postgresql
```

## version info

```zsh
postgres -V
```

<br>
## psql commend

### psql run

```zsh
psql postgres
```

commend line psql 실행문

### psql users info

```zsh
postgres-# \du
```

모든 사용자 목록을 가져오는 commend

### root password setting

```zsh
postgres=# \password rootusername
```

### create ROLE

```zsh
postgres=# CREATE ROLE username WITH LOGIN PASSWORD 'password';
```

데이터베이스 사용자 생성, 막 생성한 계정에는 아무런 권한이 없으니 이후 권한을 추가해주어야 한다.

### alter ROLE

```zsh
postgres=# ALTER ROLE username CREATEDB;
```

DB 생성 권한 추가

```zsh
postgres=> ALTER ROLE username SET CLIENT_ENCODING TO 'utf-8';
```

인코딩 설정

```zsh
postgres=> ALTER ROLE username SET TIMEZONE TO 'Asia/Seoul';
```

타임존 설정

```zsh
postgres=> GRANT ALL PRIVILEGES ON DATABASE dbname TO username;
```

DB 권한 부여

### create DATABASE

```zsh
postgres=# CREATE DATABASE databasename;
```

### db RENAME

```zsh
postgres=> ALTER DATABASE dbname RENAME TO rename_dbname;

postgres=> \q
```

데이터베이스 이름변경

### 축약 명령어

```zsh
createuser username --createdb
```

유저를 추가하고 DB 생성 권한을 준다.

```zsh
psql dbname -U username
```

해당 유저로 psql 접속 명령어다.

### list

```zsh
postgres=> \list
```

postgres 의 모든 데이터베이스를 나열한다.

### connect

```zsh
postgres=> \connect dbname
```

특정 DB에 연결한다.

### dt

```zsh
postgres=> \dt
```

현재 연결된 DB의 테이블을 나열한다.
