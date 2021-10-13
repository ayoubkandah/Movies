import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import CircleProgress from 'components/CircleProgress';
import { image } from 'config/variables';
import {
  Wrapper,
  IMG,
  Container,
  Title,
  Date,
  Overview,
} from './movie-cards.style';

/**
 *
 * @return {JSX.Element}
 */
const MovieCard = ({ movie }) => {
  const [date, setDate] = useState();
  useEffect(() => {
    if (movie.release_date) {
      const time = movie.release_date;
      const newDate = new window.Date(0, time.slice(5, 7), 0);
      const month = newDate.toLocaleString('en-us', { month: 'long' });
      const formattedDate = `${month} ${time.slice(8, 10)}, ${time.slice(
        0,
        4
      )}`;
      setDate(formattedDate);
    }
  }, []);

  return (
    <>
      <Wrapper>
        <IMG src={image + movie.poster_path} />
        <Container>
          <CircleProgress percentage={movie.vote_average} />
          <Title>{movie.title}</Title>
          <Date>{date}</Date>
          <Overview>{movie.overview}</Overview>
        </Container>
      </Wrapper>
    </>
  );
};

MovieCard.propTypes = {
  movie: propTypes.shape({
    overview: propTypes.string,
    title: propTypes.string,
    release_date: propTypes.string,
    poster_path: propTypes.string,
    vote_average: propTypes.number,
  }).isRequired,
};

export default MovieCard;
