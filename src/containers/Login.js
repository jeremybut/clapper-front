import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit(e) {
    e.preventDefault();

    const payload = {
      username: this.refs.email.value,
      password: this.refs.password.value,
      grant_type: 'password',
    };

    fetch('http://localhost:3000/oauth/token', {
      method: 'post',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify(payload)
    })
      .then(response => response.json())
      .then(response => console.log(response))
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
export default Login;
