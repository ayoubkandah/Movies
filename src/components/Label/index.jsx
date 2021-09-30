import React from 'react';
import Tooltip from 'components/Tooltip';
import PropTypes from 'prop-types';
import { Wrapper, LabelName, NameContainer } from './label.style';

/**
 * Label shared component.
 *
 * @param {JSX.Element} Icon Icon for tooltip.
 * @param {Object}      data Text for label name and tooltip text.
 *
 * @return {JSX.Element}
 */
export default function Label({ Icon, data, Input }) {
  return (
    <Wrapper>
      <NameContainer>
        <LabelName>{data.labelName}</LabelName>

        {Icon && <Tooltip Icon={Icon} text={data.tooltipText} />}
      </NameContainer>
      <Input />
    </Wrapper>
  );
}

Label.propTypes = {
  Icon: PropTypes.elementType.isRequired,
  Input: PropTypes.elementType.isRequired,
  data: PropTypes.objectOf(PropTypes.string).isRequired,
};
