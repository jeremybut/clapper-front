import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../actions';
import logo from '../../static/media/clapper-icon.svg';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit(e) {
    e.preventDefault();

    this.props.loginUser({
      email: this.refs.email.value,
      password: this.refs.password.value,
    });
  }

  render() {
    return (
      <div className='p-authentication'>
        <div className='g-container'>
          <img src={logo} alt='Logo Clapper' />
          <h1 className='p-authentication__title' id='p-authentication__title'>Login</h1>
          <form onSubmit={this.handleFormSubmit}>
            <div className='c-form-group'>
              <label className='c-label'>Email</label>
              <input type="email" ref="email" className='c-input' />
            </div>
            <div className='c-form-group'>
              <label className='c-label'>Mot de passe</label>
              <input type="text" ref="password" className='c-input' />
            </div>
            <button type="submit" className='c-button'>Go</button>
          </form>
        </div>
      </div>
      );
  }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
  loginUser: ({ email, password }) => dispatch(loginUser({ email, password })),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
