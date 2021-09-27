import React from 'react';
import { useInterfaceContext } from 'context/Interface';
import { Wrapper, Search, Hamburger, Logo, User } from './header.styled';

export default function Header() {
  const menu = useInterfaceContext();

  const menuHandle = () => menu.menuHandle();

  return (
    <Wrapper>
      <Hamburger onClick={menuHandle} />
      <Logo />
      <User />
      <Search />
    </Wrapper>
  );
}
