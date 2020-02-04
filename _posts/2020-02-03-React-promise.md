---
title: React-Promise
date: 2020-02-03
categories: React
---


#### Handling Request with `.then`


```js
class App extends React.Component {
  onSearchSubmit(term) {
    axios
      .get('https://api.unsplash.com/search/photos', {
        params: { query: term },
        headers: { Authorization: process.env.REACT_APP_UNSPLASH_ID },
      })
      .then(response => {
        console.log(response.data.results);
      });
  }
```

<br>

#### working with `async`

1) `async` - in front of method name
2) `await` - in front of code waiting result
3) `const response` - whatever (2) return, asign it to variable to use it later


```js
class App extends React.Component {
  async onSearchSubmit(term) {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      params: { query: term },
      headers: { Authorization: process.env.REACT_APP_UNSPLASH_ID },
    });

    console.log(response.data.results);
  }
```
