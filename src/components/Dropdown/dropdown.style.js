import styled from 'styled-components';
import { ReactComponent as arrow } from 'assets/dropdown.svg';
import { ReactComponent as search } from 'assets/searchInput.svg';

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
  display: flex;
  flex-direction: column;
  justify-content: left;
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

export const Option = styled.button`
  background: ${({ selected }) => (selected ? '#e4e7eb' : '#fff')};
  list-style: none;
  display: flex;
  align-items: center;
  width: 100%;
  margin: 0;
  padding: 0.26rem 0rem 0.26rem 1rem;
  white-space: nowrap;
  text-align: -webkit-match-parent;
  border: none;
  font-size: 0.8rem;
  &&:hover {
    transition: all ease-in-out 0.3s;
    background-color: ${({ selected }) =>
      selected ? 'rgba(1, 180, 228)' : '#edf0f2'};
    color: ${({ selected }) => selected && '#edf0f2'};
    cursor: pointer;
  }
`;

export const Select = styled.button`
  border: none;
  align-items: center;
  background: ${({ open }) => (open ? '#c7cdd5' : '#e4e7eb')};
  border-radius: 0.3rem 0.3rem 0.3rem 0.3rem;
  display: flex;
  height: 2.2rem;
  justify-content: space-between;
  width: 78.5vw;
  &&:hover {
    cursor: pointer;
  }
  ${mq.dp`
    width: 14.35rem;
  `}
`;

export const Selected = styled.h4`
  color: black;
  font-size: 0.92rem;
  font-weight: 400;
  padding: 0rem 0 0 1rem;
  display: flex;
  align-items: center;
`;

export const Arrow = styled(arrow)`
  height: 1.4rem;
  padding: 0;
`;

export const Img = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  margin: 0 0.5rem 0 0;
`;

export const Search = styled.input`
  font-size: 0.8rem;
  color: black;
  padding: 0.5rem 0 0.5rem 0.6rem;
  border: 0.01rem solid #aba5a57d;
  border-radius: 0.3rem;
  width: 90%;
  opacity: 1;

  &&:focus {
    outline: none;
    border: 0.01rem solid rgba(1, 180, 228);
    transition: all ease-in 0.4s;
  }
`;
export const SearchWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 0.8rem 0 0.3rem 0;
  position: relative;
`;

export const SearchIcon = styled(search)`
  position: absolute;
  width: 1rem;
  height: 1rem;
  right: 0.5rem;
  top: 0.5rem;
  fill: #424242;
`;
