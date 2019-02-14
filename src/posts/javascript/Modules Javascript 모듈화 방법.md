---
title: Modules Javascript 모듈화 방법
date: 2019-02-13
description: Modules Javascript 모듈화 방법과 vuejs 에서의 사용법
tags: ["js", "vuejs"]
---

- 자바스크립트 모듈 로더 라이브러리(AMD, Commons JS)기능을 js 언어 자체에서 지원한다.
- 호출되기 전까지는 코드 실행과 동작을 하지 않는 특징이 있다.

```js
// libs/math.js
export function sum(x, y) {
  return x + y;
}
export var pi = 3.141593;

// main.js
import { sum } from "libs/math.js";
sum(1, 2);
// 3
```

## Vue.js 에서 마주칠 `default` export

- 한개의 file 에서 `default` 는 하나씩밖에 사용 할 수 없다.

```js
// util.js
export default function(x) {
	return console.log(x);
}

// main.js
import util from `util.js`; // function (x) { return console.log(x); }
util("hi");

// app.js
import log from 'util.js';
console.log(log);
log("hi");
```
