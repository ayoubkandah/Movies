import SortForm from 'components/SortFom';
import React, { useEffect, useRef, useState } from 'react';
import MovieCard from 'components/MovieCard';
import popularMovies from 'services/movies';

import { LoadMore } from 'styles/buttons.style';
import {
  FormCardsWrapper,
  MoviesWrapper,
  Title,
  Wrapper,
  LoadMoreWrapper,
} from './popular-movies.style';

/**
 * Popular movies.
 *
 * @return {JSX.Element}
 */
export default function PopularMovies() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [scrolling, setScrolling] = useState(false);
  const loadMore = useRef();

  const getMovies = async () => {
    const data = await popularMovies(page);
    setMovies([...movies, ...data]);
  };

  const handlePage = (pageNumber) => {
    setPage(pageNumber);
  };

  const handleScroll = () => {
    if (!scrolling) setScrolling(true);
  };
  useEffect(() => {
    if (scrolling) {
      let num = 1;
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            // console.log(entries[0].isIntersecting);
            console.log(entries[0].isIntersecting);
            num += 1;
            handlePage(num);
          }
        },
        { rootMargin: '100px 0px 0px 0px' }
      );
      observer.observe(loadMore.current);
    }
  }, [scrolling]);

  useEffect(() => {
    getMovies();
  }, [page]);
  console.log(movies);
  return (
    <Wrapper>
      <FormCardsWrapper>
        <Title>Popular Movies</Title>
        <SortForm />
      </FormCardsWrapper>
      <LoadMoreWrapper>
        <MoviesWrapper>
          {movies && (
            <>
              {movies.map((movie) => (
                <MovieCard movie={movie} />
              ))}
            </>
          )}
          <LoadMore ref={loadMore} onClick={handleScroll}>
            Load More
          </LoadMore>
        </MoviesWrapper>
      </LoadMoreWrapper>
    </Wrapper>
  );
}
