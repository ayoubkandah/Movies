import React, { useState } from 'react';
import { useInterfaceContext } from 'context/Interface';
import {
  Wrapper,
  UlLinks,
  MainList,
  List,
  Links,
  Login,
  UL,
} from './sidebar.style';

export default function Sidebar() {
  const menu = useInterfaceContext();

  const [mainList, setMainList] = useState({
    movies: null,
    tv: null,
    people: null,
  });

  const listHandle = (title) => {
    setMainList({ ...mainList, [title]: !mainList[title] });
  };

  return (
    <>
      {menu.mobileMenu && (
        <Wrapper>
          <MainList
            onClick={() => {
              listHandle('movies');
            }}
          >
            Movies
          </MainList>
          {mainList.movies && (
            <UL>
              <List>Popular</List>
              <List>Top Rated</List>
              <List>Upcoming</List>
              <List>Now Playing</List>
            </UL>
          )}

          <MainList
            onClick={() => {
              listHandle('tv');
            }}
          >
            TV Shows
          </MainList>
          {mainList.tv && (
            <UL>
              <List>Popular</List>
              <List>Top Rated</List>
              <List>On TV</List>
              <List>Airing Today</List>
            </UL>
          )}

          <MainList
            onClick={() => {
              listHandle('people');
            }}
          >
            People
          </MainList>
          {mainList.people && (
            <UL>
              <List>Popular People</List>
            </UL>
          )}

          <UlLinks>
            <Links>Contribution Bible</Links>
            <Links>Apps</Links>
            <Links>Discussions</Links>
            <Links>Leaderboard</Links>
            <Links>Contribute</Links>
            <Links>API</Links>
            <Links>Support</Links>
            <Links>About</Links>
          </UlLinks>

          <Login>Login</Login>
        </Wrapper>
      )}
    </>
  );
}
