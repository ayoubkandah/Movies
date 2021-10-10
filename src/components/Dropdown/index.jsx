import React, { useState } from 'react';
import propTypes from 'prop-types';
import {
  Arrow,
  Option,
  Options,
  Select,
  Wrapper,
  Selected,
} from './dropdown.style';

const Dropdown = ({ label, defaultValue, handleChange }) => {
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState(defaultValue);

  const handleDropdown = () => {
    setOpen(!open);
  };

  const handleSelect = (optionValue) => {
    setInputValue(optionValue);
    setOpen(false);
    const event = { target: { value: optionValue.value } };
    handleChange(event);
  };

  return (
    <Wrapper>
      <Select open={open} onClick={handleDropdown}>
        <Selected>{inputValue.name}</Selected>
        <Arrow />
      </Select>
      {open && (
        <Options>
          {label.map((option) => (
            <Option key={option.name} onClick={() => handleSelect(option)}>
              {option.name}
            </Option>
          ))}
        </Options>
      )}
    </Wrapper>
  );
};

Dropdown.propTypes = {
  label: propTypes.arrayOf(propTypes.object).isRequired,
  handleChange: propTypes.func.isRequired,
  defaultValue: propTypes.objectOf(propTypes.string).isRequired,
};

export default Dropdown;
