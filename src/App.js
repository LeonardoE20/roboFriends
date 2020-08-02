import React, { Component } from 'react';
import CardList from './CardList';
import { robots } from './robots';
import SearchBox from './SearchBox'
import { Fragment } from 'react';

class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: robots,
      searchfield: '',
    }
  }
  render() {
    return (
      <div className='tc'>
        <h1>RoboFriends</h1>
        <SearchBox />
        <CardList robots={this.state.robots} />
      </div>
    );
  }
}
export default App;