## 분실물을 위한 중개 플랫폼, whereQR
<img width="853" alt="image" src="https://github.com/baek-park/whereQR-front/assets/83868210/afdb849e-d175-42d6-a1bd-4db9014ad6e1">

<br>
<br>

## 프로젝트 소개 
whereQR은 분실물을 위한 중개 플랫폼입니다. 

물건을 잃어버렸을 때를 대비해 소지품에 QR코드 스티커를 부착하여 분실시 보다 손쉽게 물건을 찾을 수 있어요.

분실시 물건 습득자가 QR 코드를 스캔하면 주인과 채팅을 할 수 있습니다. 

스티커가 부착되지 않은 분실물을 위한 커뮤니티 공간을 제공합니다. 

<br>

## 기술 스택
- Language: Javascript
- Framework: React
- Library: styled components, axios, stomp, react-query
- CI/CD: Github Actions, Docker

<br>

## 주요 기능
### QR 코드 스캔
- react-qr-reader 라이브러리를 이용한 스티커의 qr 코드 스캔 기능
### 채팅 
- stomp 소켓 통신을 이용한 채팅 
### 소셜 로그인
- 카카오 로그인 
### 마이페이지 
- 등록한 qr 코드 관리 및 회원 정보 관리

<br>


## 서비스 화면
<img width="334" alt="image" src="https://github.com/baek-park/whereQR-front/assets/83868210/124df2f7-58cd-4997-af33-921408099c9f">
<img width="334" alt="image" src="https://github.com/baek-park/whereQR-front/assets/83868210/496f65fe-e986-40cf-a7e5-f7cdbd3f5f5b">
<img width="334" alt="image" src="https://github.com/baek-park/whereQR-front/assets/83868210/0fdd15cf-764e-45b7-bf53-e4daf8a3a7d3">
<img width="334" alt="image" src="https://github.com/baek-park/whereQR-front/assets/83868210/80fedefd-314a-4879-a6a3-37b195fcf3fd">
<img width="334" alt="image" src="https://github.com/baek-park/whereQR-front/assets/83868210/9cb7268c-b306-4574-98b1-7fbe96e998c0">

<br>


### 추가 개발 예정 기능
1. 분실물 게시판 
2. 보증금 기능 추가

<br>
   

## 실행 방법

### Setup
```
git clone https://github.com/baek-park/whereQR-front.git

cd whereQR-front

npm install legacy-peer-deps
```

<br>

.env.production 파일 설정
```
VITE_REST_API_KEY="kakao login api key"
VITE_REDIRECT_URI="dev redirect_uri"
VITE_BASE_URI="dev server uri"
VITE_CHAT_ENDPOINT="dev server chat endpoint"
```
.env.development 파일 설정
```
VITE_REST_API_KEY="kakao login api key"
VITE_REDIRECT_URI="prod redirect_uri"
VITE_BASE_URI="prod server uri"
VITE_CHAT_ENDPOINT="prod server chat endpoint"
```

### Start dev
```
npm run dev -- --port 3000
```


### Build with dockerfile
```
docker build -t {dockerhub_id}/{docker_image} .

docker tag {docker_image} {dockerhub_id}/{docker_image}

docker push {dockerhub_id}/{docker_image}
```
Docker hub에 배포된 image: tnfus916/whereqr-frontend:latest 

<br>

## 창업동아리 발표 자료
<img width="700" alt="image" src="https://github.com/baeksoojin/whereQR_Spring_version/assets/74058047/ffeb7b21-9dce-4283-b739-f51d3272ac29">
<img width="700" alt="image" src="https://github.com/baeksoojin/whereQR_Spring_version/assets/74058047/c3a5fe3f-e35d-4e91-8c21-3b5952c4a042">
<img width="700" alt="image" src="https://github.com/baeksoojin/whereQR_Spring_version/assets/74058047/8ee698a5-b3d0-4840-8ca2-481a7a080abd">
<img width="700" alt="image" src="https://github.com/baeksoojin/whereQR_Spring_version/assets/74058047/e4109fce-aa20-4a31-a352-a73544e40498">
<img width="700" alt="image" src="https://github.com/baeksoojin/whereQR_Spring_version/assets/74058047/a06392c1-b880-432c-a31e-b670fda016fa">


