import React, { useEffect, useState } from 'react';
import { useInterfaceContext } from 'context/Interface';
import logoDP from 'assets/logoHigh.png';
import Sidebar from 'components/Sidebar';
import Tooltip from 'components/Tooltip';
import {
  En,
  Add,
  Logo,
  User,
  Login,
  LogoDP,
  Search,
  NavBar,
  Wrapper,
  JoinTMD,
  Hamburger,
} from './header.styled';

/**
 * Header.
 *
 * @return {JSX.Element}
 */
const Header = () => {
  const menu = useInterfaceContext();
  const [down, setDown] = useState(false);
  const [y, setY] = useState(window.scrollY);

  const menuHandle = () => menu.menuHandle();
  const handleNavigation = (e) => {
    const window = e.currentTarget;

    if (y > window.scrollY && down) {
      setDown(false);
    } else if (y < window.scrollY && !down) {
      setDown(true);
    }
    setY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', (e) => handleNavigation(e));
  }, [y]);

  return (
    <Wrapper position={down}>
      <NavBar>
        <LogoDP src={logoDP} />
        <Hamburger onClick={menuHandle} />
        <Sidebar />
        <Logo />
        <En>EN</En>
        <Tooltip
          Icon={Add}
          text="can`t find a movie or TV show? Login to create it"
          background="#fff"
          color="#000"
        />

        <Login>Login</Login>
        <JoinTMD>Join TMDB</JoinTMD>
        <User />
        <Search />
      </NavBar>
    </Wrapper>
  );
};

export default Header;
