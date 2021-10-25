import { colors } from '@mui/material';
import styled from 'styled-components';

export const RadioInput = styled.input`
  cursor: pointer;
  height: 1rem;
  opacity: 0;
  position: relative;
  width: 1rem;
  z-index: 1;
`;

export const RadioSpan = styled.span`
  border-radius: 40rem;
  margin: 0;
  padding: 0;
  position: absolute;

  &&::before {
    background: ${({ checked }) => (checked ? 'white' : ' #e4e7eb')};
    border-radius: 30rem;
    border: ${({ checked }) => (checked ? '0.32rem' : ' 0.1rem ')} solid
      ${({ checked }) => (checked ? colors.lightBlue : ' #ced3db ')};
    content: '';
    height: ${({ checked }) => (checked ? '0.37rem' : ' 0.8rem')};
    left: ${({ checked }) => (checked ? '0.31rem' : ' 0.29rem')};
    padding: 0;
    position: absolute;
    text-align: center;
    top: ${({ checked }) => (checked ? '0.2rem' : ' 0.2rem')};
    width: ${({ checked }) => (checked ? '0.37rem' : ' 0.8rem')};
    z-index: 3;
  }
`;
