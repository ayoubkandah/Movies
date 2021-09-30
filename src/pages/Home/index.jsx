import React from 'react';
import Header from 'components/Header';
import Sidebar from 'components/Sidebar';
import MovieCards from 'components/MovieCards';
import PopularMovies from 'components/PopularMovies';

export default function Home() {
  return (
    <>
      <Header />
      <Sidebar />
      <PopularMovies />
      <MovieCards />
      <MovieCards />
      <MovieCards />
      <MovieCards />
      <MovieCards />
      <MovieCards />
      <MovieCards />
    </>
  );
}
