---
title: "React-onChange"
date: 2020-01-28
categories: React
---


#### OLD FASHION:  onChange- Javascript way

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



#### BEGINNER WAY: Refactor `onChange` in online code

- Instead of making a event function, store event function itself as a single line code
- `onChange={event => console.log(event.target.value)}`


```js

class SearchBar extends React.Component {
  // onInputChange(event) {
  //   console.log(e.target.value);
  //   // e.target.value;
  // }

  render() {
    return (
      <div>
        <InputGroup className="mb-3">
          <FormControl
            type="text"
            placeholder="Search Anything you want to see"
            onChange={e => console.log(e.target.value)}
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

---

#### BEGINNER WAY: Change Uncontrol element to Control element

- 1) Set state fist,
- 2) Event listen and setState > Render automatically
- 3) New state term store into value

```js
class SearchBar extends React.Component {
  state = { term: '' };


  // render() {
  //   return (
  //     <div>
  //       <InputGroup className="mb-3">
  //         <FormControl
  //           type="text"
  //           placeholder="Search Anything you want to see"
            value={this.state.term}
            onChange={e => this.setState({ term: e.target.value })}
//           />
//           <InputGroup.Append>
//             <Button variant="outline-secondary">Button</Button>
//           </InputGroup.Append>
//         </InputGroup>
//       </div>
//     );
//   }
// }
//
// export default SearchBar;
```
