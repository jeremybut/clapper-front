import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { loginUser } from '../actions/login';
import logo from '../../static/media/clapper-icon.svg';
import withI18n from '../components/Ui/withI18n';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit(e) {
    e.preventDefault();

    const payload = {
      email: this.refs.email.value,
      password: this.refs.password.value,
    }

    this.props.dispatchLogin(payload);
  }

  render() {
    return (
      <div className='p-authentication'>
        <div className='g-container'>
          <Link to='/'>
            <img src={logo} alt='Logo Clapper' />
          </Link>
          <h1 className='p-authentication__title'>Login</h1>
          <form onSubmit={this.handleFormSubmit}>
            <div className='c-form-group'>
              <label className='c-label'>Email</label>
              <input type="email" ref="email" className='c-input' />
            </div>
            <div className='c-form-group'>
              <label className='c-label'>Mot de passe</label>
              <input type="text" ref="password" className='c-input' />
            </div>
            <button type="submit" className='c-button'>Se connecter</button>
          </form>
        </div>
      </div>
      );
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  dispatchLogin: (payload) => dispatch(loginUser(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withI18n(Login));
