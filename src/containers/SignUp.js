import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signupUser } from '../actions';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit(e) {
    e.preventDefault();

    this.props.signupUser({
      email: this.refs.email.value,
      password: this.refs.password.value,
      kodi_host: this.refs.kodi_host.value,
      kodi_port: this.refs.kodi_port.value,
      kodi_username: this.refs.kodi_username.value,
      kodi_password: this.refs.kodi_password.value,
    });
  }

  render() {
    return (
      <div>
        <h1>Signup</h1>
        <form onSubmit={this.handleFormSubmit}>
          <p><input type="email" ref="email" placeholder='email' /></p>
          <p><input type="text" ref="password" placeholder='password' /></p>
          <p><input type="text" ref="kodi_host" placeholder='kodi_host' /></p>
          <p><input type="text" ref="kodi_port" placeholder='kodi_port' /></p>
          <p><input type="text" ref="kodi_username" placeholder='kodi_username' /></p>
          <p><input type="text" ref="kodi_password" placeholder='kodi_password' /></p>
          <button type="submit">Go</button>
        </form>
      </div>
      );
  }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
  signupUser: ({
    email, password, kodi_host, kodi_port, kodi_username, kodi_password
  }) => dispatch(signupUser({
    email, password, kodi_host, kodi_port, kodi_username, kodi_password
  })),
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
