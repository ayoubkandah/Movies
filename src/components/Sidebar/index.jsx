import React, { useState, useEffect } from 'react';
import { useInterfaceContext } from 'context/Interface';
import {
  UL,
  List,
  Links,
  Login,
  Wrapper,
  UlLinks,
  MainList,
} from './sidebar.style';

/**
 * Mobile sidebar.
 *
 * @return {JSX.Element}
 */
const Sidebar = () => {
  const menu = useInterfaceContext();

  const [mainList, setMainList] = useState({
    tv: null,
    more: null,
    movies: null,
    people: null,
    mobile: true,
  });

  useEffect(() => {
    if (window.innerWidth > 700) {
      setMainList({ ...mainList, mobile: false });
    }
  }, []);

  const listHandle = (title) => {
    setMainList({ ...mainList, [title]: !mainList[title] });
  };

  return (
    <Wrapper active={menu.mobileMenu ? 'show' : 'hide'}>
      {!mainList.movies && (
        <MainList
          onClick={() => {
            listHandle('movies');
          }}
        >
          Movies
        </MainList>
      )}
      {mainList.movies && (
        <MainList
          onClick={() => {
            listHandle('movies');
          }}
        >
          Movies
          <UL>
            <List>Popular</List>
            <List>Top Rated</List>
            <List>Upcoming</List>
            <List>Now Playing</List>
          </UL>
        </MainList>
      )}

      {!mainList.tv && (
        <MainList
          onClick={() => {
            listHandle('tv');
          }}
        >
          TV Shows
        </MainList>
      )}
      {mainList.tv && (
        <MainList
          onClick={() => {
            listHandle('tv');
          }}
        >
          TV Shows
          <UL>
            <List>Popular</List>
            <List>Top Rated</List>
            <List>On TV</List>
            <List>Airing Today</List>
          </UL>
        </MainList>
      )}

      {!mainList.people && (
        <MainList
          onClick={() => {
            listHandle('people');
          }}
        >
          People
        </MainList>
      )}
      {mainList.people && (
        <MainList
          onClick={() => {
            listHandle('people');
          }}
        >
          People
          <UL>
            <List>Popular People</List>
          </UL>
        </MainList>
      )}

      {!mainList.more && !mainList.mobile && (
        <MainList
          onClick={() => {
            listHandle('more');
          }}
        >
          More
        </MainList>
      )}
      {mainList.more && (
        <MainList
          onClick={() => {
            listHandle('more');
          }}
        >
          More
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
        </MainList>
      )}

      {mainList.mobile && (
        <>
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
        </>
      )}
    </Wrapper>
  );
};

export default Sidebar;
