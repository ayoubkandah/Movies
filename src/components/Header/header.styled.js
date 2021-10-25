import styled from 'styled-components';
import { ReactComponent as search } from 'assets/search.svg';
import { ReactComponent as hamburger } from 'assets/hamburger.svg';
import { ReactComponent as logo } from 'assets/logo.svg';
import { ReactComponent as user } from 'assets/user.svg';
import { ReactComponent as add } from 'assets/add.svg';
import mq from 'config/mq';
import colors from 'styles/colors';

export const Wrapper = styled.div`
  background-color: ${colors.darkBlue};
  height: 4rem;
  position: fixed;
  top: ${({ position }) => (position ? '-5rem' : '0rem')};
  transition: all 0.5s ease;
  width: 100vw;
  z-index: 16;
`;

export const Search = styled(search)`
  height: 1.5rem;
  padding: 0 1.25rem 0 0;
  width: 1.5rem;
`;

export const Hamburger = styled(hamburger)`
  fill: #fff;
  height: 1.4rem;
  padding: 0 2.41rem 0 1.25rem;
  width: 1.4rem;

  ${mq.dp`
display: none;
`}
`;

export const Logo = styled(logo)`
  height: 3.49rem;
  margin: 0 auto;
  padding: 0;
  width: 3.43rem;

  ${mq.dp`
display: none;
  `}
`;

export const User = styled(user)`
  fill: #fff;
  height: 1.4rem;
  padding: 0 0.9rem 0 0;
  width: 1.4rem;

  ${mq.dp`
  display:none;
  `}
`;

export const LogoDP = styled.img`
  padding: 0;
  width: 10rem;
  margin: 0 0 0 1.8rem;
  display: none;

  ${mq.dp`
  display:inline-block;
  `}
`;

export const Login = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  margin-right: 1rem;
  display: none;

  &&:hover {
    cursor: pointer;
  }

  ${mq.dp`
  display:block
  `}
`;

export const JoinTMD = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  margin-right: 1rem;
  white-space: nowrap;
  display: none;

  &&:hover {
    cursor: pointer;
  }

  ${mq.dp`
  display:block
  `}
`;

export const En = styled.button`
  background-color: transparent;
  border-radius: 0.2rem;
  border: 0.01rem solid #fff;
  color: #fff;
  display: none;
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 0.95rem;
  font-weight: 600;
  margin: 0 1rem 0 auto;
  padding: 0.1rem 0.2rem 0.15rem 0.2rem;

  &&:hover {
    background-color: #fff;
    color: #032541;
    cursor: pointer;
  }

  ${mq.dp`
  display:block
  `}
`;

export const Add = styled(add)`
  cursor: pointer;
  display: none;
  margin-right: 1rem;
  width: 1.5rem;

  ${mq.dp`
  display:block
  `}
`;

export const NavBar = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  max-width: 90rem;
`;
