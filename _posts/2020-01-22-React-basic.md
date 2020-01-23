---
title: "React-Basic"
date: 2020-01-22
categories: React
---
<br>

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


<br>

##### 2.`props` - Unchange
```js
import React from 'react';

const Article = (props) => {
  return (
    <div className="article">
      <h2>{props.title}</h2>
      <p>{props.body}</p>
    </div>
  );
};

export default Article;

```
<br>
##### 3. `` - Changeable
