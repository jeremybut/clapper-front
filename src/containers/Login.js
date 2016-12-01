import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../actions';

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
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleFormSubmit}>
          <input type="email" ref="email" />
          <input type="text" ref="password" />
          <button type="submit">Go</button>
        </form>
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
