import styled from 'styled-components';
import { ReactComponent as arrow } from 'assets/arrow.svg';

export const Wrapper = styled.div`
  margin: 0 0 0 0;
  padding: 0;
`;

export const Input = styled.div`
  &&:active {
    background-color: #b1e2ff;
  }

  margin: 0.6rem 1.28rem 0 1.28rem;
  height: 3rem;
  width: 88.23vw;
  border: 0.1rem solid #e7e6e6;
  border-radius: 0.3rem;
  color: black;
  background-color: transparent;
  box-shadow: 0 0.1rem 0.5rem #d9d9d9cc;
`;

export const Name = styled.h3`
  font-size: 1.1rem;
  margin: 0.8rem 0 0 0.95rem;
  font-weight: 600;
  padding: 0;
  display: inline-block;
`;

export const Arrow = styled(arrow)`
  display: block;
  float: right;
  height: 0.7rem;
  margin: 1.2rem 0.6rem 0rem 0;
  transform: ${(props) =>
    props.active === 'active' ? 'rotate(90deg)' : 'rotate(0deg)'};
`;
