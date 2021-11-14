import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Border, Rate, RatePercentage } from './circle-progress.style';

/**
 * Circle Rate.
 *
 * @param {Number} props.percentage Percentage number.
 *
 * @return {JSX.Element}
 */
const CircleProgress = ({ percentage }) => {
  const [percentageToRem, setPercentToRem] = useState({
    right: null,
    left: null,
  });

  // Calculation each half of circle.
  useEffect(() => {
    let leftPxToRem;

    const rightPercentageToPx =
      parseInt(percentage * 6.4, 10) === 31 ? 30 : percentage * 6.4;
    const rightPxToRem =
      rightPercentageToPx / 16 < 0.12 ? 0.12 : rightPercentageToPx / 16;

    if (percentage > 5) {
      const leftPercentageToPx =
        parseInt((percentage - 5) * 6.4, 10) === 31
          ? 30
          : (percentage - 5) * 6.4;
      leftPxToRem =
        leftPercentageToPx / 16 < 0.12 ? 0 : leftPercentageToPx / 16;
    }

    setPercentToRem({
      ...percentageToRem,
      left: leftPxToRem,
      right: rightPxToRem,
    });
  }, [percentage]);

  return (
    <Rate
      right={percentageToRem.right}
      left={percentageToRem.left}
      color={percentage < 7 ? 'yellow' : 'green'}
    >
      <RatePercentage>{percentage * 10}</RatePercentage>
      <Border />
    </Rate>
  );
};

CircleProgress.propTypes = {
  percentage: PropTypes.number.isRequired,
};

export default CircleProgress;
