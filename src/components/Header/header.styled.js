import styled from 'styled-components';
import { ReactComponent as search } from 'assets/search.svg';
import { ReactComponent as hamburger } from 'assets/hamburger.svg';
import { ReactComponent as logo } from 'assets/logo.svg';
import { ReactComponent as user } from 'assets/user.svg';

export const Wrapper = styled.div`
  align-items: center;
  background-color: #032541;
  display: flex;
  flex-direction: row;
  height: 4rem;
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
`;

export const Logo = styled(logo)`
  height: 3.49rem;
  margin: 0 auto;
  padding: 0;
  width: 3.43rem;
`;

export const User = styled(user)`
  fill: #fff;
  height: 1.4rem;
  padding: 0 0.9rem 0 0;
  width: 1.4rem;
`;
