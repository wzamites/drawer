import React from 'react';
import './App.css';
import Contents from './Contents';
import Nav from './Nav';

class App extends React.Component {
  render() {
    return (
        <div>
        <Nav />
        <Contents />
        </div>
    );
  }
}

export default App;
