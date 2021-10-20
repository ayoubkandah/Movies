import React from 'react';
import propTypes from 'prop-types';
import { useState } from 'react/cjs/react.development';
import { Wrapper, CheckboxInput } from './checkbox.style';

/**
 * Checkbox input.
 *
 * @param {Boolean}  props.selected     Select checkbox.
 * @param {Function} props.handleChange Handle onChange.
 * @param {String}   props.inputValue   Value of checkbox.
 * @param {Boolean}  props.disabled     Disabled checkbox or not.
 * @param {String}   props.name         Name of checkbox.
 *
 *
 * @return {JSX.Element}
 */
const Checkbox = ({
  selected = false,
  handleChange,
  inputValue,
  disabled = false,
  name,
}) => {
  const [checked, setChecked] = useState(selected);

  const handleChecked = () => {
    setChecked(!checked);
  };

  return (
    <Wrapper checked={checked} onClick={handleChecked}>
      <CheckboxInput
        name={name}
        type="checkbox"
        checked={selected}
        value={inputValue}
        disabled={disabled}
        onChange={handleChange}
      />
    </Wrapper>
  );
};

Checkbox.propTypes = {
  name: propTypes.string.isRequired,
  selected: propTypes.bool.isRequired,
  disabled: propTypes.bool,
  inputValue: propTypes.string.isRequired,
  handleChange: propTypes.func.isRequired,
};

Checkbox.defaultProps = {
  disabled: propTypes.bool,
};

export default Checkbox;
