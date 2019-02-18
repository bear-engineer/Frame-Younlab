---
title: "Project Girls' frontline Simulator"
date: 2018-09-06
description: 소녀전선 시뮬레이터의 DB를 설계해보다.
tags: ["project"]
---

## Site Map

- 소녀전선 DB - 인형 정보 - 요정 정보 - 중장비 부대 정보 - 아이템 정보 - 가구 정보 - 제조 시간 - 레시피 정보 - 공략
- 계산기 - 제대 편성 - 버프 계산기 - DPS 계산기 - Signin or Save - 작전보고서 계산기
- 스토리 - 메인 스토리 - 서브 스토리
- 기술 - Bug Report - Change Log - Facebook Signin - Kakao Signin - User Forum - AdSense - Google Analytics

## DB Crawling Website

- [소녀전선 인벤](http://gf.inven.co.kr)
- [소녀전선 인형DB](https://www.girlsfrontlinedb.com)
- [소녀전선 시뮬레이터](http://gfl.zzzzz.kr/?lang=ko)
- [소녀전선 헝그리앱](https://www.hungryapp.co.kr/bbs/game_girlsfrontline_char.php)
- [소녀전선 36Base core](https://github.com/36base)
- [소녀전선 36Base Resoruces](https://github.com/36base/girlsfrontline-resources)

## Planning

- [x] Django Setting
- [ ] Sentry Setting
- [ ] AWS EC2, S3, RDS Setting
- [ ] DB Model Write
- [ ] Auto Update Crawling Script Write
- [ ] Function Development
- [ ] Signin or OAuth Signin/up
- [ ] Django Template Design

전체적인 기능을 구현하고 템플릿 제작후 테스트 서비스를 시작후 간간히 JavaScript 와 vue.js 를 배워 Django Templates 를 프론트엔드로 대체하는 것이 목표다.

좀더 흥미를 유발하는 재미난 기획이 생각난다면 중간에 던질지도 모른다.

> 2018-09-10 DB Crawling Website 목록 추가
