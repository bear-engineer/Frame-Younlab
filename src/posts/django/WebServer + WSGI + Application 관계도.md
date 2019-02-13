---
title: WebServer + WSGI + Application 관계도
date: 2019-02-13
description: "HTTP요청수신/응답송신 (프로토콜: HTTP) -> 동적인 처리가 필요하면 Django로 넘겨야 하므로 WSGI사용"
tags: ["django"]
---

## WebServer + WSGI + Application 관계도

### WebServer (Nginx)

- HTTP요청수신/응답송신 (프로토콜: HTTP) -> 동적인 처리가 필요하면 Django로 넘겨야 하므로 WSGI사용

### WSGI (uWSGI)

- Python application과 WebServer간의 인터페이스 (프로토콜: Unix Socket)

### Python application (Django)

- 특정 HTTP요청에 대한 동적응답 생성
