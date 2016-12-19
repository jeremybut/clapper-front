import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import Header from './components/Header';
import { fetchUserMovies } from './actions';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  componentWillMount() {
    this.disconnectIfNotLoggedIn();
  }

  componentDidMount() {
    this.props.fetchUserMovies();
  }

  componentDidUpdate(prevProps) {
    this.disconnectIfNotLoggedIn();
  }

  disconnectIfNotLoggedIn() {
    const { user } = this.props;

    if (!user || !user.token) {
      browserHistory.push('/login');
    }
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

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = dispatch => ({
  fetchUserMovies: () => dispatch(fetchUserMovies()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
