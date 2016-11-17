import React, { Component } from 'react';

class HomePage extends Component {
  constructor() {
    super();

    this.state = {
      movies: [
        { name: 'Pulp Fiction' },
        { name: 'Hateful eight' },
        { name: 'Inglorious bastards' },
      ],
    };
  }

  componentWillMount() {

  }

  componentDidMount() {

  }

  shouldComponentUpdate() {

  }

  componentWillReceiveProps(nextProps) {

  }

  componentWillUpdate(nextProps, nextState) {

  }

  componentDidUpdate(prevProps, prevStates) {

  }

  componentWillUnmount() {

  }

  render() {
    console.log(this.state);
    return (
      <div>
        <h1>Homepage</h1>
        <ul>
          {this.state.movies
            .filter(movie => movie.name.length > 13)
            .map((movie, index) => (
              <li key={index}>{movie.name}</li>
            )
          )}
        </ul>
      </div>
    );
  }
}

export default HomePage;
