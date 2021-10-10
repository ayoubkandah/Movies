import styled from 'styled-components';
import { ReactComponent as arrow } from 'assets/dropdown.svg';
import mq from 'config/mq';

export const Options = styled.ul`
  background: #fff;
  border-radius: 0.3rem 0.3rem;
  border: 0.02rem solid #d9d9d9cc;
  height: 9rem;
  overflow-x: hidden;
  overflow-y: scroll;
  padding: 0 0 0 0;
  position: absolute;
  top: 1.2rem;
  width: 78.3vw;
  z-index: 5;
  ${mq.dp`
    width: 14.35rem;
  `}
`;

export const Wrapper = styled.div`
  margin-top: 1rem;
  position: relative;
`;

export const Option = styled.li`
  background: ${({ selected }) => (selected ? '#e4e7eb' : '#fff')};
  font-size: 0.9rem;
  list-style: none;
  margin: 0;
  padding: 0.4rem 0rem 0 1.5rem;
`;

export const Select = styled.div`
  align-items: center;
  background: ${({ open }) => (open ? '#c7cdd5' : '#e4e7eb')};
  border-radius: 0.3rem 0.3rem 0.3rem 0.3rem;
  display: flex;
  height: 2.2rem;
  justify-content: space-between;
  width: 78.5vw;

  ${mq.dp`
    width: 14.35rem;
  `}
`;

export const Selected = styled.h4`
  color: black;
  font-size: 0.92rem;
  font-weight: 400;
  padding: 0rem 0 0 1rem;
`;

export const Arrow = styled(arrow)`
  height: 1.4rem;
  padding: 0;
`;
