import React, { useEffect, useRef, useState } from 'react';
import SortForm from 'components/SortFom';
import MovieCard from 'components/MovieCard';
import { LoadMore } from 'styles/buttons.style';
import { discoverMovies, popularMovies } from 'services/movies';
import {
  Title,
  Wrapper,
  MoviesWrapper,
  LoadMoreWrapper,
  FormCardsWrapper,
} from './popular-movies.style';

/**
 * Popular movies page components.
 *
 * @return {JSX.Element}
 */
const PopularMovies = () => {
  const loadMore = useRef();
  const [page, setPage] = useState(1);
  const [params, setParams] = useState();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState();
  const [scrolling, setScrolling] = useState(false);

  const handleSubmit = (e, inputs) => {
    e.preventDefault();
    let path = ``;
    const keys = Object.keys(inputs);

    keys.forEach((key) => {
      path = `${path}&${key}=${inputs[key]}`;
    });

    setMovies([]);
    setParams(path);
  };

  const getMovies = async () => {
    const data = params
      ? await discoverMovies(params, page)
      : await popularMovies(page);

    setLoading(true);
    setMovies([...movies, ...data]);
  };

  const handleScroll = () => {
    if (!scrolling) {
      setPage(2);
      setScrolling(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (scrolling && loading && entries[0].isIntersecting) {
          setLoading(false);
          setPage(page + 1);
        }
      },
      { threshold: 0 }
    );

    observer.observe(loadMore.current);

    return () => {
      observer.unobserve(loadMore.current);
    };
  }, [loading]);

  useEffect(() => {
    setPage(1);
    getMovies();
    setScrolling(false);
  }, [params]);

  useEffect(() => {
    getMovies();
  }, [page]);

  return (
    <Wrapper>
      <FormCardsWrapper>
        <Title>Popular Movies</Title>
        <SortForm handleSubmit={handleSubmit} />
      </FormCardsWrapper>

      <LoadMoreWrapper>
        <MoviesWrapper>
          {movies && (
            <>
              {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
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
};

export default PopularMovies;
