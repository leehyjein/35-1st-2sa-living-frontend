# 🏡CASA LIVING Clone Coding
디자인 라이프를 위한 CSLV 가구 스토어 까사리빙을 클론코딩하였습니다😊!
<br/>
<br/>
![main2](https://user-images.githubusercontent.com/80885540/182041026-f73988c6-823d-4ab0-b0a0-284b4665e24b.PNG)

<br/>
<br/>

# 📆제작 기간 및 팀원 소개👨‍💻
2022/07/18 ~ 2022/07/28
- 이번 프로젝트는 프론트엔드 4명(React), 백엔드 3명(django)이 함께 진행한 프로젝트입니다.
- 클론코딩 취지에 맞게 최대한 실제 웹사이트의 기능 및 디자인을 똑같이 구현하는 데에 집중하였습니다.
<br/>
<br/>

# 💻Frond-end
구단희🙎‍♀️: 상품 상세페이지 담당<br/>
박성은🙎‍♀️: 상품 리스트, 좋아요 기능 담당<br/>
이혜진🙎‍♀️: 로그인/로그아웃, 회원가입페이지, 약관동의 기능 담당<br/>
정억화🙍‍♂️: 메인페이지, 마이페이지, 사이드메뉴 담당 <br/>

# 💻Back-end
- [GitHub 바로가기](https://github.com/wecode-bootcamp-korea/35-1st-2sa-living-backend)
<br/>
<br/>

# 🎥Youtube 영상 링크
- [영상 바로가기](https://youtu.be/WXSnAXHD1bo)
<br/>
<br/>

# 🛠Front-end 기술 스택 및 개발 환경 
<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"><img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"><img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"><img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"><img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white"><img src="https://img.shields.io/badge/Scss-CC6699?style=for-the-badge&logo=Sass&logoColor=white">

<br/>
<br/>

# ✔🗒️ 페이지 & 기능
## 로그인, 회원가입 페이지
![](https://velog.velcdn.com/images/koooky35_b/post/f44bac40-b91f-4900-86b0-76895b06c724/image.gif)
</br>
### * 로그인, 회원가입<br/>
:JWT를 사용하여 로그인과 회원가입을 구현<br/>
:이메일 유효성 검사(알파벳 소문자(a~z), 숫자(0~9), 특수문자 @, .을 포함)<br/>
:비밀번호 유효성 검사(최소 6자 이상 20자 미만, 최소 하나의 대문자, 소문자, 하나의 숫자 및 하나의 특수 문자<br/>
:입력한 정보가 양식에 맞지 않을 경우 사용자에게 표시<br/>
:미입력 정보 있을 시 alert창 띄운 후 로그인 및 회원가입 실패<br/>
:회원정보 DB에 저장, 회원가입 완료 후 로그인 페이지로 이동<br/>
<br/>

### * 약관 동의 기능 <br/>
: 모두 동의하기 체크박스 클릭시 모든 약관 선택<br/>
: 모두 동의 후 1개라도 체크 박스를 해제시 모두 동의하기 해제<br/>
: 모든 체크박스가 선택될 경우 모두 동의하기 체크박스 선택<br/>
: 필수 동의 사항에 동의하지 않으면 회원가입  비활성화+alert창 출력<br/>

<br/>
<br/>
![](https://velog.velcdn.com/images/koooky35_b/post/6dd37e7b-2024-4490-8f23-c98a788a9985/image.gif)

<br/>
### Main-page <br/>
: 바닐라 스크립트로 슬라이드 기능 구현<br/>
: 팀원이 개발한 컨포넌트를 사용하여 하단에 상품 출력<br/>
<br/>
<br/>
![](https://velog.velcdn.com/images/koooky35_b/post/9b4938fb-34cd-4429-a759-e7ebd1c98465/image.gif)

<br/>
## 3. List-page
### 하트 기능
:토큰이 있는지 없는지를 먼저 확인하고 로그인하여 하트의 정보를 가져온다
:로그인후 하트를 누른 이력이 있으면 색이 채워진 정보를 받아오고 아닐 경우는 빈 하트의 정보를 가져 오도록 구현
<br/>
### 페이지네이션 기능
:타이을 값을 고정 배열로 두어서 받아오는 데이터의 id값고 비교하여 해당 상품의 타이틀과 데이터가 화면에 나오도록 구현
:한페이지당 기본적으로 보이는 상품수를 4개로 제한하고 옵션에 따라 8개로 limit을 바꾸어 정보를 받아오도록 구현
:다음페이지로 넘어갈 경우 offset이 바뀌어 다음 상품부터 설장한 상품 수 만큼 화면에 보이도록 구현
<br/>
### 검색기능
:검색창에 알파벳을 검색 했을때 알파벳이 브랜드 이름에 포함될 경우 페이지에 뜰 수 있도록 구현
<br/>
<br/>
