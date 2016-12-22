import React, { Component } from 'react';
import { Link } from 'react-router';
import MovieThumbnail from './MovieThumbnail';

const RecentMovies = props => {
  return (
    <div>
      <h1>Recent Movies</h1>
      <ul>
        {Boolean(props.recentMovies) && props.recentMovies
          .map(movie => (
            <li key={movie.movieid}>
              <MovieThumbnail movie={movie} />
            </li>
          ))}
      </ul>
    </div>
  );
}

export default RecentMovies;
