import React from 'react';
import propTypes from 'prop-types';
import { useState } from 'react/cjs/react.development';
import { Wrapper, CheckboxInput } from './checkbox.style';

const Checkbox = ({
  selected = false,
  handleChange,
  inputValue,
  disabled = false,
}) => {
  const [checked, setChecked] = useState(selected);

  const handleChecked = () => {
    setChecked(!checked);
  };

  return (
    <Wrapper checked={checked} onClick={handleChecked}>
      <CheckboxInput
        checked={selected}
        value={inputValue}
        type="checkbox"
        disabled={disabled}
        onChange={handleChange}
      />
    </Wrapper>
  );
};

export default Checkbox;

Checkbox.propTypes = {
  inputValue: propTypes.string.isRequired,
  selected: propTypes.bool.isRequired,
  handleChange: propTypes.func.isRequired,
  disabled: propTypes.bool.isRequired,
};
