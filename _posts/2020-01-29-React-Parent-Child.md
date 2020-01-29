---
title: React- Parent Child
date: 2020-01-29
categories: React
---

#### How to pass data from child component to its parent in ReactJS?


---

#### Father -> Child
```js
import React from 'react';
import SearchBar from './SearchBar_copy';

class App extends React.Component {

  father(term) {
    console.log(term);
  }

  render() {
    return (
      <div>
        <SearchBar fromChild={this.father} />
      </div>
    );
  }
}

export default App;
```
---
#### Child -> Father
```js
import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };
  //
  searchValue(event) {
    event.preventDefault();
    this.props.fromChild(this.state.term);
  }
  //
  // render() {
  //   return (
  //     <div className="ui segment">
  //       <form
  //         onSubmit={event => {
  //           this.searchValue(event);
  //         }}
  //         className="ui form"
  //       >
  //         <div className="field">
  //           <label>Image Search</label>
  //           <input
  //             type="text"
  //             value={this.state.term}
  //             onChange={event => this.setState({ term: event.target.value })}
  //           />
  //         </div>
  //       </form>
  //     </div>
    );
  }
}

export default SearchBar;
```
