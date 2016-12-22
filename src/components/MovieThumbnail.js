import React, { Component } from 'react';
import { Link } from 'react-router';

const MovieThumbnail = props => {
  const { movie } = props;

  return (
    <Link to={`/movie/${movie.movieid}`}>
      {movie.label} <br />
      {movie.genre} <br />
      {movie.director} <br />
      <img src={`http://jeremybut.synology.me:4444/image/`+encodeURIComponent(`${movie.thumbnail}`)} />
      <hr />
    </Link>
  );
}

export default MovieThumbnail;
