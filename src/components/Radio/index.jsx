import React from 'react';
import propTypes from 'prop-types';
import { RadioSpan, RadioInput } from './radio.style';

const Radio = ({ handleChange, value, checked, name }) => (
  <RadioSpan checked={checked}>
    <RadioInput
      disabled
      onChange={handleChange}
      name={name}
      type="radio"
      value={value}
    />
  </RadioSpan>
);

Radio.propTypes = {
  handleChange: propTypes.func.isRequired,
  value: propTypes.string.isRequired,
  checked: propTypes.bool.isRequired,
  name: propTypes.string.isRequired,
};

export default Radio;
