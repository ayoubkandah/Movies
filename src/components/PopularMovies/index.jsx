import Filter from 'components/Filter';
import React from 'react';
import { Title, Wrapper } from './popular-movies.style';

export default function PopularMovies() {
  return (
    <Wrapper>
      <Title>Popular Movies</Title>
      <Filter />
    </Wrapper>
  );
}
