import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import {
  Img,
  Arrow,
  Option,
  Select,
  Search,
  Options,
  Wrapper,
  Selected,
  SearchIcon,
  SearchWrapper,
} from './dropdown.style';

/**
 * Dropdown shared component.
 *
 * @param {String} label Label name.
 * @param {String} defaultValue Default value for input.
 * @param {Function} handleChange Handle Onchange.
 * @param {Boolean} search Trigger search.
 *
 * @return {JSX.Element}
 */
const Dropdown = ({ label, defaultValue, handleChange, search }) => {
  const [open, setOpen] = useState(false);
  const [filter, setFilter] = useState(label);
  const [inputValue, setInputValue] = useState(defaultValue);

  const handleDropdown = () => {
    setOpen(!open);
  };

  const handleSelect = (optionValue) => {
    setInputValue(optionValue);
    setOpen(false);
    handleChange(optionValue);
  };

  // Search in options
  const handleSearch = ({ target }) => {
    const filtered = label.filter((value) =>
      value.name.toLowerCase().includes(target.value.toLowerCase())
    );

    setFilter(filtered);
  };

  useEffect(() => {
    setFilter(label);
  }, [label]);

  return (
    <Wrapper>
      <Select type="button" open={open} onClick={handleDropdown}>
        <Selected>
          {inputValue.img && <Img src={inputValue.img} />}
          {inputValue.name}
        </Selected>
        <Arrow />
      </Select>

      {open && (
        <>
          <Options>
            {search && (
              <SearchWrapper>
                <Search onChange={handleSearch} />
                <SearchIcon />
              </SearchWrapper>
            )}
            {filter && (
              <>
                {filter.map((option) => (
                  <Option
                    selected={inputValue === option && true}
                    key={option.value}
                    onClick={() => handleSelect(option)}
                  >
                    {option.img && <Img src={option.img} />}

                    {option.name}
                  </Option>
                ))}
              </>
            )}
          </Options>
        </>
      )}
    </Wrapper>
  );
};

Dropdown.propTypes = {
  label: propTypes.arrayOf(propTypes.object).isRequired,
  handleChange: propTypes.func.isRequired,
  defaultValue: propTypes.objectOf(propTypes.string).isRequired,
  search: propTypes.bool.isRequired,
};

export default Dropdown;
