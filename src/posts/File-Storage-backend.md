---
title: File storage backend
date: 2019-02-12
description: python 에 적용되는 알고리즘에 대하여
tags: ["django", "python"]
---

## File storage backend

- Django File
  1. FileField, ImageField를 통해
  2. 자신에게 정의된 Storage backend를 이용해서
  3. 파일을 기록/삭제/읽음 등등의 작업을 함

* FileSystemStorage

  > Django가 File을 다룰 때, 해당 File이 FileSystem의 File일 때의 인터페이스 -> Django File <--> Python File

* DropboxStorage (Custom)

  > Django가 File을 다룰 때, 해당 File이 Dropbox내의 File일 때의 인터페이스

* S3Storage
  Django.... S3의 File일 때

### 어떻게 Django에서 파일을 다루면 곧바로 S3에 적용이 되는가?

1. Django에서 CustomBackend(S3Backend)를 지정, 이 Backend는 S3와의 통신을 중계함
2. S3Backend는 S3가 제공하는 API를 사용해서 Django의 File이 제공하는 메서드들을 자동으로 request/response처리 `open()`, `write()`, `read()` 와 같은 메서드들을 지원

### read('파일명') 을 실행할 경우

- Custom backend에서 S3에 연결하기 위한 AWS credentials를 검사
- S3에 read할 권한이 있다면, boto3를 사용해서 session/client세팅
- boto3 인스턴스를 사용해서 S3가 제공하는 API의 get_file과 같은 기능 실행
- 실행 결과 데이터를 다시 Django가 사용가능한 File object형태로 파싱
- Django는 단순히 파일을 불러온 것 처럼 편하게 사용

### Django - django-storages - (boto3 - AWS)

- Python File (FileSystem or Memory상의 File object)
- Django File
  파일에 액세스 할 수 있도록 도와주는 프록시 객체
  (실제 File에 접근할 수 있도록 도와주는)

### DEFAULT_FILE_STORAGE

일반적인 파일 작업에 쓰이는 Storage backend -> 유저가 업로드한 파일은 S3에 저장

### STATICFILES_STORAGE(FileSystemStorage상속)

collectstatic에 쓰이는 Storage backend -> 프로젝트에 포함된 정적파일은 해당 서버에서 바로 제공
