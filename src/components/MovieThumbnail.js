import React from 'react';
import { Link as RawLink } from 'react-router';
import styled from 'styled-components';
import { spacing } from '../ui';

const Thumbnail = styled(RawLink)`
  color: #fff;

  img {
    width: 100%;
    margin-bottom: ${spacing()};
  }
`;

const ThumbnailGender = styled.button`
  border: 1px solid #fff;
  border-radius: 4px;
  padding: ${spacing(0.2)} ${spacing(0.5)};
  font-size: .875rem;
`;

const ThumbnailTitle = styled.h2`
  font-size: 1rem;
  font-weight: normal;
  margin-top: 0;
`;

const MovieThumbnail = props => {
  const { movie } = props;

  return (
    <Thumbnail to={`/movie/${movie.movieid}`}>
      <img
        src={
          `http://jeremybut.synology.me:8081/image/` +
          encodeURIComponent(`${movie.thumbnail}`)
        }
      />
      {false &&
        <ThumbnailGender>
          {movie.genre}
        </ThumbnailGender>}
      <ThumbnailTitle>
        {movie.label}
      </ThumbnailTitle>
    </Thumbnail>
  );
};

export default MovieThumbnail;
