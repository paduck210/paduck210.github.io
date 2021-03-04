---
title: Javascript - filter, includes, forEach
date: 2021-03-04
categories: Javascript
---

<br>

#### 1. filter - return `Array`

FYI. map - also return `Array`

```js
const numbs = [10, 20, 30];

const callBack = (n) => n > 15;
const biggerThan15 = numbs.filter(callBack);
console.log(biggerThan15); //[ 20, 30 ]
```

<br>

#### 2. forEach - doesn't return array

The forEach() method executes a provided function once for each array element.

```js
let maybeJs = "Javascript";
let js = ["js", "jscript"];
if (!js.includes(maybeJs.toLowerCase())) {
  js.push(maybeJs.toLowerCase());
}
console.log(js); //[ 'js', 'jscript', 'javascript' ]
```

<br>

#### 3. filter - return `boolean`

The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.

```js
let maybeJs = "Javascript";
let js = ["js", "jscript"];
if (!js.includes(maybeJs.toLowerCase())) {
  js.push(maybeJs.toLowerCase());
}

console.log(js);
```
