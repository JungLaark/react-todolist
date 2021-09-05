# todo app
    - 여기에 달력을 넣어서 해당 일을 클릭하면 아래에 해당일자의 todo list가 나오게끔 하려면 디비에 연결을 해야한다. 
## 환경설정 
### react 프로젝트 생성
    - yarn create react-app todo-app
    - yarn start 
### Sass 사용 
    - yarn add node-sass@4.14.1 classnames react-icons
    - 조건부 스타일링을 위해 classnames 사용 
    - 스타일 연습하는 곳 : http://flexboxfroggy.com/#ko
    - 아이콘 이미지 : https://react-icons.netlify.com/#/icons/md

- 한 번 입력하고 추가 버튼 누르면 시간이 제대로 나오질 않는다 

## 추가기능
    - 모든건 app.js 로부터 받아서 쓴다. 
    - TodoInsert component에는 onInsert라는 함수를 넘겨준다.
    - TodoList component에는 todos라는 객체를 넘겨준다.
    - TodoList component에서는 todos라는 객체를 TodoListItem comp.에 넘겨준다.
## 삭제기능

## 수정기능 

## 추가사항
    - 여기다 달력을 넣고 하려면 최상위 컴포넌트에 달력을 넣어서 해야하나

## 많은 데이터 렌더링 

## 성능 개선 