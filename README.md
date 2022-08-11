리덕스 사용

리액트 라우터 돔 6 버전

[폴더구조]

**Image** ( 이미지 폴더)

**Common(템플릿)**

- Header.jsx
- Layout.jsx

**Component(기능별)**

- button.jsx ( 버튼 컴포넌트 : 필수 과제)
- Form.jsx
- alcohol
    - AlcoholList ( 주류 리스트)
    - AlcoholItem (주류 단건)
- reply
    - ReplyList.jsx (댓글 리스트)
    - ReplyItem.jsx (댓글 단건)

**Pages**

- Main.jsx ( 메인화면)
- alcohol
    - AlcoholDetail.jsx ( 주류 상세보기)
    - AlcoholUpdate.jsx ( 주류 수정하기 화면)
    - AlcoholCreate.jsx (주류 생성하기 화면)
- ReplyAllFunc(필요한지 일단 보류)

**Redux**

- congifStore
    - Store.js
- **modules**
    - Alcohol.js ( 주류 CRUD)
    - Reply.js (댓글 CRUD)
