---
title: "JS- Integer"
date: 2020-01-20
categories: Javascript
---

#### Increment

```js
x = 17
y = x++
// x = 18, y = 17

a = 99
b = ++a
// a = 100, b = 100

number = 1
number = ++number // number = 2
//number += 1 
```

```js
const array = Array.from(Array(10).keys());
//=> [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const array1 = [...Array(10).keys()].map(x => ++x);
const array2 = [...Array(10).keys()].map(x => x += 1);
//=> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```
