import React from 'react';
import propTypes from 'prop-types';
import { useState } from 'react/cjs/react.development';
import Tag from './tags.style';

const Tags = ({ data, handleChange }) => {
  const [checked, setChecked] = useState(false);

  const handleChecked = () => {
    setChecked(!checked);
  };

  return (
    <Tag
      onClick={() => {
        if (!checked) {
          handleChange(data);
        } else {
          handleChange({ type: data.type, value: null });
        }
        handleChecked();
      }}
      checked={checked}
    >
      {data.name}
    </Tag>
  );
};

export default Tags;

Tags.propTypes = {
  data: propTypes.objectOf(propTypes.string).isRequired,
  handleChange: propTypes.func.isRequired,
};
