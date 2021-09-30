import React, { useState } from 'react';
import { Wrapper, Input, Name, Arrow } from './filter.style';

/**
 * Filter label.
 * Shared component.
 *
 * @return {JSX.Element}
 */
export default function Filter() {
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
        <Name>Sort</Name>
        <Arrow active={active ? 'active' : 'notActive'} />
      </Input>
    </Wrapper>
  );
}
