import React, { useEffect, useState } from 'react';
import popularMovies from 'services/movies';
import { image } from 'config/variables';
import {
  Wrapper,
  IMG,
  Container,
  Title,
  Date,
  Overview,
} from './movie-cards.style';
// The Suicide Squad

/**
 *
 * @return {JSX.Element}
 */
export default function MovieCards() {
  const [movies, setMovies] = useState();
  const getMovies = async () => {
    const data = await popularMovies(1);
    setMovies(data);
  };

  useEffect(() => {
    getMovies();
  }, []);

  let date;
  if (movies) {
    const time = movies.results[0].release_date;
    const newDate = new window.Date(0, time.slice(5, 7), 0);
    const month = newDate.toLocaleString('en-us', { month: 'long' });
    date = `${month} ${time.slice(8, 10)}, ${time.slice(0, 4)}`;
  }

  console.log(movies);
  return (
    <>
      {movies && (
        <>
          <Wrapper>
            <IMG src={image + movies.results[0].poster_path} />
            <Container>
              <Title>Old</Title>
              <Date>{date}</Date>
              <Overview>{movies.results[0].overview}</Overview>
            </Container>
          </Wrapper>
        </>
      )}
    </>
  );
}

// release_date: "2021-07-21"
