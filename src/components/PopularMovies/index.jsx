import SortForm from 'components/SortFom';
import React from 'react';
import { Title, Wrapper } from './popular-movies.style';

/**
 * Popular movies.
 *
 * @return {JSX.Element}
 */
export default function PopularMovies() {
  return (
    <Wrapper>
      <Title>Popular Movies</Title>
      <SortForm />
    </Wrapper>
  );
}
