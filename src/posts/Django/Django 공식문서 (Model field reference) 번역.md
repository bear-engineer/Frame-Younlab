---
title: "Django Model field reference(공식문서 번역)"
date: 2018-06-22
description: Django 공식문서 "Django Model field reference" 을 번역하였습니다.
tags: ["django", "translation"]
---

> 이 문서는 Django 공식문서 [Model field reference](https://docs.djangoproject.com/en/2.0/ref/models/fields/#field-options) 의 내용을 번역하였습니다.
> 오역이 매우 많을 수도 있습니다. 발견시 Comment 부탁드립니다.

> Django Versions 2.0

이 문서에는 [Field options](https://docs.djangoproject.com/en/2.0/ref/models/fields/#field-options) 및 [Field](https://docs.djangoproject.com/en/2.0/ref/models/fields/#django.db.models.Field) 유형을 포함한 필드의 모든 API참조가 포함되어 있습니다.

> **참고항목**
> 기본 제공 필드가 효과를 발휘하지 않는 경우 특정 국가와 문화에 유용한 다양한 코드를 포함하는 [django-localflavor](https://github.com/django/django-localflavor) [documents](https://django-localflavor.readthedocs.io/en/latest/) 를 사용해 볼 수 있습니다.
>
> 또한 사용자 정의 모델 필드를 쉽게 작성할 수 있습니다.

> **Note**
> 기술적으로 이러한 모델은 [django.db.models.fields](https://docs.djangoproject.com/en/2.0/ref/models/fields/#module-django.db.models.fields) 에 정의되어 있지만 편의상 [django.db.models](https://docs.djangoproject.com/en/2.0/topics/db/models/#module-django.db.models) 로 가져옵니다. <Foo>Field.

## Field options

모든 필드 유형에 대해 다음 인수를 사용할 수 있습니다. 모두 선택 사항입니다.

### Null

True 라면, Django 는 빈 값을 데이터베이스에 NULL 로 저장합니다. 기본 값은 False 입니다.

#### Field.null

[CharField](https://docs.djangoproject.com/en/2.0/ref/models/fields/#django.db.models.CharField) 및[TextField](https://docs.djangoproject.com/en/2.0/ref/models/fields/#django.db.models.TextField) 와 같은 문자열 기반 필드에는 [null](https://docs.djangoproject.com/en/2.0/ref/models/fields/#django.db.models.Field.null) 을 사용하지 마십시오.
문자열 기반 필드에 null = true 가 있으면 `no data: NULL` 에 대한 두가지 가능한 값인 NULL 과 빈 문자열이 있음 을 의미합니다. 대부분의 경우 `no data` 에 대한 두개의 가능한 값을 가지는 것이 중복됩니다. 장기 규칙은 NULL 이 아닌 빈 문자열을 사용하는 것입니다.

하나의 예외는 [CharField](https://docs.djangoproject.com/en/2.0/ref/models/fields/#django.db.models.CharField) 에 unique=True와 blank=True가 모두 설정되어 있을 때입니다.

이 경우 빈 값을 가진 여러 개체를 저장할 때 고유한 제약 조건 위반을 방지하려면 `null = true` 가 필요합니다.

문자열 기반 및 비 문자열 기반 필드의 경우 폼에서 빈 값을 허용하려는 경우 `blank = True` 로 설정해야합니다. [null](https://docs.djangoproject.com/en/2.0/ref/models/fields/#django.db.models.Field.null) 매개 변수는 데이터베이스 저장소에만 영향을줍니다 (blank[blank](https://docs.djangoproject.com/en/2.0/ref/models/fields/#django.db.models.Field.blank) 참조)

> **Note**
> Oracle데이터베이스 백앤드 를 사용하는 경우 NULL값이 저장되어 이 특성에 관계 없이 빈 문자열을 나타냅니다.

[BooleanField](https://docs.djangoproject.com/en/2.0/ref/models/fields/#django.db.models.BooleanField) 로 [null](https://docs.djangoproject.com/en/2.0/ref/models/fields/#django.db.models.Field.null) 값을 허용하려면 대신 [NullBooleanField](https://docs.djangoproject.com/en/2.0/ref/models/fields/#django.db.models.NullBooleanField)를 사용하세요.

---

### blank

#### Field.blank

True 라면, Django 는 빈 값을 NULL 로 데이터베이스에 저장합니다. 기본 값은 False입니다.

이것은 [null](https://docs.djangoproject.com/en/2.0/ref/models/fields/#django.db.models.Field.null) 과 다릅니다. null 은 순전히 데이터베이스와 관련된 반면 [blank](https://docs.djangoproject.com/en/2.0/ref/models/fields/#django.db.models.Field.blank) 는 유효성 검사와 관련이 있습니다.

필드에 `blank = True` 라면 양식 유효성 검사에서 빈 값을 입력할 수 있습니다. 필드에`blank=False` 이 있는 경우 필드가 필요합니다.

---

### choices

#### Field.choices

이 필드의 선택 항목으로 사용할 정확히 두 항목 (예 : [(A, B), (A, B) ...])의 반복 가능 항목으로 구성된 반복 가능한 항목 (예 : 목록 또는 튜플)입니다. 이 옵션이 제공되면 기본 양식 위젯이 표준 텍스트 필드 대신 이러한 선택 사항이 있는 선택 상자가 됩니다.

각 튜플의 첫번째 요소는 모델에 설정할 실제 값이고 두번째 요소는 사람이 읽을 수 있는 이름입니다.

```python
YEAR_IN_SCHOOL_CHOICES = (
    ('FR', 'Freshman'),
    ('SO', 'Sophomore'),
    ('JR', 'Junior'),
    ('SR', 'Senior'),
)
```

일반적으로 model class 내에서 선택 사항을 정의하고 각 값에 대해 적합한 이름의 상수를 정의하는 것이 가장 좋습니다.

```python
from django.db import models

class Student(models.Model):
    FRESHMAN = 'FR'
    SOPHOMORE = 'SO'
    JUNIOR = 'JR'
    SENIOR = 'SR'
    YEAR_IN_SCHOOL_CHOICES = (
        (FRESHMAN, 'Freshman'),
        (SOPHOMORE, 'Sophomore'),
        (JUNIOR, 'Junior'),
        (SENIOR, 'Senior'),
    )
    year_in_school = models.CharField(
        max_length=2,
        choices=YEAR_IN_SCHOOL_CHOICES,
        default=FRESHMAN,
    )

    def is_upperclass(self):
        return self.year_in_school in (self.JUNIOR, self.SENIOR)
```

선택 목록을 model class 외부에서 정의한 다음 참조할 수 있지만, 모델 클래스 내에서 선택 항목과 이름을 정의하면 해당 정보가 모두 사용되므로 참조하기가 쉽습니다.
(Ex: Student.SOPHOMORE 는 Student model 이 가져온 모든 위치에서 작동합니다.)

또한 조직 목적으로 사용할 수 있는 명명된 그룹으로 사용 가능한 선택 항목을 수집할 수도 있습니다.

```python
MEDIA_CHOICES = (
    ('Audio', (
            ('vinyl', 'Vinyl'),
            ('cd', 'CD'),
        )
    ),
    ('Video', (
            ('vhs', 'VHS Tape'),
            ('dvd', 'DVD'),
        )
    ),
    ('unknown', 'Unknown'),
)
```

각 튜플의 첫번째 요소는 그룹에 적용할 이름입니다. 두 번째 요소는 2-tuples 의 반복 가능이며 각 2-tuples 에는 옵션에 대한 값과 사람이 읽을 수있는 이름이 들어 있습니다. 그룹화된 옵션을 단일 목록 내의 그룹화되지 않은 옵션과 결합할 수 있습니다.

선택 사항이 설정된 각 모델 필드에 대해 django 는 사용자가 읽을 수 있는 필드의 현재 값을 검색하는 메서드를 추가합니다. 데이터베이스 API문서의 [get_FOO_display()](https://docs.djangoproject.com/en/2.0/ref/models/instances/#django.db.models.Model.get_FOO_display) 를 참조하십시오.

선택 사항은 모든 반복 가능한 객체 일 수 있습니다. 반드시 목록 또는 튜플 일 필요는 없습니다. 이렇게 하면 선택 사항을 동적으로 구성할 수 있습니다. 그러나 스스로 해킹하여 동적 인 선택을하는 경우 ForeignKey 가있는 적절한 데이터베이스 테이블을 사용하는 것이 좋습니다. 선택 사항은 많은 경우 변경되지 않는 정적 데이터를 의미합니다.

`blank = False` 가 기본값과 함께 필드에 설정되어 있지 않으면 다음을 포함하는 레이블이 포함됩니다. "---------" 가 선택 상자와 함께 렌더링됩니다. 이 동작을 재정의하려면 None; (None, 'Your String For Display'). 등을 포함하는 선택 항목에 튜플을 추가합니다.

또는 [CharField.](https://docs.djangoproject.com/en/2.0/ref/models/fields/#django.db.models.CharField) 에서와 같이 None 대신 빈 문자열을 사용할 수 있습니다.

---

### db_column

#### Field.db_column

이 필드에 사용할 데이터베이스 열의 이름. 만약 이것이 주어지지 않는다면, django 는 필드의 이름을 사용할 것입니다.

데이터베이스 열 이름이 SQL예약 단어이거나 Python변수 이름에서 허용되지 않는 문자(예:하이픈)가 포함되어 있는 경우에는 OK 입니다. Django 는 배후에서 열과 테이블 이름을 인용합니다.

---

### db_index

#### Field.db_index

True이면 이 필드에 대한 데이터베이스 인덱스가 작성됩니다.

---

### db_tablespace

#### Field.db_tablespace

이 필드의 색인이 작성된 경우,이 필드의 색인에 사용할 [database tablespace](https://docs.djangoproject.com/en/2.0/topics/db/tablespaces/) 의 이름. 기본 값은 프로젝트의 DEFAULT_INDEX_TABLESPACE설정(설정된 경우)또는 모델의 db_tablespace( 있는 경우)입니다. 백엔드에서 인덱스에 대한 테이블 스페이스를 지원하지 않는 경우 이 옵션은 무시됩니다.

---

### default

#### Field.default

필드의 기본 값. 값 또는 호출 가능한 개체일 수 있습니다. 호출 가능한 경우 새 객체가 생성될 때마다 호출됩니다.

기본값은 변경 가능한 객체 (model instance, **list**, **set**, etc.) 일 수 없습니다. 해당 객체의 동일한 인스턴스에 대한 참조가 모든 새 모델 인스턴스의 기본값으로 사용됩니다. 대신 원하는 기본값을 호출 가능 코드로 래핑하십시오. 예를 들어 [JSONField](https://docs.djangoproject.com/en/2.0/ref/contrib/postgres/fields/#django.contrib.postgres.fields.JSONField) 에 대한 기본 dict 를 지정하려면 다음 함수를 사용합니다.

```python
def contact_default():
    return {"email": "to1@example.com"}

contact_info = JSONField("ContactInfo", default=contact_default)
```

모델 인스턴스에 매핑되는 [ForeignKey](https://docs.djangoproject.com/en/2.0/ref/models/fields/#django.db.models.ForeignKey) 와 같은 필드의 경우 기본값은 모델 인스턴스 대신 참조하는 필드 값 (to_field가 설정되지 않은 경우 pk) 이어야합니다.

새 모델 인스턴스가 생성되고 필드에 값이 제공되지 않으면 기본 값이 사용됩니다. 필드가 주 키인 경우 필드가 없음으로 설정된 경우에도 기본 값이 사용됩니다.

---

### editable

#### Field.editable

False 인 경우 필드는 관리자 또는 다른 [ModelForm](https://docs.djangoproject.com/en/2.0/topics/forms/modelforms/#django.forms.ModelForm) 에 표시되지 않습니다. 또한 모델 유효성 검사 ([model validation](https://docs.djangoproject.com/en/2.0/ref/models/instances/#validating-objects)) 도중에는 건너 뜁니다. 기본값은 True 입니다.

---

### error_messages

#### Field.error_messages

error_messages 인수를 사용하면 필드가 표시할 기본 메시지를 재정의 할 수 있습니다. 덮어 쓰려는 오류 메시지와 일치하는 키가 있는 사전을 전달합니다.

오류 메시지 키에는 null, blank, invalid, invalid_choice, unique 및 unique_for_date가 포함됩니다. 추가 오류 메시지 키는 아래 [Field type](https://docs.djangoproject.com/en/2.0/ref/models/fields/#field-types) 섹션의 각 필드에 지정됩니다.

이러한 오류 메시지는 양식에 전파되지 않는 경우가 많습니다. [모델의 Error_messages에 대한 고려 사항](https://docs.djangoproject.com/en/2.0/topics/forms/modelforms/#considerations-regarding-model-errormessages) 을 참조하십시오.

---

### help_text

#### Field.help_text

form widget 과 함께 추가 ”help” 텍스트가 표시됩니다. 필드가 양식에 사용되지 않는 경우에도 문서화에 유용합니다.

이 값은 HTML에서 자동 생성된 형식으로 지정되지 않습니다. 원하는 경우 help_text에 HTML을 포함할 수 있습니다. 예:

```python
help_text="Please use the following format: <em>YYYY-MM-DD</em>."
```

또는 일반 텍스트와 .ango.usils.html.recape()를 사용하여 HTML특수 문자를 피할 수 있습니다. 사이트 간 스크립팅 공격을 피하기 위해 신뢰할 수 없는 사용자로부터 올 수 있는 모든 도움말 텍스트를 피해야 합니다.

---

### primary_key

#### Field.primary_key

True 이면 이 필드가 모델의 주 키입니다.

모델의 필드에 primary_key = true를 지정하지 않으면 기본 키를 유지하도록 [AutoFiard](https://docs.djangoproject.com/en/2.0/ref/models/fields/#django.db.models.AutoField) 가 자동으로 추가되므로 기본 키를 설정할 필요가 없습니다. 자세한 내용은 [Automatic primary key fields](https://docs.djangoproject.com/en/2.0/topics/db/models/#automatic-primary-key-fields) 를 참조하십시오.

primary_key = True는 null = False 및 unique = True를 의미합니다. 객체에는 기본 키가 하나만 허용됩니다.

기본 키 필드는 읽기 전용입니다. 기존 개체에 대한 기본 키 값을 변경한 다음 저장하면 새 개체가 이전 개체와 함께 생성됩니다.

---

### unique

#### Field.unique

True 이면 표 전체에서 이 필드가 고유해야 합니다.

이 작업은 데이터베이스 수준 및 모델 검증에 의해 수행됩니다. 고유 한 필드에 중복 값이있는 모델을 저장하려고하면 모델의 [save()](https://docs.djangoproject.com/en/2.0/ref/models/instances/#django.db.models.Model.save) 메소드에 의해 [django.db.IntegrityError](https://docs.djangoproject.com/en/2.0/ref/exceptions/#django.db.IntegrityError) 가 발생합니다.

이 옵션은 ManyToManyField 및 OneToOneField를 제외한 모든 필드 유형에 유효합니다.

unique가 True이면 인덱스 생성을 의미하므로 db_index 를 지정할 필요가 없습니다.

---

### unique_for_date

#### Field.unique_for_date

이 필드가 날짜 필드 값에 대해 고유하도록 하려면 이 필드를 DateField또는 DateTimeField의 이름으로 설정하십시오.

예를 들어, unique_for_date="pub_date"필드 제목이 있는 경우, Django 는 같은 제목과 pub_date 를 가진 두 레코드의 입력을 허용하지 않습니다.

[DateTimeField](https://docs.djangoproject.com/en/2.0/ref/models/fields/#django.db.models.DateTimeField) 를 가리키도록 설정한 경우, 필드의 날짜 부분 만 고려됩니다. 게다가 [USE_TZ](https://docs.djangoproject.com/en/2.0/ref/settings/#std:setting-USE_TZ) 가 True 일 때, 개체가 저장 될 때 현재 시간대 ([current time zone](https://docs.djangoproject.com/en/2.0/topics/i18n/timezones/#default-current-time-zone)) 에서 검사가 수행됩니다.

모델 유효성 검사 중에는 [Model.validate_unique()](https://docs.djangoproject.com/en/2.0/ref/models/instances/#django.db.models.Model.validate_unique) 에 의해 적용되지만 데이터베이스 수준에서는 적용되지 않습니다. [Model_validate_unique()](https://docs.djangoproject.com/en/2.0/ref/models/instances/#django.db.models.Model.validate_unique) 는 [unique_for_date](https://docs.djangoproject.com/en/2.0/ref/models/fields/#django.db.models.Field.unique_for_date) 제약 조건이 [ModelForm](https://docs.djangoproject.com/en/2.0/topics/forms/modelforms/#django.forms.ModelForm) 의 일부가 아닌 필드를 포함하는 경우 (예 : 필드 중 하나가 exclude에 나열되거나 [editable = False](https://docs.djangoproject.com/en/2.0/ref/models/fields/#django.db.models.Field.editable) 인 경우 해당 특정 제약 조건에 대한 유효성 검사를 건너 뜁니다.

---

### unique_for_month

#### Field.unique_for_month

unique_for_date와 같지만 월을 기준으로 필드가 고유해야합니다.

---

### unique_for_year

#### Field.unique_for_year

unique_for_date와 unique_for_month와 유사합니다.

---

### verbose_name

#### Field.verbose_name

사용자가 읽을 수 있는 필드 이름입니다. 상세 이름을 지정하지 않은 경우, Django는 자동으로 필드의 속성 이름을 사용하여 밑줄을 공백으로 변환하여 만듭니다. [Verbose field names](https://docs.djangoproject.com/en/2.0/topics/db/models/#verbose-field-names) 을 참조하십시오.

---

### validators

#### Field.validators

이 필드에 실행할 검사기 목록입니다. 자세한 내용은 유효성 검사기 ([validators documentation](https://docs.djangoproject.com/en/2.0/ref/validators/)) 설명서를 참조하십시오.

###### Registering and fetching lookups

필드는 조회 등록 API ([lookup registration API](https://docs.djangoproject.com/en/2.0/ref/models/lookups/#lookup-registration-api)) 를 구현합니다. 이 API를 사용하여 필드 클래스에 사용할 수 있는 조회와 필드에서 조회를 가져오는 방법을 사용자 정의할 수 있습니다.

---

## Field types

### AutoField

class AutoField(\*\*options)[source](https://docs.djangoproject.com/en/2.0/_modules/django/db/models/fields/#AutoField)

사용 가능한 ID 에 따라 자동으로 증가하는[IntegerField](https://docs.djangoproject.com/en/2.0/ref/models/fields/#django.db.models.IntegerField) 입니다.
보통 이것을 직접 사용할 필요는 없습니다. 별도로 지정하지 않으면 기본 키 필드가 자동으로 모델에 추가됩니다.
[Automatic primary key fields](https://docs.djangoproject.com/en/2.0/topics/db/models/#automatic-primary-key-fields) 를 참조하십시오.

---

### BigAutoField

class BigAutoField(\*\*options)[source](https://docs.djangoproject.com/en/2.0/_modules/django/db/models/fields/#BigAutoField)

1에서 9223372036854775807 사이의 숫자를 맞출 수 있다는 점을 제외하고는 [AutoField](https://docs.djangoproject.com/en/2.0/ref/models/fields/#django.db.models.AutoField) 와 매우 유사한 64비트 정수 입니다.

---

### BigIntegerField

class BigIntegerField(\*\*options)[source](https://docs.djangoproject.com/en/2.0/_modules/django/db/models/fields/#BigIntegerField)

-92233720368575808에서 922337203685854775807 사이의 숫자를 맞출 수 있다는 점을 제외하고는 [IntegetField](https://docs.djangoproject.com/en/2.0/ref/models/fields/#django.db.models.IntegerField)와 매우 유사합니다. 이 필드의 기본 양식 위젯은 [TextInput](https://docs.djangoproject.com/en/2.0/ref/forms/widgets/#django.forms.TextInput) 입니다.

---

### BinaryField

class BinaryField(\*\*options)[source](https://docs.djangoproject.com/en/2.0/_modules/django/db/models/fields/#BinaryField)

원시 이진 데이터를 저장할 필드. 바이트 할당만 지원합니다. 이 필드는 기능이 제한되어 있습니다. 예를 들어 BinaryField값에 대한 쿼리 집합은 필터링 할 수 없습니다. 또한 [ModelForm](https://docs.djangoproject.com/en/2.0/topics/forms/modelforms/#django.forms.ModelForm) 에 BinaryField 를 포함할 수 없습니다.

> **Abusing BinaryField**
>
> 데이터베이스에 파일을 저장하는 것을 고려할 수도 있지만, 이 경우에는 99%가 잘못된 설계입니다. 이 필드는 적절한 정적 파일 처리를 대체하지 않습니다.

---

### BooleanField

class BooleanField(\*\*options)[source](https://docs.djangoproject.com/en/2.0/_modules/django/db/models/fields/#BooleanField)

A true/false field.

이 필드의 기본 양식 위젯은 [CheckboxInput](https://docs.djangoproject.com/en/2.0/ref/forms/widgets/#django.forms.CheckboxInput) 입니다.

[null](https://docs.djangoproject.com/en/2.0/ref/models/fields/#django.db.models.Field.null) 값을 받아 들일 필요가 있다면 대신 [NullBooleanField](https://docs.djangoproject.com/en/2.0/ref/models/fields/#django.db.models.NullBooleanField) 를 사용하십시오.

[Field.default](https://docs.djangoproject.com/en/2.0/ref/models/fields/#django.db.models.Field.default) 가 정의되어 있지 않으면 BooleanField의 기본값은 None입니다.

---

### CharField

class CharField(max_length=None, \*\*options)[source](https://docs.djangoproject.com/en/2.0/_modules/django/db/models/fields/#CharField)

작은 문자열에서 큰 문자열까지의 문자열 필드입니다.

많은 양의 텍스트는 [TextField](https://docs.djangoproject.com/en/2.0/ref/models/fields/#django.db.models.TextField) 를 사용하십시오.

이 필드의 기본 양식 위젯은 [TextInput](https://docs.djangoproject.com/en/2.0/ref/models/fields/#django.db.models.TextField) 입니다.

[CharField](https://docs.djangoproject.com/en/2.0/ref/models/fields/#django.db.models.CharField) 에는 다음과 같은 추가적인 인수가 있습니다.

**CharField.max_length**
필드의 최대 길이 (문자 수)입니다.
max_length 는 데이터베이스 레벨과 Django 의 유효성 검사에서 적용됩니다.

> **Note**
>
> 여러 데이터베이스 백엔드로 이동할 수 있어야 하는 응용 프로그램을 작성하는 경우 일부 백업의 max_Length에 제한이 있음을 알아야 합니다. 자세한 내용은 [database backend notes](https://docs.djangoproject.com/en/2.0/ref/databases/) 를 참조하십시오.

---

### DateField

class DateField(auto_now=False, auto_now_add=False, \*\*options)[source](https://docs.djangoproject.com/en/2.0/_modules/django/db/models/fields/#DateField)

Python에서 datetime.date 인스턴스로 표현되는 날짜입니다.
추가로 몇 가지 선택적 인수가 있습니다.

**DateField.auto_now**
개체가 저장 될 때마다 지금 필드를 자동으로 설정합니다.
“마지막으로 수정 된” 타임 스탬프에 유용합니다.
현재 날짜는 항상 사용됩니다.
재정의 할 수있는 기본값이 아닙니다.

이 필드는 [Mode.save()](https://docs.djangoproject.com/en/2.0/ref/models/instances/#django.db.models.Model.save) 를 호출할 때만 자동으로 업데이트됩니다. 이러한 업데이트에서 필드에 대한 사용자 지정 값을 지정할 수 있지만 [QuerySet.update()](https://docs.djangoproject.com/en/2.0/ref/models/querysets/#django.db.models.query.QuerySet.update) 와 같은 다른 방법으로 필드를 업데이트할 때는 필드가 업데이트되지 않습니다.

**DateField.auto_now_add**
객체가 처음 생성 될 때 자동으로 필드를 현재로 설정합니다.
타임 스탬프 생성에 유용합니다.
현재 날짜는 항상 사용됩니다.
재정의 할 수있는 기본값이 아닙니다.
따라서 객체를 만들 때이 필드의 값을 설정하더라도 무시됩니다.
이 필드를 수정하려면 auto_now_add = True 대신 다음을 설정하십시오.

- For **DateField**: **default=date.today** - from [datetime.date.today()](https://docs.python.org/3/library/datetime.html#datetime.date.today)
- For **DateTimeField**: **default=timezone.now** - from [django.utils.timezone.now()](https://docs.djangoproject.com/en/2.0/ref/utils/#django.utils.timezone.now)

이 필드의 기본 양식 위젯은 [TextInput](https://docs.djangoproject.com/en/2.0/ref/forms/widgets/#django.forms.TextInput) 입니다.
관리자는 JavaScript 캘린더와 “오늘”에 대한 바로 가기를 추가합니다.
**invalid_date** 오류 메시지 키가 추가로 포함됩니다.

auto_node_add, auto_now 및 default 옵션은 상호 배타적입니다. 이러한 옵션을 조합하면 오류가 발생합니다.

> **Note**
>
> 현재 구현된 대로 auto_no또는 auto_no_add를 True로 설정하면 필드에 editable=False및 blank=True가 설정됩니다.

> **Note**
>
> auto_no 및 auto_now_add 옵션은 항상 생성 또는 업데이트 시 [default timezone](https://docs.djangoproject.com/en/2.0/topics/i18n/timezones/#default-current-time-zone) 를 사용합니다. 다른 기능이 필요한 경우, Auto_now 또는 auto_no_adme 을 대신 사용하거나 DateTimed 를 대신 사용하는 대신 사용자가 직접 호출 가능한 기본 값 또는 재지정 **save()**을 사용합니다.

---
