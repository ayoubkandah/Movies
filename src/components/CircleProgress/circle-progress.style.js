import mq from 'config/mq';
import styled, { keyframes } from 'styled-components';
import colors from 'styles/colors';

const before = keyframes`
0% {      visibility: hidden;
 clip: rect(0px, 2.8125rem, 0rem, 0.9375rem);
}

100%{      
   clip: rect(0px, 2.8125rem, ${({ right }) => `${right}rem`}, 0.9375rem);
}`;

const after = keyframes`
0% { 
  clip: rect(1.91rem, 0.9375rem, 3.125rem, 0rem);
}

100%{     
  visibility: visible;
  clip: rect(${({ left }) => `${2 - left}rem`}, 0.9375rem, 3.125rem, 0rem);
  }`;

export const Rate = styled.div`
  align-items: center;
  background-color: black;
  border-radius: 5rem;
  border: 0.15rem solid
    ${({ color }) => (color === 'green' ? colors.green : colors.darkGreen)};
  bottom: 4rem;
  color: white;
  display: none;
  height: 1.8rem;
  justify-content: center;
  left: 0.5rem;
  position: absolute;
  width: 1.8rem;
  z-index: 7;

  &&::before {
    animation-duration: 2s;
    animation-iteration-count: 1;
    animation-name: ${before};
    background-color: transparent;
    border-radius: 5rem;
    border: 0.15rem solid
      ${({ color }) =>
        color === 'green' ? colors.lightGreen : colors.lightYellow};
    clip: rect(0rem, 2.8125rem, ${({ right }) => `${right}rem`}, 0.9375rem);
    content: '';
    height: 1.8rem;
    overflow: hidden;
    position: absolute;
    width: 1.8rem;
    :hover {
      display: none;
    }
  }

  &&::after {
    animation-delay: 0.83s;
    animation-fill-mode: forwards;
    animation-name: ${after};
    background-color: transparent;
    border-radius: 5rem;
    border: 0.15rem solid
      ${({ color }) =>
        color === 'green' ? colors.lightGreen : colors.lightYellow};
    clip: rect(${({ left }) => `${2 - left}rem`}, 0.9375rem, 3.125rem, 0rem);
    content: '';
    display: ${({ left }) => (left ? 'block' : 'none')};
    height: 1.8rem;
    overflow: hidden;
    position: absolute;
    transition: all 1.5s ease;
    visibility: hidden;
    width: 1.8rem;
  }

  ${mq.dp`
  display: flex;
  `}
`;

export const RatePercentage = styled.h5`
  font-size: 0.8rem;
  font-weight: 900;
  margin: 0;
  padding: 0;
  &&::after {
    bottom: 0.9rem;
    color: #fff;
    content: '٪';
    font-size: 0.4rem;
    font-weight: 500;
    margin: 0 0 0 0.05rem;
    position: absolute;
  }
`;

export const Border = styled.div`
  background-color: transparent;
  border-radius: 3rem;
  border: 0.126rem solid black;
  height: 2.0787rem;
  left: -0.277rem;
  position: absolute;
  top: -0.26rem;
  width: 2.0787rem;
  z-index: -1;
`;
