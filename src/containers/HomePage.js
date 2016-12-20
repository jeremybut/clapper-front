import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import RecentMovies from '../components/RecentMovies';
import MovieThumbnail from '../components/MovieThumbnail';

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
        <h1>Movies</h1>
        <ul>
          {Boolean(this.props.movies) && this.props.movies
            .slice(0, shown)
            .map(movie => (
              <li key={movie.movieid}>
                <MovieThumbnail movie={movie} />
              </li>
            ))}
        </ul>
        <button onClick={this.loadMore}>Load more</button>
        <hr />
        <RecentMovies />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  movies: state.movies,
  recentMovies: state.recent_movies,
})

export default connect(mapStateToProps)(HomePage);
