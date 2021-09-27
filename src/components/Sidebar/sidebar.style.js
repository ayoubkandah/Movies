import styled from 'styled-components';

export const Wrapper = styled.div`
  -webkit-backdrop-filter: blur(1.25rem);
  backdrop-filter: blur(1.25rem);
  background: rgba(3, 37, 65, 0.9);
  display: flex;
  flex-direction: column;
  min-height: 86.5vh;
  padding: 1.28rem 0 0 1.23rem;
  position: absolute;
  transition: all 0.5s ease;
  width: 85vw;
  z-index: 6;
  left: ${(props) => (props.active === 'show' ? '0' : '-350px')};
`;

export const MainList = styled.h3`
  color: #fff;
  font-size: 1.3rem;
  font-weight: 600;
  margin: 0 0 0.6rem 0;
  padding: 0;
`;

export const List = styled.li`
  color: #fff;
  font-size: 1rem;
  font-weight: 400;
  list-style: none;
  margin: 0 0 0.62rem 0;
  padding: 0;
`;

export const UL = styled.ul`
  margin: 0rem 0 1.3rem 0;
  padding: 0;
`;

export const Links = styled.li`
  color: rgba(255, 255, 255, 0.6);
  font-size: 1rem;
  font-weight: 600;
  list-style: none;
  margin: 0rem 0 0.62rem 0;
  padding: 0;
`;
export const UlLinks = styled.ul`
  margin: 0.7rem 0 0 0;
  padding: 0;
`;

export const Login = styled.button`
  background-color: transparent;
  border: none;
  color: rgba(255, 255, 255, 0.6);
  font-size: 1rem;
  font-weight: 600;
  margin: 0.66rem 0 0 0;
  padding: 0;
  width: max-content;
`;
