import mq from 'config/mq';
import styled from 'styled-components';

export const LoadMore = styled.button`
  width: 88vw;
  margin: 2rem auto 1rem auto;
  border: none;
  background-color: rgb(1, 180, 228);
  height: 3rem;
  border-radius: 0.3rem;
  color: #fff;
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 700;
  font-size: 1.5rem;
  box-sizing: border-box;

  &&:hover {
    color: #032541;
    cursor: pointer;
  }

  ${mq.dp`
    width: -webkit-fill-available;
  margin-right:3rem;
  margin-left:1rem;
`}
`;

export const Search = styled.button``;
