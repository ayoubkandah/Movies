import React from 'react';
import propTypes from 'prop-types';
import { RadioSpan, RadioInput } from './radio.style';

export default function Radio({ handleChange, value, checked }) {
  return (
    <RadioSpan checked={checked}>
      <RadioInput disabled onChange={handleChange} type="radio" value={value} />
    </RadioSpan>
  );
}

Radio.propTypes = {
  handleChange: propTypes.func.isRequired,
  value: propTypes.string.isRequired,
  checked: propTypes.bool.isRequired,
};
