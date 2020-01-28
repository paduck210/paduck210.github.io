---
title: "React-Create Config & Refactor"
date: 2020-01-28
categories: React
---

### Before

```js
import React from 'react';

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter';
  } else {
    return lat > 0 ? 'winter' : 'summer';
  }
};

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

export default SeasonDisplay;
```

### After

- make `const seasonConfig`
- save data in the config const and call it on the bottom
- Better way to manage data, especially team mate can understand and update it later more easily. 



```js
import React from 'react';

const seasonConfig = {
  summer: {
    text: 'let"s hit the beach',
    iconName: 'sun'
  },
  winter: {
    text: 'let`s hit the beach',
    iconName: 'snowflake'
  },
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter';
  } else {
    return lat > 0 ? 'winter' : 'summer';
  }
};

const SeasonDisplay = props => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, iconName } = seasonConfig[season];
  return (
    <div>
      <i className={`${iconName} icon`}></i>
      <h1>{text}</h1>
      <i className={`${iconName} icon`}></i>
    </div>
  );
};

export default SeasonDisplay;

```
