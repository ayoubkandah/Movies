import styled from 'styled-components';
import { ReactComponent as arrow } from 'assets/dropdown.svg';
import { ReactComponent as search } from 'assets/searchInput.svg';
import mq from 'config/mq';
import colors from 'styles/colors';

export const Options = styled.ul`
  background: #fff;
  border-radius: 0.3rem 0.3rem;
  border: 0.02rem solid #d9d9d9cc;
  display: flex;
  flex-direction: column;
  height: 9rem;
  justify-content: left;
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

export const Option = styled.button`
  align-items: center;
  background: ${({ selected }) => (selected ? '#e4e7eb' : '#fff')};
  border: none;
  display: flex;
  font-size: 0.8rem;
  list-style: none;
  margin: 0;
  padding: 0.26rem 0rem 0.26rem 1rem;
  text-align: -webkit-match-parent;
  white-space: nowrap;
  width: 100%;

  &&:hover {
    background-color: ${({ selected }) =>
      selected ? colors.lightBlue : '#edf0f2'};
    color: ${({ selected }) => selected && '#edf0f2'};
    cursor: pointer;
    transition: all ease-in-out 0.3s;
  }
`;

export const Select = styled.button`
  align-items: center;
  background: ${({ open }) => (open ? '#c7cdd5' : '#e4e7eb')};
  border-radius: 0.3rem 0.3rem 0.3rem 0.3rem;
  border: none;
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
  align-items: center;
  color: black;
  display: flex;
  font-size: 0.92rem;
  font-weight: 400;
  padding: 0rem 0 0 1rem;
`;

export const Arrow = styled(arrow)`
  height: 1.4rem;
  padding: 0;
`;

export const Img = styled.img`
  height: 1.5rem;
  margin: 0 0.5rem 0 0;
  width: 1.5rem;
`;

export const Search = styled.input`
  border-radius: 0.3rem;
  border: 0.01rem solid ${colors.lightBlack};
  color: black;
  font-size: 0.8rem;
  opacity: 1;
  padding: 0.5rem 0 0.5rem 0.6rem;
  width: 90%;

  &&:focus {
    border: 0.01rem solid ${colors.lightBlue};
    outline: none;
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
  fill: ${colors.darkGray};
  height: 1rem;
  position: absolute;
  right: 0.5rem;
  top: 0.5rem;
  width: 1rem;
`;
