import React from 'react';
import propTypes from 'prop-types';
import { useState } from 'react/cjs/react.development';
import { Wrapper, CheckboxInput } from './checkbox.style';

const Checkbox = ({ selected = false, handleChange, Inputvalue }) => {
  const [checked, setChecked] = useState(selected);

  const handleChecked = () => {
    setChecked(!checked);
  };

  return (
    <Wrapper checked={checked} onClick={handleChecked}>
      <CheckboxInput
        checked={selected}
        value={Inputvalue}
        type="checkbox"
        onChange={handleChange}
      />
    </Wrapper>
  );
};

export default Checkbox;

Checkbox.propTypes = {
  Inputvalue: propTypes.string.isRequired,
  selected: propTypes.bool.isRequired,
  handleChange: propTypes.func.isRequired,
};
