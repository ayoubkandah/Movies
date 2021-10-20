import styled from 'styled-components';

export const CheckboxInput = styled.input`
  height: 0.85rem;
  opacity: 0;
  padding: 0;
  width: 0.8rem;
`;

export const Wrapper = styled.div`
  position: relative;
  display: inline-block;
  padding: 0;
  &&::after {
    content: '✔';
    position: absolute;
    width: 0.78rem;
    height: 0.78rem;
    background-color: ${({ checked }) =>
      checked ? 'rgba(1, 180, 228)' : '#fff'};
    left: 0.153rem;
    top: 0.125rem;
    border-radius: 0.23rem;
    border: 0.11rem solid
      ${({ checked }) => (checked ? 'rgba(1, 180, 228)' : '#6b6b6b')};
    opacity: 1;
    z-index: -1;
    font-size: 0.7rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
  }
`;

export const CheckboxStyle = styled.div`
  background-color: red;
  height: 1rem;
  position: absolute;
  width: 1rem;
`;
