# 방구석 Travllers :: BANGGUSEOK Travellers

## Project Introduce

코로나로 지친 위코더들의 다음 여행지를 골라드립니다.

당신의 환상적이었던 여행의 순간을 담은 사진을 모두에게 보여주세요. 위코더들의 투표를 통해 최고의 여행지를 선정해드립니다!

Reference : [Awwwards](https://www.awwwards.com/)

## Links

Backend Repo: [BACKEND_REPO](https://github.com/wecode-bootcamp-korea/28-2nd-BANGGUSEOK-Traveller-backend)

Figma : [Figma](https://www.figma.com/file/8hd0ZB7Bu6606dcG4ZYilq/BANGGUSEOK-Traveller)

## 팀원

김정현, 안현재, 엄성용 ( Frontend )

노세인, 장우경 ( Backend )

## Skills

Dev Environments

- JavaScript (ES6)
- React Hook v17.0.2
- eslint
- prettier

Packages

- react-router-dom | v6.2.1
- recoil | v0.5.2
- sass | v1.47.0
- styled-components | v5.3.3
- qs | v6.10.3
- fortawecome packages

Collabo Tools

- Git&Github
- Slack
- Notion
- Trello
- Figma

## Contents

- 메인 페이지 (안현재)

```
- 상단 랜덤피드와 하단 리스트들을 표시하는 컴포넌트. 랜덤피드는 공통컴포넌트(RatingCircle) 활용해 점수 시각화.
- 하단 리스트는 백엔드로부터 받은 특정 리스트들과 피드 전체를 표시하는 리스트로 구성.
```

- 필터링 페이지 (김정현)

```
- 커스텀 훅 : 커스텀 쿼리조합기를 통해 필터 조건을 변경할 때마다 get 통신 진행
- 페이지네이션 : 8개를 기준으로 data 요청
- 라우트 네스팅 : 필터링 페이지 url을 기준으로, 상세페이지 url 라우팅
- 타입 분기 : 필터링 페이지를 재사용 컴포넌트화하여 입력되는 url을 통해 일반보기 / 투표가능 보기 로 분기.
```

- 상세 페이지 (안현재, 엄성용)

```
body - 안현재
- 선택한 피드의 디테일을 표시하고, 투표기능이 있는 컴포넌트. 상단부는 공통컴포넌트(TripCard) 재사용.
- 투표기록을 객체형태의 state로 관리하며 승인버튼을 누르면 백엔드로 POST요청.
- response가 이미 투표한 피드라면 경고창 발생.
```

- 재사용 컴포넌트 (전 팀원)

1. PaginationButtons (김정현)
```
8개를 기준으로 페이지네이션.
40개 이하의 데이터가 들어오면 1~5의 번호만 표시된다.
41개 이상의 데이터가 들어오는 경우
예를 들어, 5번 페이지가 눌렸을 때
1 ... 4,5,6 이러한 형태로 페이지네이션 번호가 뿌려지게 된다.
```

2. Kakao Social API (김정현)
```
카카오 소셜 로그인 api를 적용했습니다.
인가 코드를 받아와, 액세스 토큰을 요청하기 전에
유저 타입을 입력받아 백엔드에 엑세스 토큰과 함께 전달합니다.
```

3. NotFound (김정현)
```
라우팅 경로가 없는 경우 등장하는 페이지입니다.
```

4. RatingCircle (김정현)

```
별점에 따라 색이 다르게 변하고, 애니메이션이 부가되는 재사용 컴포넌트입니다.
```

5. RadiusButtons (엄성용)

6. Footer (엄성용)

7. Modal (엄성용)

8. Navigation Bar (엄성용)

9. TripCard (안현재)
```
- 하나의 피드를 받아 정보를 표시. 메인, 트립리스트, 트립디테일 등에서 활용됨.
```

- 전체 리팩토링 (김정현)

1. 로그인한 유저의 경우, Navigation bar의 회원가입/로그인 버튼이 사라지고 '로그아웃' 버튼으로 변화함.
```
Recoil을 사용하여 userToken을 전역에서 관리하여 효과 적용.
```

2. 메인 페이지, 상세 페이지 간이 스켈레톤 적용
```
데이터를 받아오기 직전, 같은 크기와 배경화면을 가진 영역을 그리도록하여
렌더링될 때의 어색함을 감소시킴
background-image: linear gradient로 '로딩 중..' 을 구현가능하나
시간 관계상 빈 바탕 + 영역 길이 적용으로 간이화하였습니다.
```
