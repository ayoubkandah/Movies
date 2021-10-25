import styled from 'styled-components';
import { ReactComponent as arrow } from 'assets/arrow.svg';
import mq from 'config/mq';
import colors from 'styles/colors';

export const Wrapper = styled.div`
  margin: 0 0 0 0;
  padding: 0;

  &&:hover {
    cursor: pointer;
  }
`;

export const Input = styled.div`
  background-color: transparent;
  border: 0.1rem solid ${colors.borderWhite};
  border-left: none;
  border-radius: 0.3rem 0.3rem 0rem 0;
  border-right: none;
  color: black;
  display: inline-block;
  height: 3rem;
  width: 89vw;

  &&:active {
    background-color: #b1e2ff;
  }

  ${mq.dp`
    width:16.125rem ;
  `}
`;

export const Name = styled.h3`
  display: inline-block;
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0.8rem 0 0 0.95rem;
  padding: 0;
`;

export const Arrow = styled(arrow)`
  display: block;
  float: right;
  height: 0.7rem;
  margin: 1.2rem 0.6rem 0rem 0;
  transform: ${(props) =>
    props.active === 'active' ? 'rotate(90deg)' : 'rotate(0deg)'};
`;
