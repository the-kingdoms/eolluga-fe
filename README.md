## FSD 구조 사용 규칙 및 개념

<img src="https://feature-sliced.design/assets/images/visual_schema-e826067f573946613dcdc76e3f585082.jpg"/>

### 규칙

1. 레이어 내의 모듈에서는 오직 하위 레이어의 모듈만 Import 해야 합니다.
   <p style="color: gray; font-style: italic;">ex. `widgets > cart > ui > CartList.tsx`에서는 widgets 레이어의 하위 레이어인 features, entities, shared 내의 모듈만 Import힐 수 있습니다.</p>

<br/>

2. 슬라이스는 동일 레이어에 있는 다른 슬라이스의 모듈을 Import 하면 안 됩니다.
   <p style="color: gray; font-style: italic;">ex. `widgets > cart > ui > CartList.tsx`에서는 cart 슬라이스와 다른 슬라이스인 `widgets > order-summary > ui > Summary.tsx`를 Import 할 수 없습니다.</p>

<br/>

3.  shared 레이어에서는 슬라이스를 생성하면 안 됩니다.
    <p style="color: gray; font-style: italic;">ex. `shared > ui > Button.tsx`이나 `shared > utils > calculateTotal.ts`와 같이 레이어 다음 바로 세그먼트를 생성합니다.</p>

<br/>

4. 위의 규칙을 지키면서 슬라이스, 세그먼트 폴더를 레이어에 생성하고 그 하위에 파일을 생성해야 합니다.
   <p style="color: gray; font-style: italic;">ex. `widgets > cart > CartList.tsx` 또는 `shared > calculateTotal.ts` 와 같이 레이어 또는 슬라이스에 파일을 생성하지 않아야 합니다.</p>

<br/>

5. Export는 각 레이어 바로 아래에 생성된 index.ts 파일에서 진행해야 합니다.
   <p style="color: gray; font-style: italic;">ex. `widgets > cart > CartList.tsx`에서 export 후 `widgets > index.ts`로 가져와서 다시 export 하여 `app > cart > page.tsx`에서 import 하는 방식으로 사용됩니다.</p>

<hr/>

### Layers

Layer는 어플리케이션 전반에 영향을 미칠 수 있는 구성요소를 각자의 역할에 따라 분류한 것입니다.<br/>
얼루가 프로젝트에서는 app, widgets, features, entities, shared layer를 사용합니다.

#### app

- app의 entry point 역할
- 전체 app의 로직이 초기화 되는 곳

<i>ex. routing, entrypoints, global styles, providers</i>

#### widgets

- 하나의 완전한 기능이나 UI 요소를 제공
- 특정 작업을 완료하는 데 필요한 모든 것을 포함하는 독립적인 구성 요소

<i>ex. Menu Select Widget, Cart Widget, Order Summary Widget, </i>

#### features

- app의 여러 부분에서 동일한 방식으로 사용될 수 있는 특정 기능
- 사용자에게 비즈니스 가치를 제공하는 기능

<i>ex. Staff Call Feature, Update Item Count, Order Menu</i>

#### entities

- 중요한 비즈니스 데이터 개체
- API 어댑터를 작성하는 곳

<i>ex. Menu Item Entity, Order Entity</i>

#### shared

- 특정한 비즈니스 로직에 종속되지 않는 재사용 가능한 컴포넌트와 유틸리티 모음

<i>ex. Calculate Total Util, Date Formatter UI</i>

<hr/>

### Slices

slice는 비지니스 도메인 별로 코드를 분할하고 논리적으로 관련된 모듈을 응집시킵니다.

<hr/>

### Segments

세그먼트는 코드를 목적에 따라 그룹화 시킵니다.

#### ui

- UI 표시와 관련된 모든 것

<i>ex. UI components, date formatters, styles</i>

#### api

- 백엔드와 상호작용하는 모든 것

<i>ex. request functions, data types, mappers</i>

#### model

- 데이터와 비즈니스 로직을 처리하는 모든 것

<i>ex. schemas, interfaces, stores, and business logic</i>

#### lib

- 슬라이스 내에서 필요로 하는 라이브러리 코드

#### consts

- 슬라이스 내에서 사용하는 상수

#### config

- app 설정을 관리하는 모든 것

<i>ex. configuration files and feature flags</i>
