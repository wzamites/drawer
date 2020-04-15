import React from 'react';
import NavLink from './NavLink';
import SearchBar from './SearchBar';
import plus from './icons/plus-solid.svg';
import home from './icons/home-solid.svg';
import briefcase from './icons/briefcase-solid.svg';
import people from './icons/user-friends-solid.svg';
import lightbulb from './icons/lightbulb-solid.svg';
import blocks from './icons/th-large-solid.svg';
import charts from './icons/chart-bar-regular.svg';

class Nav extends React.Component {

  render() {
    return (
      <div id="mySidenav" class="sidenav">
        <div className="box top" >
          <h3 className="logo big">PEGA</h3>
          <span>Agile Studio</span>
        </div>
        <SearchBar />
        <NavLink url="./Create" logo={plus} text="Create..." />
        <NavLink url="./" logo={home} text="Home" />
        <NavLink url="./Products" logo={briefcase} text="Products" />
        <NavLink url="./Teams" logo={people} text="Teams" />
        <NavLink url="./Quality" logo={lightbulb} text="Quality" />
        <NavLink url="./Collaboration" logo={blocks} text="Collaboration" />
        <NavLink url="./Reports" logo={charts} text="Reports" />
      </div>
    );
  }
}

export default Nav;
