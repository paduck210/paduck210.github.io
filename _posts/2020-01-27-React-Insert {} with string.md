---
title: "React-Props"
date: 2020-01-27
categories: React
---



```js
const SeasonDisplay = props => {
  const season = getSeason(props.lat, new Date().getMonth());
  const text =
    season === 'winter' ? 'Burr, it is chilly' : 'Let`s hit the beach';
  const icon = season === 'winter' ? 'snowflake' : 'sun';

  return (
    <div>
      <i className={`${icon} icon`}></i>
      <h1>{text}</h1>
      <i className={`${icon} icon`}></i>
    </div>
  );
};
```
