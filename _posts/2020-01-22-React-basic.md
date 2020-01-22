---
title: "React-Basic"
date: 2020-01-22
categories: React
---

##### 1. Basic Syntax

- React.createElement
- render(element, root)

```js
import React from "react";
import {render} from "react-dom";

const root = document.querySelector('#react-root');
const element = React.createElement("p", {}, "Hello World");
render(element, root)
```
