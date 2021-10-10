import { css } from 'styled-components';
import { breakpoints } from './variables';

const mq = Object.keys(breakpoints).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media only screen and (min-width: ${breakpoints[label]}rem) {
      ${css(...args)};
    }
  `;

  return acc;
}, {});

export default mq;
