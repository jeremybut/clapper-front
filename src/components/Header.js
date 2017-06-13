import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import { logout } from '../actions/logout';
import logo from '../../static/media/clapper-logo.svg';

class Header extends Component {
  constructor() {
    super();

    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    this.props.dispatchLogout();
  }

  render() {
    return (
      <header className='g-header'>
        <nav className='g-header__nav'>
          <ul className='g-header__navigation'>
            <li>
              <Link to='/'>
                <img src={logo} alt='Logo Clapper' />
              </Link>
            </li>
          </ul>
          <ul className='g-header__navigation'>
            <li className='g-header__list'>
              <Link to="/" className='g-header__link'>Home</Link>
            </li>
            <li className='g-header__list'>
              <Link to="/recent-movies" className='g-header__link'>Recent Movies</Link>
            </li>
            <li className='g-header__list'>
              <button className='c-button' onClick={this.handleLogout}>Logout</button>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  dispatchLogout: () => dispatch(logout()),
});

export default connect(null, mapDispatchToProps)(Header);
