import React, { Component } from 'react';
import { connect } from 'react-redux';
import values from 'lodash';

import withI18n from '../components/Ui/withI18n';
import MovieThumbnail from '../components/MovieThumbnail';

function renderMovies(movies) {
  if (movies.length > 0) {
    return movies.map((movie, index) => (
      <Movie key={index} movie={movie} />
    ));
  }
  else return [];
}

const Movie = ({movie}) => {
  return (
    <li key={movie.movieid} className='u-1-2'>
      <MovieThumbnail movie={movie} />
    </li>
  );
};

class HomePage extends Component {
  render() {
    const { t, movies, recentMovies } = this.props;
    const { movieById } = movies;
    const { recentMovieById } = recentMovies;

    const allMovies = renderMovies(Array.from(values(movieById)));
    const OtherMovies = renderMovies(Array.from(values(recentMovieById)));
    return (
      <div>
        <h1>Movies</h1>
        <ul className='u-grid'>{ allMovies }</ul>

        <h1>Recent Movies</h1>
        <ul className='u-grid'>{ OtherMovies }</ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  movies: state.movies,
  recentMovies: state.recentMovies,
})

const mapDispatchToProps = () => ({})

export default connect(mapStateToProps, mapDispatchToProps)(withI18n(HomePage));
