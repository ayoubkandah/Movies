import styled from 'styled-components';

export const Img = styled.img`
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 0.5rem;
`;

export const ProviderButton = styled.button`
  border: none;
  margin: 0.5rem 0.5rem 0 0;
  position: relative;
  padding: 0;
  background-color: transparent;
  &&::after {
    content: '';
    display: ${({ selected }) => (selected ? 'block' : 'none')};
    width: 1.9rem;
    height: 1.9rem;
    position: absolute;
    opacity: 0.8;
    border-radius: 0.5rem;
    left: 0.7rem;
    top: 0.7rem;
    background-image: url('https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-739-check-white-a09b2a26e235b77489dfd57be3b66a17ff86efd5fb94d6db5f10cd3ced01e5a6.svg');
    background-size: cover;
  }
  &&::before {
    content: '';
    display: ${({ selected }) => (selected ? 'block' : 'none')};
    width: 3.2rem;
    height: 3.2rem;
    position: absolute;
    opacity: 0.9;
    border-radius: 0.5rem;
    left: 0rem;
    top: 0;
    background-color: rgba(1, 180, 228);
  }
  &:hover {
    cursor: pointer;
    &&::after {
      display: block;
    }
    &&::before {
      display: block;
    }
  }
`;

// &&::before {
//     content: '';
//     width: 3.2rem;
//     height: 3.2rem;
//     position: absolute;
//     left: 0rem;
//     top: 0;
//     background-color: red;
//     background-image: url('https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-739-check-white-a09b2a26e235b77489dfd57be3b66a17ff86efd5fb94d6db5f10cd3ced01e5a6.svg');
