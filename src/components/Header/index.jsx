import React from 'react';
import { Wrapper, Search, Hamburger, Logo, User } from './header.styled';

export default function Header() {
  return (
    <Wrapper>
      <Hamburger />
      <Logo />
      <User />
      <Search />
    </Wrapper>
  );
}
