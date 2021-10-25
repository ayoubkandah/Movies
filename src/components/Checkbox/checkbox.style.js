import styled from 'styled-components';
import colors from 'styles/colors';

export const CheckboxInput = styled.input`
  height: 0.85rem;
  opacity: 0;
  padding: 0;
  width: 0.8rem;
`;

export const Wrapper = styled.div`
  display: inline-block;
  padding: 0;
  position: relative;

  &&::after {
    align-items: center;
    background-color: ${({ checked }) => (checked ? colors.lightBlue : '#fff')};
    border-radius: 0.23rem;
    border: 0.11rem solid
      ${({ checked }) => (checked ? colors.lightBlue : colors.gray)};
    color: #fff;
    content: '✔';
    display: flex;
    font-size: 0.7rem;
    height: 0.78rem;
    justify-content: center;
    left: 0.153rem;
    opacity: 1;
    position: absolute;
    top: 0.125rem;
    width: 0.78rem;
    z-index: -1;
  }
`;

export const CheckboxStyle = styled.div`
  background-color: red;
  height: 1rem;
  position: absolute;
  width: 1rem;
`;
