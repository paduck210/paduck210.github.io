---
title: React- avoid `this` bug
date: 2020-01-29
categories: React
---
- In case of Event listener, need to use `onClick``onSubmit``onChange`
- But when you call event listener with `this`, it means `window` not a class we want.
- So we need to bind it, to call right `this`



<br>


#### Problem - Inline callback

- In below codes, `this` === `SearchBar`
- But In `onFormSubmit`, `this` != 'onFormSubmit' and cause error: `TypeError: Cannot read property 'state' of undefined`

```js
// import React from 'react';ÂÂΩΩ
class SearchBar extends React.Component {
  state = { term: '' };

  onFormSubmit(event) {
    event.preventDefault();
    console.log(this.state.term);
  }
  render() {
    return (
      // <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
//           <div className="field">
//             <label>Image Search</label>
//             <input
//               type="text"
//               placeholder="Search Anything you want to see"
//               value={this.state.term}
//               onChange={e => this.setState({ term: e.target.value })}
//             />
//           </div>
//         </form>
//       </div>
//     );
//   }
// }

```
---

<br>


#### Way1 - Using arrow function when we call it
- when we use it, call it and run as function



```js
import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };

  onFormSubmit(event) {
    event.preventDefault();
    console.log(this.state.term);
  }

  render() {
    return (
      // <div className="ui segment">
        <form onSubmit={(event) => this.onFormSubmit(event)} className="ui form">
//           <div className="field">
//             <label>Image Search</label>
//           </div>
//         </form>
//       </div>
//     );
//   }
// }

export default SearchBar;
```
---

<br>


#### Way2 - Change the function to arrow function
- Thanks to arrow function, `this` assign to the `onFormSubmit` function


```js
// import React from 'react';
//
class SearchBar extends React.Component {
  state = { term: '' };

  onFormSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.term);
  }

export default SearchBar;
```






---

#### FYI

```js
class Car {
	setDriveSound(sound) {
    this.sound = sound;
  }

  drive() {
    return this.sound;
  }
}


const tico = new Car();
tico.setDriveSound('vroom');
tico.drive()
// vroom

const truck = {
  sound: 'putputput',
  driveMyTruck: tico.drive // can't put this or truck instead of tico
}
truck.driveMyTruck()
// putputput


const drive = car.drive;
drive()
//ReferenceError: car is not defined

```
