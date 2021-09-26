import styled from 'styled-components';
import { ReactComponent as search } from 'assets/search.svg';
import { ReactComponent as hamburger } from 'assets/hamburger.svg';
import { ReactComponent as logo } from 'assets/logo.svg';
import { ReactComponent as user } from 'assets/user.svg';

export const Wrapper = styled.div`
  background-color: #032541;
  display: flex;
  flex-direction: row;
  height: 4rem;
  align-items: center;
`;

export const Search = styled(search)`
  height: 1.5rem;
  width: 1.5rem;
  padding: 0 1.25rem 0 0;
`;

export const Hamburger = styled(hamburger)`
  height: 1.4rem;
  width: 1.4rem;
  fill: #fff;
  padding: 0 2.41rem 0 1.25rem;
`;

export const Logo = styled(logo)`
  width: 3.4rem;
  height: 3.4rem;
  margin: 0 auto;
  padding: 0;
`;

export const User = styled(user)`
  height: 1.4rem;
  width: 1.4rem;
  fill: #fff;
  padding: 0 0.9rem 0 0;
`;
