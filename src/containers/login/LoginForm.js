import React, { Component } from 'react';
import { connect } from 'react-redux';

import LoginFormCredentials from './LoginFormCredentials';
import LoginFormSettings from './LoginFormSettings';
import { loginUser } from '../../actions/login';

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
      <div>
        {page === 1 && <LoginFormCredentials onSubmit={this.nextPage} />}
        {page === 2 &&
          <LoginFormSettings
            previousPage={this.previousPage}
            onSubmit={this.handleFormSubmit}
          />}
      </div>
    );
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  dispatchLoginUser: credentials => dispatch(loginUser(credentials)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
