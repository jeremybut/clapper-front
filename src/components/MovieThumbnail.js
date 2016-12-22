import React, { Component } from 'react';
import { Link } from 'react-router';

const MovieThumbnail = props => {
  const { movie } = props;

  return (
    <Link to={`/movie/${movie.movieid}`} className='c-movie-thumbnail'>
      <img
        src={`http://jeremybut.synology.me:4444/image/`+encodeURIComponent(`${movie.thumbnail}`)}
        className="c-movie-thumbnail__poster"
      />
      <span className='c-movie-thumbnail__title'>{movie.label}</span>
      <span className='c-movie-thumbnail__gender'>{movie.genre}</span>
    </Link>
  );
}

export default MovieThumbnail;
