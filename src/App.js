import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import Header from './components/Header';
import { fetchMovies, fetchRecentMovies } from './actions';
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
    this.props.fetchMovies();
    this.props.fetchRecentMovies();
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
  fetchMovies: () => dispatch(fetchMovies()),
  fetchRecentMovies: () => dispatch(fetchRecentMovies()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
