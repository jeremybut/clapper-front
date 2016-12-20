import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

class RecentMovies extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h1>Recent Movies</h1>
        <ul>
          {Boolean(this.props.recent_movies) && this.props.recent_movies
            .map(movie => (
              <li key={movie.movieid}>
                <Link to={`/movie/${movie.movieid}`}>
                  {movie.label} <br />
                  {movie.genre} <br />
                  {movie.director} <br />
                  <img src={`http://jeremybut.synology.me:4444/image/`+encodeURIComponent(`${movie.thumbnail}`)} />
                  <hr />
                </Link>
              </li>
            ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  recent_movies: state.recent_movies,
})

export default connect(mapStateToProps)(RecentMovies);
