import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { ui, Container, spacing, AlignCenter } from '../../ui';
import logo from '../../../static/media/clapper-icon.svg';
import LoginFormCredentials from './LoginFormCredentials';
import LoginFormSettings from './LoginFormSettings';
import { loginUser } from '../../actions/login';

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

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);

    this.state = {
      page: 1,
    };
  }

  nextPage() {
    this.setState({ page: this.state.page + 1 });
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 });
  }

  handleFormSubmit(credentials) {
    this.props.dispatchLoginUser(credentials);
  }

  render() {
    const { page } = this.state;
    return (
      <Authentication>
        <Container tight>
          <AlignCenter>
            <Logo src={logo} alt="Logo Clapper" />
          </AlignCenter>
          {page === 1 &&
            <Box>
              <LoginFormCredentials onSubmit={this.nextPage} />
            </Box>
          }
          {page === 2 &&
            <Box>
              <LoginFormSettings
                previousPage={this.previousPage}
                onSubmit={this.handleFormSubmit}
              />
            </Box>
          }
        </Container>
      </Authentication>
    );
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  dispatchLoginUser: credentials => dispatch(loginUser(credentials)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
