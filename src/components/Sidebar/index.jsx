import React from 'react';
import { Wrapper, MainList, List, Links, Login } from './sidebar.style';

export default function Sidebar() {
  // const [mainList, setMainList] = useState({
  //   movies: null,
  //   tv: null,
  //   people: null,
  // });

  return (
    <Wrapper>
      <MainList>Movies</MainList>
      <List>Popular</List>
      <List>Top Rated</List>
      <List>Upcoming</List>
      <List>Now Playing</List>

      <MainList>TV Shows</MainList>
      <List>Popular</List>
      <List>Airing Today</List>
      <List>On TV</List>
      <List>Top Rated</List>

      <MainList>People</MainList>
      <List>Popular People</List>

      <Links>Contribution Bible</Links>
      <Links>Apps</Links>
      <Links>Discussions</Links>
      <Links>Leaderboard</Links>
      <Links>Contribute</Links>
      <Links>API</Links>
      <Links>Support</Links>
      <Links>About</Links>

      <Login>Login</Login>
    </Wrapper>
  );
}
