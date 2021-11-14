import React from 'react';
import CircleProgress from 'components/CircleProgress/index';
import { Wrapper, Div } from './rate.style';

export default {
  title: 'Percentage',
  component: CircleProgress,
};

export const RatePercentage = (props) => (
  <Div>
    <Wrapper>
      {/* eslint-disable react/jsx-props-no-spreading */}
      <CircleProgress {...props} />
    </Wrapper>
  </Div>
);

RatePercentage.args = {
  percentage: '7',
};
