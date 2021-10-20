import React, { useRef, useState } from 'react';
import propTypes from 'prop-types';
import { TooltipText, TooltipContainer } from './tooltip.style';

/**
 * Tooltip shared component.
 *
 * @param {JSX.Element} props.Icon       Icon component.
 * @param {String}      props.text       Tooltip text.
 * @param {String}      props.background Background color.
 * @param {String}      props.color      Font color.
 *
 * @return {JSX.Element}
 */
const Tooltip = ({ Icon, text, background = 'black', color = 'white' }) => {
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
};

Tooltip.propTypes = {
  Icon: propTypes.elementType.isRequired,
  text: propTypes.string.isRequired,
  background: propTypes.string,
  color: propTypes.string,
};

Tooltip.defaultProps = {
  background: propTypes.string,
  color: propTypes.string,
};

export default Tooltip;
