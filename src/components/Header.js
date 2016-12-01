import React from 'react';
import { Link } from 'react-router';

const Header = props => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/signup">Signup</Link>
      Hello world <button onClick={props.onClick}>{props.foo}</button>
    </div>
  );
}

export default Header;
