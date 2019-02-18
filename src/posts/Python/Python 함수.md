---
title: "Python 함수"
date: 2018-09-03
description: 함수의 정의와 python 함수에 대하여 정리
tags: ["python"]
---

## 함수

반복적인 작업을 하는 코드를 중복되지않게 재사용이 가능하도록 정의해놓은것으로 html/css를 배운 사람이라면 css의 id, class를 생각하셔도 좋다.

## 함수의 정의 방법

```python
def 함수명(들어갈 매개변수):
    동작할 기능
```

## 함수의 실행

```python
# 실행시에 'hello world' 문구를 출력하는 함수 정의
def hello():
    print('hello world')

# 함수를 불러옴
hello()
hello world
```

- 불러올때는 함수명 옆에 '()'를 붙여주어야 실행된다.
- '()' 는 함수에 매개변수를 지정했을때 사용자 지정 값이 들어간다.

## 매개변수를 사용하는 함수의 정의법

```python
def print_arguments(print_ar):
    print(print_ar)

print_arguments('hello world')
hello world
```

- `매개변수(parameter)` 함수를 정의할때 해당하는 값을 실행문에서 받는다.
- `인자(arguments)` 실행문에 값을 적어넣는다.

#### EX) 매개변수를 두 개 받아 더한 값을 출력해주는 함수를 작성하고 5와 7을 인자로 전달해서 호출해 보기

```python
def sum_two_values(a,b):
    return a + b

sum_two_values(5,7)
12
```

## 위치 인자(Positional arguments)

매개변수의 순서대로 인자를 전달하여 사용하는 경우

```python
def student(name, age, gender):
    return {'name':name, 'age':age,'gender':gender}

stundent('Sehyeon Youn','25', 'male')
```

## 키워드 인자(Keyword arguments)

매개변수의 이름을 지정하여 인자로 전달하여 사용하는 경우

```python
student(age=25, name='Sehyeon Youn', gender='male')
```

- 위치인자와 키워드인자를 동시에 쓴다면, 위치인자가 먼저 와야 한다.
- 키워드 인자는 순서를 지키지 않아도 잘 찾아서 값이 들어간다.

## 기본 매개변수값 지정

인자가 제공되지 않을 경우, 기본 매개변수로 사용할 값을 지정할 수 있다.

```python
def student(name, age, gender, cls='a-class'):
    return {'name':name, 'age':age, 'gender':gender, 'class':cls}

student('Sehyeon Youn', 25, 'male')
{'name':'Sehyeon Youn', 'age':25, 'gender':'male','class':'a-class'}
```

- class 이름을 작성하지 않했을 때 사전 설정했던 값으로 불러온다.

## 기본 매개변수값의 정의 시점

기본 매개변수값은 함수가 실행될때마다 계산되지 않고, 함수가 정의되는 시점에서 계산된다.

```python
# 빈 리스트 result 를 만들고 그 리스트에 value 값을 추가한다.
def return_list(value, result=[]):
    result.append(value)
    return result

return_list('apple')
['apple']
return_list('banana')
['apple', 'banana']
```

함수가 실행되는 시점에 기본 매개변수값을 계산하기 위해, 아래와 같이 수정해준다.

```python
# 같은 리스트를 가지고 있는것이 있다면 초기화하고 다시 정의한다.
def return_list(value, result=[]):
    if result is None:
        result = []
    result.append(value)
    return result
```

## 위치인자 묶음

함수에 위치인자로 주어진 변수들의 묶음은 `*매개변수명` 으로 사용할 수 있다. 관용적으로 `*args` 를 사용한다.

```python
def print_args(*args):
    print(args)
```

- 여러개의 정의되어 있지 않은 변수를 사용할 수 있개한다.
- tuple 데이터 타입으로 출력한다.

## 키워드인자 묶음

함수에 키워드인자로 주어진 변수들의 묶음은 `**매개변수명` 으로 사용할 수 있다. 관용적으로 `**kwargs` 를 사용한다.

```python
def print_kwargs(**kwargs):
    print(kwargs)
```

- 딕셔너리 데이터 타입으로 출력된다.

## docstring

함수를 정의한 문서 역할을 한다.
함수 정의 후, 몸체의 시작부분에 문자열로 작상하며, 여러줄 작성도 가능하다. 즉 주석의 기능을 사용 할 수 있다.

```python
def print_args(*args):
    'print positional arguments'
    print(args)

help(print_args)
```

- `help()` 로 주석을 호출 할 수 있다.

## 함수를 인자로 전달

파이썬에서는 함수 역시 다른 객체와 동등하게 취급되므로, 함수에서 인자로 함수를 전달, 실행, 리턴하 형태로 프로그래밍이 가능하다.

-'call func'를 출력하는 함수를 정의하고, 함수를 인자로 받아 실행하는 함수를 정의하여 첫번째에 정의한 함수를 인자로 전댈해 실행해보자.

