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
      <div className='p-authentication'>
        <div className='g-container'>
          <h1 className='p-authentication__title'>Signup</h1>
          <form onSubmit={this.handleFormSubmit}>
            <div className='c-form-group'>
              <label>Email</label>
              <input type="email" ref="email" />
            </div>
            <div className='c-form-group'>
              <label>Mot de passe</label>
              <input type="text" ref="password" />
            </div>
            <div className='c-form-group'>
              <label>Kodi Host</label>
              <input type="text" ref="kodiHost" />
            </div>
            <div className='c-form-group'>
              <label>Kodi Port</label>
              <input type="text" ref="kodiPort" />
            </div>
            <div className='c-form-group'>
              <label>Kodi Username</label>
              <input type="text" ref="kodiUsername" />
            </div>
            <div className='c-form-group'>
              <label>Kodi Mot de passe</label>
              <input type="text" ref="kodiPassword" />
            </div>
            <button type="submit">S'inscrire</button>
          </form>
        </div>
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
