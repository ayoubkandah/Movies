import styled from 'styled-components';
import mq from 'config/mq';
import colors from 'styles/colors';

export const Wrapper = styled.div`
  -webkit-backdrop-filter: blur(1.25rem);
  backdrop-filter: blur(1.25rem);
  background: ${colors.darkBlue};
  display: flex;
  flex-direction: column;
  left: ${(props) => (props.active === 'show' ? '0' : '-50rem')};
  min-height: 87.3vh;
  padding: 1.28rem 0 0 1.23rem;
  position: absolute;
  top: 6vh;
  transition: all 0.5s ease;
  width: 85vw;
  z-index: -1;

  ${mq.dp`
  align-items: center;
  backdrop-filter: blur(1rem);
  background-color:transparent;
  flex-direction:row;    
  height:auto;
  min-height: auto;
  position: static;
  width:auto;
  z-index: 1;
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
  color:black;
  white-space: nowrap;
  `}
`;

export const UL = styled.ul`
  margin: 0rem 0 1.3rem 0;
  padding: 0;

  ${mq.dp`
  background-color:#fff;
  border-radius:0.25rem; 
  border:0.1rem solid #dee2e6;
  display:flex;
  flex-direction:column;
  padding:0 2rem 0 1rem;
  position:absolute;
  top:1.7rem;
  `}
`;

export const Links = styled.li`
  color: ${colors.opacityGray};
  font-size: 1rem;
  font-weight: 600;
  list-style: none;
  margin: 0rem 0 0.62rem 0;
  padding: 0;

  ${mq.dp`
  color:black;
  font-weight: 400;
  white-space: nowrap;
  `}
`;

export const UlLinks = styled.ul`
  margin: 0.7rem 0 0 0;
  padding: 0;

  ${mq.dp`
  background-color:#fff;
  border-radius:0.25rem; 
  border:0.1rem solid #dee2e6;
  display:flex;
  flex-direction:column;
  padding:0 2rem 0 1rem;
  position:absolute;
  top:1.7rem;
  `}
`;

export const Login = styled.button`
  background-color: transparent;
  border: none;
  color: ${colors.opacityGray};
  font-size: 1rem;
  font-weight: 600;
  margin: 0.66rem 0 0 0;
  padding: 0;
  width: max-content;

  ${mq.dp`
  display:none;
  `}
`;
