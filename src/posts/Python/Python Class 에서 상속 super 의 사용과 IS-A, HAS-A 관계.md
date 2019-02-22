---
title: "Python Class 에서 상속 super 의 사용과 IS-A, HAS-A 관계"
date: 2019-02-22
description: python class 의 상속 관계의 구분과 super 구문의 사용법
tags: ["til", "python", "cs"]
---

> 해당 학습 내용은 "컴퓨터 사이언스 부트 캠프 with 파이썬" 책 내용을 개인적으로 학습, 정리한 것입니다.

```python
# 상속 클래스
class Computer:
	def __init__(self, cpu, ram):
		self.cpu = cpu
		self.ram = ram

# 파생 클래스
# 컴퓨터 클래스에서의 ram과 cpu, 노트북 클래스에서의 ram과 cpu 은 같다.
class Laptop(Computer):
	def __init__(self, cpu, ram, battery):
		super().__init__(cpu, ram)
		self.battery = battery
		
# 컴퓨터가 가진 매소드 등을 전부 상속받는다.
		
```

## IS-A
IS-A 는 `~은 ~의 한 종류다` 를 의미한다.
노트북은 컴퓨터의 한 종류이므로 IS-A 관계가 성립한다. 영어로 바꾸어 말하면 `A laptop IS-A Computer` 인데 문장 중간에 `한 종류다` 라는 의미가 IS-A이므로 IS-A 관계 라고 부른다.


컴퓨터 클래스와 노트북 클래스에서 사용되는 부품 두종류가 같다. 새로 정의하는 것 보다 재사용 하는 것이 좀더 효율적, 컴퓨터 클래스에서 사용하는 `ram` 과 `cpu` 를 그대로 가져와 사용하도록 한다.

`super()` 는 기본 클래스를 정의 할 때에 컴퓨터 클래스에 이미 정의되어 있는 기본 인자를 그대로 가져와 사용 할 수 있도록 한다. 이또한 재사용하기 때문에 효율이 좋다.

## HAS-A
HAS-A 는 `~이 ~을 가진다 혹은 포함한다` 를 의미한다. 컴퓨터는 cpu 와 ram 을 가진다.`A Computer HAS-A CPU` 에서 `가지고 있다` 의 의미가 `HAS-A` 이므로 `HAS-A` 관계 라고 부른다.

HAS-A 에는 통합과 합성 이라는 관계가 있다. 둘은 매우 다른 관계며 명확히 구분해야 한다. 컴퓨터를 예로 들어보자면

```python
class CPU:
	pass

class RAM:
	pass
	
class Computer:
	def __init__(self):
		self.cpu = CPU()
		self.ram = RAM()
```

위의 코드대로 라면 컴퓨터 객체가 생성될때 `RAM` 과 `CPU` 도 같이 생성되고, 컴퓨터 객체가 없어질때 같이 없어진다. 이 관계를 `합성` 이라고 한다.

이번엔 경찰과 총의 관계에 대하여 예를 들어보자

```python
class Gun:
	def __init__(self, kind):
		self.kind = kind
		
	def bang(self):
		print('bang!!')
		
class Police:
	def __init__(self):
		self.gun = None
	
	def acquire_gun(self, gun):
		"""
			총을 가지다
		"""
		self.gun = gun
		
	def release_gun(self):
		"""
			총을 놓다.
		"""
		gun = self.gun
		self.gun = None
		return gun	
	
	def shoot(self):
		"""
			총을 가지고 있으면 총 객체의 매소드 bang() 를 실행하고 없으면 할수 없다고 print 한다.
		"""
		if self.gun:
			self.gun.bang()
		else:
			print('Unable to shoot")
```

경찰 객체를 생성했을때 아직 총 객체를 가지고 있지 않다. `acquire_gun()` 매소드와 `release_gun()` 매소드를 통해 총을 가진 경찰과 가지지 않은 경찰을 모두 표현 할 수 있다.

경찰과 총의 관계는 위의 컴퓨터와 부품 관계화는 분명 다르다. 함께 생명주기를 같이하지 않는다. 이러한 관계를 `통합` 이라고 한다.