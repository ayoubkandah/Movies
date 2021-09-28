import React from 'react';
import Header from 'components/Header';
import Sidebar from 'components/Sidebar';
import MovieCards from 'components/MovieCards';

export default function Home() {
  return (
    <>
      <Header />
      <Sidebar />
      <MovieCards />
    </>
  );
}
