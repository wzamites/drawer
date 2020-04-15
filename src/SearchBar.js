import React from 'react';
import magnifyingGlass from './icons/search-solid.svg'

class SearchBar extends React.Component {
  render() {
    return (
      <form id="search" className="box" autocomplete="off">
        <input type="text" autocomplete="off" aria-label="Search" aria-controls="top-search" data-controller="s-popover"/>
        <img className="magnifyingGlass" src={magnifyingGlass} />
      </form>
    );
  }
}

export default SearchBar;
