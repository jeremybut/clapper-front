import React, { Component } from 'react';
import { Link } from 'react-router';

const Header = props => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/zorglub">404</Link>
      Hello world <button onClick={props.onClick}>{props.foo}</button>
    </div>
  );
}

export default Header;
