import styled from 'styled-components';

export const RadioInput = styled.input`
  width: 1rem;
  height: 1rem;
  position: relative;
  z-index: 1;
  opacity: 0;
  cursor: pointer;
`;

export const RadioSpan = styled.span`
  position: absolute;
  padding: 0;
  margin: 0;

  border-radius: 40rem;
  &&::before {
    position: absolute;
    content: '';
    text-align: center;
    background: ${({ checked }) => (checked ? 'white' : ' #e4e7eb')};
    width: ${({ checked }) => (checked ? '0.37rem' : ' 0.8rem')};
    height: ${({ checked }) => (checked ? '0.37rem' : ' 0.8rem')};
    top: ${({ checked }) => (checked ? '0.2rem' : ' 0.2rem')};
    left: ${({ checked }) => (checked ? '0.31rem' : ' 0.29rem')};
    padding: 0;
    border: ${({ checked }) => (checked ? '0.32rem' : ' 0.1rem ')} solid
      ${({ checked }) => (checked ? 'rgba(1,180,228)' : ' #ced3db ')};
    border-radius: 30rem;
    z-index: 3;
  }
`;
