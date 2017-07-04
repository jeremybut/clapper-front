import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { ui, Container, spacing, AlignCenter } from '../ui';
import logo from '../../static/media/clapper-icon.svg';
import FormCredentials from '../components/Auth/FormCredentials';
import FormSettings from '../components/Auth/FormSettings';
import { signup } from '../actions/signup';
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

class Signup extends Component {
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
    this.props.dispatchSignupUser(credentials);
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
              <FormCredentials
                onSubmit={this.nextPage}
                btnText='Suivant'
                action='signup'
              />
            </Box>
          }
          {page === 2 &&
            <Box>
              <FormSettings
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

const mapDispatchToProps = dispatch => ({
  dispatchSignupUser: credentials => dispatch(signup(credentials)),
});

export default connect(null, mapDispatchToProps)(withI18n(Signup));
