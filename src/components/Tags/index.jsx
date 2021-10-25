import React from 'react';
import propTypes from 'prop-types';
import { useState } from 'react/cjs/react.development';
import Tag from './tags.style';

/**
 * Tag button.
 *
 * @param {Object} props.data           Tags name and value.
 * @param {Function} props.handleChange Handle onChange.
 *
 *
 * @return {JSX.Element}
 */
const Tags = ({ data, handleChange }) => {
  const [checked, setChecked] = useState(false);

  const handleChecked = () => {
    setChecked(!checked);
  };

  return (
    <Tag
      type="button"
      onClick={() => {
        if (!checked) {
          handleChange(data);
        } else {
          handleChange({ name: data.name, value: null });
        }
        handleChecked();
      }}
      checked={checked}
    >
      {data.label}
    </Tag>
  );
};

Tags.propTypes = {
  data: propTypes.shape({
    name: propTypes.string,
    label: propTypes.string,
    value: propTypes.number,
  }).isRequired,
  handleChange: propTypes.func.isRequired,
};

export default Tags;
