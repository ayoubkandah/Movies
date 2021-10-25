import colors from 'styles/colors';
import styled from 'styled-components';

const Tag = styled.button`
  background-color: ${({ checked }) => checked && colors.lightBlue};
  background-color: white;
  border-color: ${({ checked }) => checked && colors.lightBlue};
  border-radius: 0.8rem;
  border: 0.01rem solid gray;
  color: ${({ checked }) => checked && '#fff'};
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 1rem;
  margin: 0.3rem;
  padding: 0rem 0.45rem 0.1rem 0.45rem;
  &&:hover {
    background-color: ${colors.lightBlue};
    border-color: ${colors.lightBlue};
    color: #fff;
    cursor: pointer;
  }
`;

export default Tag;
