import React from 'react';
import propTypes from 'prop-types';
import Input from './text-input.style';

const TextInput = ({ data, handleChange }) => (
  <Input
    placeholder={data.placeholder}
    name={data.name}
    onChange={handleChange}
  />
);

export default TextInput;

TextInput.propTypes = {
  data: propTypes.objectOf(propTypes.string).isRequired,
  handleChange: propTypes.func.isRequired,
};
