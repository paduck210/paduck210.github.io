---
title: Javascript - callback
date: 2021-03-02
categories: Javascript
---

<br>

[https://medium.com/@oasis9217/번역-javascript-도대체-콜백이-뭔데-65bb82556c56](https://medium.com/@oasis9217/%EB%B2%88%EC%97%AD-javascript-%EB%8F%84%EB%8C%80%EC%B2%B4-%EC%BD%9C%EB%B0%B1%EC%9D%B4-%EB%AD%94%EB%8D%B0-65bb82556c56)

간단히. 다른 함수가 실행을 끝낸 뒤 실행되는 - call back 되는 함수를 말한다
자세히. 함수는 object, 함수는 다른 함수의 argument 가 될수도 어떤 함수에 의해 return될 수도 있다

**다른 함수의 argument 로 쓰이는 함수를 call back 함수라고 한다**

---

[Array.map](http://array.map) 도 callBackFn을 Argument 로 받는다

```jsx
const numbers = [1, 2, 3];
const newNums = numbers.map((num) => num + 100); // [101, 102,103]

// 이부분에서 num => num + 100 이 부분이 call back fn 임
// 이렇게 Refactor 가능

const numbers = [1, 2, 3];
const add100 = (num) => num + 100;
const newNums = numbers.map(add100); // [101, 102,103]
```

- doHomework function은 callback function을 argument 로 받음
- 내부 처리과정을 실행하고, 다음 callback 함수 처리 가능

```jsx
function doHomework(subject, callback) {
  setTimeout(() => {alert(`Starting my ${subject} homework.`), 500};
  callback();
}
function alertFinished(){
  alert('Finished my homework');
}
doHomework('math', alertFinished);
```
