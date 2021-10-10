import SortForm from 'components/SortFom';
import React, { useEffect, useState } from 'react';
import MovieCard from 'components/MovieCard';
import popularMovies from 'services/movies';

import {
  FormCardsWrapper,
  MoviesWrapper,
  Title,
  Wrapper,
} from './popular-movies.style';

/**
 * Popular movies.
 *
 * @return {JSX.Element}
 */
export default function PopularMovies() {
  const [movies, setMovies] = useState();

  const getMovies = async () => {
    const data = await popularMovies(1);
    setMovies(data);
  };
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <Wrapper>
      <FormCardsWrapper>
        <Title>Popular Movies</Title>
        <SortForm />
      </FormCardsWrapper>

      <MoviesWrapper>
        {movies && (
          <>
            {movies.results.map((movie) => (
              <MovieCard movie={movie} />
            ))}
          </>
        )}
      </MoviesWrapper>
    </Wrapper>
  );
}