```python
# 1. 'call function!' 을 출력하는 함수 call_function을 정의
# 2. f를 매개변수로 받는 execute_function(f)를 정의하고 매개변수로 받은 f를 실행하도록 함
# 3. execute_function에 call_function(함수자체)를 전달해서 해당함수를 실행한다.

def  call_functioncall_fun ():
    print('call function!')

def execute_function(f):
    f()

execute_function(call_function)
call function!
```

## 내부함수

함수 안에서 또다른 함수를 정의해 사용할 수 있다.

- 문자열 인자를 하나 전달받는 함수를 만들고, 해당 함수 내부에 전달받은 문자열을 대문자화해서 리턴해주는 내부함수를 구현한다. 문자열을 전달받는 함수는 내부함수를 실행한 결과를 리턴하도록 한다.

```python
# 1. 문자열 인자를 하나 전달받는 함수 def upper정의
# 2. upper 함수내에 또 다른 함수인 execute를 정의
#    execute 가 하는 일은 하나의 문자열을 받아 대문자화해서 리턴해줌
# 3. upper 함수는 자신의 내부에 있는 함수 'execute'를 실헹하고 그 결과를 리턴해준다.
def upper(string):
        def execute(caps):
            return caps.upper()
    return execute(string)
```

## 스코프인자

파이썬에서는 코드 작성시, 각 함수마다 독립적인 영역을 가진다.
메인프로그램(현재 동작하는 프로그램의 최상위 위치)의 영역은 전역영역(Global Scope)라고 하며, 전역스코프 내부에서 독립적인 영역을 가지고 있는 경우에는 지역영역(Local Scope)라고 부른다.

```python
champion = 'Lux'
    def show_global_champion():
    print('show_global_champion : {}'.format(champion))

show_global_champion()
print('print shampion : {}'.format(champion))
```

위 코드를 아래와 같이 변경후, 실행해보자

```python
champion = 'Lux'

def show_global_champion():
    print('show_global_champion : {}'.format(champion))

def change_global_champion():
    print('before change_global_champion : {}'.format(champion))
    champion = 'Ahri'
    print('after change_global_champion : {}'.format(champion))

show_global_champion()
change_global_champion()
```

오류가 난다.

> 함수는 독립적인 영역을 가진다. 두번째로 정의한 함수 내부에 `champion` 이라는 변수를 'Lux'에서 'Ahri'로 변경한걸 볼 수 있다. 오류는 여기서 변경전에 정의한 'print'문에서 볼 수 있는데, 지역영역에서 같은 이름의 변수를 선언했다면 그 이름을 가진 변수를 함수가 호출할때 지역영역에서 우선적으로 호출한다. 그런데 두번째 함수는 지역영역에 변수를 선언하기는 했으나 선언하기에 앞서서 'print' 문으로 변수를 호출했기 때문에 'print'함수가 `champin` 변수를 찾을수 없어 오류가 난 것이다.

## 스코핑 룰

스코프는 지역(Local), 전역(Global)외에도 내장(Built-in)영역이 존재하며, 내장영역이 가장 바깥, 그 내부에 전역, 그 내부에 지역 순으로 정의된다.
분리된 영역에서, 외부영역에서는 내부 영역의 데이터를 사용할 수 없지만 내부 영역에서는 자신의 외부 영역에있는 데이터를 참조할 수 있다.

즉 함수 내부에 정의한 변수는 함수 외부에서 참조 할 수 없고 함수 외부에 정의한 변수는 새로운 함수를 정의했을때 외부에 있는 데이터를 참조해서 가져올 수 있다는 말이다.

## 실습 01

매개변수로 문자열을 받고, 해당 문자열이 red면 apple을, yellow면 banana를, green이면 melon을, 어떤 경우도 아닐 경우 I don't know를 리턴하는 함수를 정의하고, 사용하여 result변수에 결과를 할당하고 print해본다.

```python
def flut(fu):
    result = []
    if fu == 'red':
        return 'apple'
    elif fu == 'yellow':
        return 'banana'
    elif fu == 'green':
        return 'melon'
    else:
        return "i don't know"
    return result.append(fu)

flut('red')
'apple'
flut('yellow')
'banana'
flut('green')
'melon'
flut('as')
"i don't know"
```

```python
# 1번 최선의 방법
fruit_dict ={
    'red':'apple',
    'yellow':'apple',
    'green':'melon',
}

def what_fruit2(color):
        return fruit_dict.get(color,"i don't know")
```

`.get` 내장함수는 기본값을 줄수 있고, 기본값을 작성하지 않았을때에는 `none` 값이 출력된다.

## 실습 02

1번에서 작성한 함수에 docstring을 작성하여 함수에 대한 설명을 달아보고, help(함수명)으로 해당 설명을 출력해본다.

```python
def flut(fu):
    '이 함수는 색에 맞는 과일을 return합니다.'
    result = []
    if fu == 'red':
        return 'apple'
    elif fu == 'yellow':
        return 'banana'
    elif fu == 'green':
        return 'melon'
    else:
        return "i don't know"
    return result.append(fu)

help(flut
  Help on function flut in module __main__:

flut(fu)
Help on function flut in module __main__:

flut(fu)
이 함수는 색에 맞는 과일을 return합니다.
```

