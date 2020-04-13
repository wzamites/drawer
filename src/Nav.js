import React from 'react';
import './sideNav.css';

class Nav extends React.Component {

  render() {
    return (
      <div id="mySidenav" class="sidenav">
        <a href="./">Home</a>
        <a href="./bugs">Bugs</a>
        <a href="./epics">Epic</a>
      </div>
    );
  }
}

export default Nav;
