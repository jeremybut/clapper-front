import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { ui, Container, spacing, AlignCenter } from '../ui';
import logo from '../../static/media/clapper-icon.svg';
import FormCredentials from './../components/Auth/FormCredentials';
import { loginUser } from '../actions/login';
import withI18n from '../components/Ui/withI18n';

const Authentication = styled.div`
  min-height: 100vh;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${spacing(3)} 0;
`;

const Box = styled.div`
  display: flex;
`;

const Logo = styled.img`
  margin-bottom: ${spacing(2)};
  height: 96px;
`;

class Login extends Component {
  constructor(props) {
    super(props);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit(credentials) {
    this.props.dispatchLoginUser(credentials);
  }

  render() {
    return (
      <Authentication>
        <Container tight>
          <AlignCenter>
            <Logo src={logo} alt="Logo Clapper" />
          </AlignCenter>
          <Box>
            <FormCredentials
              onSubmit={this.handleFormSubmit}
              action='login'
              btnText={'Connexion'}
            />
          </Box>
        </Container>
      </Authentication>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  dispatchLoginUser: credentials => dispatch(loginUser(credentials)),
});

export default connect(null, mapDispatchToProps)(withI18n(Login));
