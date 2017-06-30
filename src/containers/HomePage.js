import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import values from 'lodash';
import styled from 'styled-components';

import { ui, spacing, Container } from '../ui';
import withI18n from '../components/Ui/withI18n';
import MovieThumbnail from '../components/MovieThumbnail';

const HeaderList = styled.header`
  display: flex;
  align-items: baseline;

  a {
    color: #fff;
    font-size: 1.125rem;
  }
`;

const HeadingList = styled.h2`
  font-size: 2rem;
  margin-right: ${spacing(2)};
`;

const MoviesList = styled.ul`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
`;

const MovieItem = styled.li`
  margin-right: ${spacing(3)};
  margin-bottom: ${spacing(5)};
  flex: 0 0 10%;
`;

function renderMovies(movies) {
  if (movies.length > 0) {
    return movies.map((movie, index) => <Movie key={index} movie={movie} />);
  } else return [];
}

const Movie = ({ movie }) => {
  return (
    <MovieItem key={movie.movieid}>
      <MovieThumbnail movie={movie} />
    </MovieItem>
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
      <Container>
        <section>
          <HeaderList>
            <HeadingList>Récemment ajouté</HeadingList>
            <Link to="">Voir tout</Link>
          </HeaderList>
          <MoviesList>
            {OtherMovies}
          </MoviesList>
        </section>
        <section>
          <HeaderList>
            <HeadingList>Toute ma bibliothèque</HeadingList>
            <Link to="">Voir tout</Link>
          </HeaderList>
          <MoviesList>
            {allMovies}
          </MoviesList>
        </section>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  movies: state.movies,
  recentMovies: state.recentMovies,
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(withI18n(HomePage));
