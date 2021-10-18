import styled from 'styled-components';

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  margin-top: 1.2rem;
  padding: 0 1.3rem 0 1.3rem;
  @media (min-width: 45rem) {
    flex-direction: column;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  width: -webkit-fill-available;
  box-shadow: 0rem 0.12rem 0.5rem #d3d0d087;
  border: 0.063rem solid rgba(227, 227, 227, 1);
  border-left: none;
  background-color: #fff;
  height: 8.7rem;
  position: relative;
  border-radius: 0 0.4rem 0.4rem 0;

  @media (min-width: 45rem) {
    height: 5.0625rem;
    width: 11.25rem;
    border: 0.063rem solid rgba(227, 227, 227, 1);
    border-top: none;
    border-radius: 0 0rem 0.45rem 0.45rem;
  }
`;

export const IMG = styled.img`
  height: 8.7rem;
  margin: 0;
  box-shadow: 0rem 0.12rem 0.5rem #d3d0d087;
  border: 0.063rem solid rgba(227, 227, 227, 1);
  border-right: none;
  border-radius: 0.4rem 0 0 0.4rem;
  padding: 0;
  position: relative;

  @media (min-width: 45rem) {
    height: 17.0625rem;
    width: 11.25rem;
    padding: 0 0 0;
    margin: 0;
    border: 0.063rem solid rgba(227, 227, 227, 1);

    box-shadow: 0rem 0.12rem 0.5rem #d3d0d087;
    border-color: rgba(227, 227, 227, 1);
    border-bottom: none;

    border-radius: 0.45rem 0.45rem 0 0rem;
  }
`;

export const Title = styled.h2`
  padding: 1.2rem 0 0 0.8rem;
  font-size: 1rem;
  font-weight: 600;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 2; // Line
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const Date = styled.h4`
  color: gray;
  padding: 0.2rem 0 0 0.8rem;
  margin: 0;
  font-weight: 400;
  font-size: 0.82rem;
`;

export const Overview = styled.h3`
  color: black;
  font-weight: 400;
  font-size: 0.9rem;
  margin: 1rem 0 0 0.8rem;
  padding: 0.2rem 0.5rem 0 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
  @media (min-width: 45rem) {
    display: none;
  }
`;
