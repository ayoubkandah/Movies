import styled from 'styled-components';
import mq from 'config/mq';

export const Wrapper = styled.div`
  -webkit-backdrop-filter: blur(1.25rem);
  backdrop-filter: blur(1.25rem);
  background: rgba(3, 37, 65, 0.9);
  display: flex;
  flex-direction: column;
  min-height: 87.3vh;
  padding: 1.28rem 0 0 1.23rem;
  position: absolute;
  transition: all 0.5s ease;
  width: 85vw;
  top: 6vh;
  z-index: -1;

  left: ${(props) => (props.active === 'show' ? '0' : '-50rem')};

  ${mq.dp`
  z-index: 1;

  position: static;
  flex-direction:row;    
  background-color:transparent;
  backdrop-filter: blur(1rem);
  width:auto;
  height:auto;
  min-height: auto;
  align-items: center;
  `}
`;

export const MainList = styled.h3`
  color: #fff;
  font-size: 1.3rem;
  font-weight: 600;
  margin: 0 0 0.6rem 0;
  padding: 0;
  white-space: nowrap;
  z-index: 10;
  &&:hover {
    cursor: pointer;
  }
  ${mq.dp`
font-size:1rem;
margin:0 1.2rem 1.2rem 0;
position:relative;
cursor:pointer;
  `}
`;

export const List = styled.li`
  color: #fff;
  font-size: 1rem;
  font-weight: 400;
  list-style: none;
  margin: 0 0 0.62rem 0;
  padding: 0;

  ${mq.dp`
  white-space: nowrap;
  color:black;
  `}
`;

export const UL = styled.ul`
  margin: 0rem 0 1.3rem 0;
  padding: 0;
  ${mq.dp`
  display:flex;
  flex-direction:column;
  position:absolute;
  top:1.7rem;
  padding:0 2rem 0 1rem;
  border:0.1rem solid #dee2e6;
  border-radius:0.25rem; 
  background-color:#fff;
  `}
`;

export const Links = styled.li`
  color: rgba(255, 255, 255, 0.6);
  font-size: 1rem;
  font-weight: 600;
  list-style: none;
  margin: 0rem 0 0.62rem 0;
  padding: 0;
  ${mq.dp`
  font-weight: 400;
  white-space: nowrap;
  color:black;
  `}
`;

export const UlLinks = styled.ul`
  margin: 0.7rem 0 0 0;
  padding: 0;
  ${mq.dp`
  display:flex;
  flex-direction:column;
  position:absolute;
  top:1.7rem;
  padding:0 2rem 0 1rem;
  border:0.1rem solid #dee2e6;
  border-radius:0.25rem; 
  background-color:#fff;
  `}
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
  ${mq.dp`
  display:none;
  `}
`;
