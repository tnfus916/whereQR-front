## whereQr-front 

> 실행 방법

```
cd whereQR-front

npm install

npm run dev -- --port 3000

```

**whereQR이 무엇인가요??**

![image](https://github.com/baeksoojin/whereQR_Spring_version/assets/74058047/ffeb7b21-9dce-4283-b739-f51d3272ac29)
![image](https://github.com/baeksoojin/whereQR_Spring_version/assets/74058047/c3a5fe3f-e35d-4e91-8c21-3b5952c4a042)
![image](https://github.com/baeksoojin/whereQR_Spring_version/assets/74058047/8ee698a5-b3d0-4840-8ca2-481a7a080abd)
![image](https://github.com/baeksoojin/whereQR_Spring_version/assets/74058047/e4109fce-aa20-4a31-a352-a73544e40498)
![image](https://github.com/baeksoojin/whereQR_Spring_version/assets/74058047/a06392c1-b880-432c-a31e-b670fda016fa)


[whereQr이란?](https://towering-beach-ce0.notion.site/whereQR-sprint1-2a8a1b1f9dba4ee697d6785cd8019f08?pvs=4 ) 에서 확인이 가능합니다.


### dockerfile build후 docker hub에 배포
docker hub에 배포된 image ( tnfus916/whereqr-front:ver1.4 )



### CI/CD 구축 단계(Jenkins 활용)

1. 프리티어로 중단 -> 동국대학교 창업동아리 선정(완료). -> 지원금 활용 예정.<br>

## 진행현황

### 축제 당일

- 활용 QR코드
<img width="400" alt="image" src="https://github.com/baek-park/whereQR_Spring_version/assets/74058047/cbf9f76a-e4d7-4264-968f-4034a08f7c80">

### 보완해야할 사항
1. 회원가입 유효성 검사 로직을 추가한다.
2. 토큰 예외 처리 

- 추가사항
1. 카카오톡 OAuth를 적용. 변경. 다만, 전화번호는 필수가 아니기에 회원가입 창으로 넘기기
2. 채팅 내장시키기
3. 보증금 기능 추가



