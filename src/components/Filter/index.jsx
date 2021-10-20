import React, { useState } from 'react';
import propTypes from 'prop-types';
import { Wrapper, Input, Name, Arrow } from './filter.style';

/**
 * Filter label.
 *
 * @param {String} props.name Label name.
 *
 * @return {JSX.Element}
 */
const Filter = ({ name }) => {
  const [active, setActive] = useState(false);

  const handleActive = () => {
    setActive(!active);
  };

  return (
    <Wrapper onClick={handleActive}>
      <Input
        bottomBorder={active ? 'show' : 'hide'}
        placeholder="Sort"
        type="select"
      >
        <Name>{name}</Name>
        <Arrow active={active ? 'active' : 'notActive'} />
      </Input>
    </Wrapper>
  );
};

Filter.propTypes = {
  name: propTypes.string.isRequired,
};

export default Filter;
