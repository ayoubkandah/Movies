import React from 'react';
import propTypes from 'prop-types';
import Input from './text-input.style';

/**
 * Text input.
 *
 * @param {Object} props.data           Name and value for text input.
 * @param {Function} props.handleChange handle onChange for input.
 *
 * @return {JSX.Element}
 */
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
