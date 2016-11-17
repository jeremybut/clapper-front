import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './components/Header';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    console.log(e.nativeEvent);
  }

  render() {
    return (
      <div>
        <Header
          foo="bar"
          onClick={this.handleClick}
        />
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
