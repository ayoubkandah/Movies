import Filter from 'components/Filter';
import Label from 'components/Label';
import React from 'react';
import { Title, Wrapper, FilterWrapper, Sort } from './popular-movies.style';

/**
 * Popular movies.
 *
 * @return {JSX.Element}
 */
export default function PopularMovies() {
  return (
    <Wrapper>
      <Title>Popular Movies</Title>
      <FilterWrapper>
        <Filter />
        <Label data={{ labelName: 'Sort Results By' }} Input={Sort} />
      </FilterWrapper>
    </Wrapper>
  );
}
