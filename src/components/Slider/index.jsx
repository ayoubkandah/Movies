import React from 'react';
import { useState } from 'react/cjs/react.development';
import { SliderMax, SliderMin, Wrapper } from './slider.style';

const Slider = () => {
  const [sliderMax, setSliderMax] = useState(4);

  const handleSliding = ({ target }) => {
    console.log(target.value);
    if (target.name === 'max') setSliderMax(target.value);
  };
  console.log('slider');
  return (
    <Wrapper>
      <SliderMax
        type="range"
        name="max"
        step={1}
        min={0}
        max={10}
        defaultValue={5}
        onChange={handleSliding}
      />
      <SliderMin
        type="range"
        name="min"
        step={1}
        min={0}
        max={sliderMax}
        defaultValue={0}
        onChange={handleSliding}
      />
    </Wrapper>
  );
};

export default Slider;
