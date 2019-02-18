---
title: "pyenv & pipenv install"
date: 2018-09-11
description: unix 기반 운영체제에서 python 을 편리하게 사용하기 위한 pyenv, pipenv 설치법
tags: ["setting", "python"]
---

## pyenv

pyenv 는 python 의 버젼을 관리해주는 툴이다.

## mac install

```sh
brew install pyenv
```

## Ubuntu install

```sh
curl -L https://raw.githubusercontent.com/yyuu/pyenv-installer/master/bin/pyenv-installer | bash
```

> 위의 코드로 설치가 되지 않는다면 curl 이 설치되어 있지 않을 수도 있다. `sudo apt-get install curl` 로 패키지를 설치 해 준 후 다시 실행해 보자.

### mac

shell 에서 pyenv 가 정상 작동할수 있도록 `~/.bashrc` 또는 `~/.zshrc` 의 맨 아랫구문에 아래의 코드를 삽입해준다.

```sh
export PYENV_ROOT=/usr/local/var/pyenv
if which pyenv > /dev/null; then eval "$(pyenv init -)"; fi
```

### Ubuntu

mac과 비슷하지만 다르다. Ubuntu는 설치후 나오는 메세지 `the following to <셸 설정파일 경로>` 에 있는 설정파일을 `vim <셀 설정파일 경로>` 열어 준 후 맨 아랫구문에 위와 동일한 코드를 삽입해준다.

### pyenv 를 이용해 python 을 설치하기전 필요 패키지

pyenv 로 python 을 설치하고 활용하기전에 해당 운영체제마다 필요한 패키지가 있다. 이를 설치하지 않으면 많은 오류가 발생하거나 아예 실행되지 않을 수도 있다. `pyenv` 버젼마다 필요한 패키지가 다를 수도 있으니 최신 명령어는 `pyenv`의 저장소(git) 에서 확인하자.

- [Common build problems](https://github.com/pyenv/pyenv/wiki/Common-build-problems)

### mac

```sh
brew install readline xz
```

### Ubuntu

```sh
sudo apt-get install -y make build-essential libssl-dev zlib1g-dev libbz2-dev \
libreadline-dev libsqlite3-dev wget curl llvm libncurses5-dev libncursesw5-dev \
xz-utils tk-dev
```

## pyenv를 이용해 python 설치

mac 시스템에 설치되어있는 python 이 아닌 pyenv 로 설치된 python 을 사용하도록 pyenv를 통해 설치해보자

```sh
pyenv install -l

# 또는
pyenv install --list

  2.1.3
  2.2.3
  2.3.7
  2.4
  2.4.1
  2.4.2
  2.4.3
  2.4.4
  2.4.5
  2.4.6
  ...
  3.6.5
  3.6.6rc1
  3.7.0
  3.7-dev
  3.8-dev
```

원하는 버젼 또는 자신의 프로젝트가 지원하는 버젼을 선택해 설치하자

```sh
pyenv install 3.6.5
```

<br>

### pyenv global(전역설정) Setting

pyenv 로 설치한 python 을 전역에서 시스템에 설치된 python 대신 사용하도록 설정한다.

```sh
pyenv global 3.6.5
```

아래의 명령어를 입력해보면 `*` 이 `system` 에서 `3.6.5 (set by /usr/local/var/pyenv/version)` 로 이동해 있는 것을 볼 수 있다.

```sh
pyenv versions
```

<br>

## pipenv

python 패키지를 프로젝트별 사용하는 패키지를 분리해주고, 해당 프로젝트를 공유할 때 다른 공유자가 나의 프로젝트를 내려 받았을 때 해당 프로젝트에서 사용된 패키지를 쉽고 빠르게 내려받아 나와 동일한 환경에서 작업할수 있도록 도와주는 패키지다.

### mac

```sh
brew install pipenv
```

### Ubuntu

```sh
sudo apt install software-properties-common python-software-properties
sudo add-apt-repository ppa:pypa/ppa
sudo apt update
sudo apt install pipenv
```

## pip 를 사용한 install

### Ubuntu

```sh
apt-get install python-pip
pip install pipenv
```

<br>

## pipenv 사용법

사용법은 매우 간단하다. 내가 작업할 프로젝트 폴더 내부에서 해당 스크립트를 입력한다.

```sh
pipenv install
```

이렇게 되면 해당 폴더에 가상환경이 설정되고 `Pipfile` 파일과 `.Pipfile.lock` 파일이 생성된다. 이곳에 설치되는 패키지는 모두 `pipenv`로 관리되고 로컬 컴퓨터와의 설치된 패키지가 분리된다.

해당 가상환경을 실행해야 가상환경에 적용된 패키지들이 모두 적용된다. 아래와 같이 스크립트를 실행한다.

```sh
pipenv shell
```

패키지를 설치할 때는 아래와같이 `pipenv` 로 설치된다.

```sh
# pipenv install 패키지명
pipenv install django
```

위와 같이 패키지를 설치한 경우 `Pipfile` 에 내가 설치한 패키지와 버젼이 기록된다. 해당 파일은 나중에 프로젝트 공유자가 나의 프로젝트를 내려받았을때 `pipenv intall` 명령어만 실행하면 자동으로 `Pipfile` 의 패키지 내용을 읽어 해당 프로젝트에 사용된 패키지들을 자동으로 내려받아 나와 동일한 작업환경을 만들어준다.
