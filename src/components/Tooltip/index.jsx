import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { TooltipText, TooltipContainer } from './tooltip.style';

/**
 * Tooltip shared component.
 *
 * @param {JSX.Element} Icon Icon component.
 * @param {JSX.Element} text Tooltip text.
 *
 *
 * @return {JSX.Element}
 */
export default function Tooltip({
  Icon,
  text,
  background = 'black',
  color = 'white',
}) {
  const tools = useRef();
  const [xy, setXY] = useState({ x: null, y: null });
  const [isPositionUp, setIsPositionUp] = useState('up');
  const [displayTooltip, setDisplayTooltip] = useState(false);

  const handleTooltip = () => {
    if (tools.current.getBoundingClientRect().y < 30) {
      const x = parseInt(tools.current.clientHeight / 16, 10) * 3 - 49;
      const y = -parseInt(tools.current.clientHeight / 16, 10) * 10 - 30;

      setXY({ x, y });
      setIsPositionUp('down');
      setDisplayTooltip(!displayTooltip);
    } else {
      const x = parseInt(tools.current.clientHeight / 16, 10) * 3 - 49;
      const y = -parseInt(tools.current.clientHeight / 16, 10) * 55 - 261;

      setXY({ x, y });
      setIsPositionUp('up');
    }

    setDisplayTooltip(!displayTooltip);
  };

  return (
    <TooltipContainer>
      <Icon ref={tools} onClick={handleTooltip} />

      {displayTooltip && (
        <TooltipText
          pos={isPositionUp}
          x={xy.x}
          y={xy.y}
          background={background}
          color={color}
        >
          {text}
        </TooltipText>
      )}
    </TooltipContainer>
  );
}

Tooltip.propTypes = {
  Icon: PropTypes.elementType.isRequired,
  text: PropTypes.string.isRequired,
  background: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};
