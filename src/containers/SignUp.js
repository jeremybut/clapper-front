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
      kodi_host: this.refs.kodiHost.value,
      kodi_port: this.refs.kodiPort.value,
      kodi_username: this.refs.kodiUsername.value,
      kodi_password: this.refs.kodiPassword.value,
    });
  }

  render() {
    return (
      <div>
        <h1>Signup</h1>
        <form onSubmit={this.handleFormSubmit}>
          <p>
            <input type="email" ref="email" />
          </p>
          <p>
            <input type="text" ref="password" />
          </p>
          <p>
            <input type="text" ref="kodiHost" />
          </p>
          <p>
            <input type="text" ref="kodiPort" />
          </p>
          <p>
            <input type="text" ref="kodiUsername" />
          </p>
          <p>
            <input type="text" ref="kodiPassword" />
          </p>
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
