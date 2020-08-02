import React from 'react';
import CardList from './CardList';
import { robots } from './robots';
import SearchBox from './SearchBox'
import { Fragment } from 'react';

const App = () => {
  return (
    <Fragment>
      <h1>RoboFriends</h1>
      <SearchBox />
      <CardList robots={robots} />
    </Fragment>
  );
}
export default App;