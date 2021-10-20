import styled from 'styled-components';

const Tag = styled.button`
  border: 0.01rem solid gray;
  margin: 0.3rem;
  background-color: white;
  border-radius: 0.8rem;
  padding: 0rem 0.45rem 0.1rem 0.45rem;
  font-size: 1rem;
  font-family: 'Source Sans Pro', sans-serif;
  background-color: ${({ checked }) => checked && 'rgba(1, 180, 228)'};
  color: ${({ checked }) => checked && '#fff'};
  border-color: ${({ checked }) => checked && 'rgba(1, 180, 228)'};
  &&:hover {
    cursor: pointer;
    background-color: rgba(1, 180, 228);
    color: #fff;
    border-color: rgba(1, 180, 228);
  }
`;

export default Tag;
