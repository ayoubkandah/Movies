import styled from 'styled-components';
import colors from 'styles/colors';

export const Img = styled.img`
  border-radius: 0.5rem;
  height: 3.2rem;
  width: 3.2rem;
`;

export const ProviderButton = styled.button`
  background-color: transparent;
  border: none;
  margin: 0.5rem 0.5rem 0 0;
  padding: 0;
  position: relative;

  &&::after {
    background-image: url('https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-739-check-white-a09b2a26e235b77489dfd57be3b66a17ff86efd5fb94d6db5f10cd3ced01e5a6.svg');
    background-size: cover;
    border-radius: 0.5rem;
    content: '';
    display: ${({ selected }) => (selected ? 'block' : 'none')};
    height: 1.9rem;
    left: 0.7rem;
    opacity: 0.8;
    position: absolute;
    top: 0.7rem;
    width: 1.9rem;
  }

  &&::before {
    background-color: ${colors.lightBlue};
    border-radius: 0.5rem;
    content: '';
    display: ${({ selected }) => (selected ? 'block' : 'none')};
    height: 3.2rem;
    left: 0rem;
    opacity: 0.9;
    position: absolute;
    top: 0;
    width: 3.2rem;
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
