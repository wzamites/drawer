import React from 'react';

class NavLink extends React.Component {
  render() {
    return (
      <a href={this.props.url}>
      <div className="box" >
        <img
          className="logo icon"
          src={this.props.logo}
          alt={this.props.text}
        />
        <span><b>{this.props.text}</b></span>
      </div>
      </a>
    );
  }
}

export default NavLink;
