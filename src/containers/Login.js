import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import styled from 'styled-components';
import { ui, spacing, Container as RawContainer } from '../ui';

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
    };

    this.props.dispatchLogin(payload);
  }

  render() {
    return (
      <Container tight>
        <Box>
          <Link to="/">
            <img src={logo} alt="Logo Clapper" />
          </Link>
          <Title>Login</Title>
          <form onSubmit={this.handleFormSubmit}>
            <div>
              <label>Email</label>
              <input type="email" ref="email" />
            </div>
            <div>
              <label>Mot de passe</label>
              <input type="text" ref="password" />
            </div>
            <button type="submit">Se connecter</button>
          </form>
        </Box>
      </Container>
    );
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  dispatchLogin: payload => dispatch(loginUser(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withI18n(Login));
