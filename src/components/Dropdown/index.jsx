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
 * Dropdown component.
 *
 * @param {String}   props.options      Label name.
 * @param {String}   props.defaultValue Default value for input.
 * @param {Function} props.handleChange Handle Onchange.
 * @param {Boolean}  props.search       Trigger search.
 *
 * @return {JSX.Element}
 */
const Dropdown = ({ options, defaultValue, handleChange, search }) => {
  const [open, setOpen] = useState(false);
  const [filter, setFilter] = useState(options);
  const [inputValue, setInputValue] = useState(defaultValue);

  const handleDropdown = () => {
    setOpen(!open);
  };

  const handleSelect = (optionValue) => {
    setInputValue(optionValue);
    setOpen(false);

    handleChange(optionValue);
  };

  // Search in options.
  const handleSearch = ({ target }) => {
    const filtered = options.filter((value) =>
      value.name.toLowerCase().includes(target.value.toLowerCase())
    );

    setFilter(filtered);
  };

  useEffect(() => {
    setFilter(options);
    console.log(options);
  }, [options]);

  return (
    <Wrapper>
      <Select type="button" open={open} onClick={handleDropdown}>
        <Selected>
          {inputValue.img && <Img src={inputValue.img} />}
          {inputValue.label}
        </Selected>
        <Arrow />
      </Select>

      {open && (
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

                  {option.label}
                </Option>
              ))}
            </>
          )}
        </Options>
      )}
    </Wrapper>
  );
};

Dropdown.propTypes = {
  options: propTypes.arrayOf(propTypes.object).isRequired,
  handleChange: propTypes.func.isRequired,
  defaultValue: propTypes.objectOf(propTypes.string).isRequired,
  search: propTypes.bool.isRequired,
};

export default Dropdown;
