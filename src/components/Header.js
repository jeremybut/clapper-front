import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { logoutUser } from '../actions';

class Header extends Component {
  constructor() {
    super();

    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    this.props.logout();
  }

  render() {
    return (
      <div>
        <Link to="/">Home</Link>
        <button onClick={this.handleLogout}>Logout</button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logoutUser()),
});

export default connect(null, mapDispatchToProps)(Header);
