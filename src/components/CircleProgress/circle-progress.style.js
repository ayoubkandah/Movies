import mq from 'config/mq';
import styled, { keyframes } from 'styled-components';

const before = keyframes`
0% {      visibility: hidden;
 clip: rect(0px, 2.8125rem, 0rem, 0.9375rem);
}
100%{      
   clip: rect(0px, 2.8125rem, ${({ right }) => `${right}rem`}, 0.9375rem);
}
`;

const after = keyframes`
0% { 
  clip: rect(1.91rem, 0.9375rem, 3.125rem, 0rem);
}

100%{     
  visibility: visible;
  clip: rect(${({ left }) => `${2 - left}rem`}, 0.9375rem, 3.125rem, 0rem);
;

}
`;

export const Rate = styled.div`
  display: none;
  width: 1.8rem;
  height: 1.8rem;
  position: absolute;
  background-color: black;
  bottom: 4rem;
  left: 0.5rem;
  border-radius: 5rem;
  color: white;
  justify-content: center;
  align-items: center;
  border: 0.15rem solid
    ${({ color }) => (color === 'green' ? '#5c7a5c' : '#7a7a5c')};

  z-index: 7;
  ${mq.dp`
  display: flex;
  `}
  &&::before {
    content: '';
    position: absolute;
    width: 1.8rem;
    height: 1.8rem;
    border-radius: 5rem;
    background-color: transparent;
    border: 0.15rem solid
      ${({ color }) => (color === 'green' ? '#7ac961' : '#bfc92a')};

    clip: rect(0rem, 2.8125rem, ${({ right }) => `${right}rem`}, 0.9375rem);
    animation-name: ${before};

    animation-duration: 2s;
    animation-iteration-count: 1;

    overflow: hidden;
    :hover {
      display: none;
    }
  }
  &&::after {
    content: '';
    visibility: hidden;
    display: ${({ left }) => (left ? 'block' : 'none')};
    position: absolute;
    width: 1.8rem;
    height: 1.8rem;
    border-radius: 5rem;
    background-color: transparent;
    border: 0.15rem solid
      ${({ color }) => (color === 'green' ? '#7ac961' : '#bfc92a')};
    clip: rect(${({ left }) => `${2 - left}rem`}, 0.9375rem, 3.125rem, 0rem);
    animation-name: ${after};
    /* animation-duration: 0.5s; */
    transition: all 1.5s ease;

    animation-delay: 0.83s;
    animation-fill-mode: forwards;
    overflow: hidden;
  }
`;

export const RatePercentage = styled.h5`
  font-size: 0.8rem;
  padding: 0;
  margin: 0;
  font-weight: 900;
  &&::after {
    content: '٪';
    color: #fff;
    font-size: 0.4rem;
    position: absolute;
    bottom: 0.9rem;
    margin: 0 0 0 0.05rem;
    font-weight: 500;
  }
`;

export const Border = styled.div`
  position: absolute;
  width: 2.0787rem;
  height: 2.0787rem;
  left: -0.277rem;
  top: -0.26rem;
  background-color: transparent;
  border-radius: 3rem;
  border: 0.126rem solid black;
  z-index: -1;
`;
