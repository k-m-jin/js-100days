# storage
- html5 기본 api
- 최대 5mb 까지 저장 가능

## local storage
- 직접 삭제하기 전까진 브라우저에 남아있음
- 현재 사용하는 그 기기에, 도메인 별로 저장


## session storage
- 브라우저를 닫는 순간 삭제

> 문자열
```js
if(typeof(storage) !== 'undefined') {
  localStorage.setItem("name","myeongjin")
  localStorage.getItem("name")


  sessionStorage.setItem("name","myeongjin")
  sessionStorage.getItem("name")
}

```
> 배열이나 객체 
```js
// 객체 로컬 저장
const person = {
  fullName: "Nizk Neo",
  location: "Abuja",
};

localStorage.setItem("user", JSON.stringify(person));

// 배열 로컬 저장
const fruits = ["Apple", "Banana", "Cherry"];

localStorage.setItem("fruits", JSON.stringify(fruits));
```