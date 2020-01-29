---
title: "React-onChange"
date: 2020-01-28
categories: React
---

#### onChange

- Get user's change action and return it
- DO NOT USE it with () like `onChange={this.onInputChange()}`, it will run the function instead of returning result of action.
- MUST USE without () like `onChange={this.onInputChange}`


```js
import React from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';

class SearchBar extends React.Component {
  onInputChange(event) {
    console.log(event.target.value);
    // event.target.value;
  }

  render() {
    return (
      <div>
        <InputGroup className="mb-3">
          <FormControl
            type="text"
            placeholder="Search Anything you want to see"
            aria-label="Search Anything you want to see"
            aria-describedby="basic-addon2"
            onChange={this.onInputChange}
          />
          <InputGroup.Append>
            <Button variant="outline-secondary">Button</Button>
          </InputGroup.Append>
        </InputGroup>
      </div>
    );
  }
}

export default SearchBar;
```


![image info](/pictures/200128.png)
