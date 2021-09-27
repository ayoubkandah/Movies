import styled from 'styled-components';

export const Wrapper = styled.div`
  background: rgba(3, 37, 65, 0.9);
  position: absolute;
  z-index: 6;
  font-family: 'Source Sans Pro', sans-serif;
  display: flex;
  flex-direction: column;
  width: 85vw;
  min-height: 86.5vh;
  -webkit-backdrop-filter: blur(1.25rem);
  backdrop-filter: blur(1.25rem);
  padding: 1.28rem 0 0 1.23rem;
  /* transition: ease all 5.3s; */
`;
export const MainList = styled.h3`
  font-family: 'Source Sans Pro', sans-serif;

  color: #fff;
  padding: 0;
  margin: 0 0 0.6rem 0;
  font-weight: 600;
  font-size: 1.3rem;
`;

export const List = styled.li`
  list-style: none;
  font-family: 'Source Sans Pro', sans-serif;
  padding: 0;
  color: #fff;
  font-weight: 400;
  font-size: 1rem;
  margin: 0 0 0.62rem 0;
`;

export const UL = styled.ul`
  padding: 0;
  margin: 0rem 0 1.3rem 0;
`;

export const Links = styled.li`
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 1rem;
  padding: 0;
  list-style: none;
  margin: 0rem 0 0.62rem 0;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.6);
`;
export const UlLinks = styled.ul`
  margin: 0.7rem 0 0 0;
  padding: 0;
`;

export const Login = styled.button`
  background-color: transparent;
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 600;
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.6);
  border: none;
  padding: 0;
  margin: 0.66rem 0 0 0;
  width: max-content;
`;