## 실습 03

한 개 또는 두 개의 숫자 인자를 전달받아, 하나가 오면 제곱, 두개를 받으면 두 수의 곱을 반환해주는 함수를 정의하고 사용해본다.

```python

def square(x):
    return x ** 2
def square(*args):
    return x * y

#1. 매개변수 중 1개에 기본값을 지정
#2. 위치인자 묶음을 사용

# None를 boolean 판단기준으로 사용
# if문에 해당할 경우 함수가 return되므로 else생략
def square_or_multi_default_parmeter(x, y=None):
    if y:
        return x * y
    return x * x

# 조건표현식을 사용해 한줄로 처리
def square_or_multi_positional_parmeter2(x, y=None):
    return x*y if y else x**2

# 위치인자묶음
def square_or_multi_positional_args(*args):
    args_length = len(args)
    # 위치인자가 1개나 2개가 아닌 경우
    if not (args_lenght ==1 or args_length ==2):
        raise ValueError('숫자는 1개 또는 2개만 입력해주세요')
    if len(args) == 2:
        return args[0] * args[1]
    return args[0] ** 2

# 위치인자 묶음을 튜플 언패킹으로 사용
def square_or_multi_positional_args(*args):
    if len(args) == 1:
        # 튜플 언패킹시 좌, 우변 모두 'tuple'형태로 만들어야함
        argl, = args
    elif len(args) ==2:
        argl, arg2 == args
    # if문에따라 달라진 locals() dict에서
    #'args'키가 있는지 여부로 리턴할 값을 반환
    if 'arg2' in locals():
        return arg1 * arg2
    return arg1 ** 2
```

## 실습04

두 개의 숫자를 인자로 받아 합과 차를 튜플을 이용해 동시에 반환하는 함수를 정의하고 사용해본다.

```python
def sum_sub(x, y):
  # abs 절대값. 차가 - 일경우 절대값으로 리턴한다.
  return (x + y, abs(x - y))

```

## 실습05

위치인자 묶음을 매개변수로 가지며, 위치인자가 몇 개 전달되었는지를 print하고 개수를 리턴해주는 함수를 정의하고 사용해본다.

```python
def get_args_num(*atgs):
  print(f'위치인자는 총 {len(args)}개가 전달되었습니다.')
  return len(args)

  result = get_args_num(2,3,4,5,6)
```

## 실습06

람다함수와 리스트 컴프리헨션을 사용해 한 줄로 구구단의 결과를 갖는 리스트를 생성해본다.

```python
[(lambda x, y: f'{x} * {y} = {x * y}')(a, b) for x in range(2, 10) for y in range(1, 10)]

['2 * 1 = 2',
 '2 * 2 = 4',
 '2 * 3 = 6',
 '2 * 4 = 8',
 '2 * 5 = 10',
 '2 * 6 = 12',
 '2 * 7 = 14',
 '2 * 8 = 16',
 '2 * 9 = 18',
 '3 * 1 = 3',
 '3 * 2 = 6',
 '3 * 3 = 9',
 '3 * 4 = 12',
 '3 * 5 = 15',
 '3 * 6 = 18',
 '3 * 7 = 21',
 '3 * 8 = 24',
 '3 * 9 = 27',
 '4 * 1 = 4',
 '4 * 2 = 8',
 '4 * 3 = 12',
 '4 * 4 = 16',
 '4 * 5 = 20',
 '4 * 6 = 24',
 '4 * 7 = 28',
 '4 * 8 = 32',
 '4 * 9 = 36',
 '5 * 1 = 5',
 '5 * 2 = 10',
 '5 * 3 = 15',
 '5 * 4 = 20',
 '5 * 5 = 25',
 '5 * 6 = 30',
 '5 * 7 = 35',
 '5 * 8 = 40',
 '5 * 9 = 45',
 '6 * 1 = 6',
 '6 * 2 = 12',
 '6 * 3 = 18',
 '6 * 4 = 24',
 '6 * 5 = 30',
 '6 * 6 = 36',
 '6 * 7 = 42',
 '6 * 8 = 48',
 '6 * 9 = 54',
 '7 * 1 = 7',
 '7 * 2 = 14',
 '7 * 3 = 21',
 '7 * 4 = 28',
 '7 * 5 = 35',
 '7 * 6 = 42',
 '7 * 7 = 49',
 '7 * 8 = 56',
 '7 * 9 = 63',
 '8 * 1 = 8',
 '8 * 2 = 16',
 '8 * 3 = 24',
 '8 * 4 = 32',
 '8 * 5 = 40',
 '8 * 6 = 48',
 '8 * 7 = 56',
 '8 * 8 = 64',
 '8 * 9 = 72',
 '9 * 1 = 9',
 '9 * 2 = 18',
 '9 * 3 = 27',
 '9 * 4 = 36',
 '9 * 5 = 45',
 '9 * 6 = 54',
 '9 * 7 = 63',
 '9 * 8 = 72',
 '9 * 9 = 81']
```
