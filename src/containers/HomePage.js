import React, { Component } from 'react';
import { connect } from 'react-redux';

class HomePage extends Component {
  constructor() {
    super();

    this.state = {
      shown: 10,
    };

    this.loadMore = this.loadMore.bind(this);
  }

  loadMore() {
    this.setState({ shown: this.state.shown + 10 });
  }

  render() {
    const { shown } = this.state;

    return (
      <div>
        <h1>Homepage</h1>
        <ul>
          {Boolean(this.props.movies) && this.props.movies.slice(0, shown).map(movie => (
            <li key={movie.movieid}>{movie.label}</li>
          ))}
        </ul>
        <button onClick={this.loadMore}>Load more</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  movies: state.movies,
})

export default connect(mapStateToProps)(HomePage);
