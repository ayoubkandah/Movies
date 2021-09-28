import React, { useState } from 'react';
import { Wrapper, Input, Name, Arrow } from './inputs.style';

/**
 *
 * @returns
 */
export default function Filter() {
  const [active, setActive] = useState(false);
  const handleActive = () => {
    setActive(!active);
  };

  return (
    <Wrapper onClick={handleActive}>
      <Input placeholder="Sort" type="select">
        <Name>Sort</Name>
        <Arrow active={active ? 'active' : 'notActive'} />
      </Input>
    </Wrapper>
  );
}
