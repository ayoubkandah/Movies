import mq from 'config/mq';
import styled from 'styled-components';

export const FormCardsWrapper = styled.div`
  margin-top: 5rem;
`;

export const Title = styled.h2`
  font-size: 1.6rem;
  font-weight: 600;
  margin: 1.23rem 0 0.7rem 1.24rem;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${mq.dp`
  flex-direction: row;
  max-width: 90rem;
  margin: 0 auto;
  flex-direction: row;
  padding:0 0 0 1rem;
`}
`;

export const MoviesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  ${mq.dp`
  margin:8.2rem 0rem 0 0;
  `}
`;

export const LoadMoreWrapper = styled.div`
  display: inline-block;
`;
