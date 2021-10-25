import mq from 'config/mq';
import styled from 'styled-components';

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  margin-top: 1.2rem;
  padding: 0 0 0 1.3rem;

  ${mq.dp` 
    flex-direction: column;
    padding: 0 1.3rem 0 1.3rem;
  `}
`;

export const Container = styled.div`
  background-color: #fff;
  border-left: none;
  border-radius: 0 0.4rem 0.4rem 0;
  border: 0.01rem solid black;
  border: 0.063rem solid rgba(227, 227, 227, 1);
  box-shadow: 0rem 0.12rem 0.5rem #d3d0d087;
  display: flex;
  flex-direction: column;
  height: 8.7rem;
  margin: 0 1.3rem 0 0;
  max-width: -webkit-fill-available;
  position: relative;

  ${mq.dp`
    border-radius: 0 0rem 0.45rem 0.45rem;
    border-top: none;
    border: 0.063rem solid rgba(227, 227, 227, 1);
    height: 5.0625rem;
    margin: 0;
    width: 11.25rem;
  `}
`;

export const IMG = styled.img`
  border-radius: 0.4rem 0 0 0.4rem;
  border-right: none;
  border: 0.063rem solid rgba(227, 227, 227, 1);
  box-shadow: 0rem 0.12rem 0.5rem #d3d0d087;
  height: 8.7rem;
  margin: 0;
  padding: 0;
  position: relative;

  ${mq.dp` 
    border-bottom: none;
    border-color: rgba(227, 227, 227, 1);
    border-radius: 0.45rem 0.45rem 0 0rem;
    border: 0.063rem solid rgba(227, 227, 227, 1);
    box-shadow: 0rem 0.12rem 0.5rem #d3d0d087;
    height: 17.0625rem;
    margin: 0;
    padding: 0 0 0;
    width: 11.25rem;
 `}
`;

export const Title = styled.h2`
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2; // Line
  display: -webkit-box;
  font-size: 1rem;
  font-weight: 600;
  margin: 0;
  overflow: hidden;
  padding: 1.2rem 0 0 0.8rem;
  text-overflow: ellipsis;
`;

export const Date = styled.h4`
  color: gray;
  font-size: 0.82rem;
  font-weight: 400;
  margin: 0;
  padding: 0.2rem 0 0 0.8rem;
`;

export const Overview = styled.h3`
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  color: black;
  display: -webkit-box;
  font-size: 0.9rem;
  font-weight: 400;
  margin: 1rem 0 0 0.8rem;
  overflow: hidden;
  padding: 0.2rem 0.5rem 0 0;
  text-overflow: ellipsis;

  ${mq.dp` 
    display: none;
  `}
`;
