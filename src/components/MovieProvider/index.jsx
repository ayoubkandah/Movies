import React, { useState } from 'react';
import propTypes from 'prop-types';
import { image } from 'config/variables';
import { Img, ProviderButton } from './movie-provider.style';

/**
 * Movie provider.
 *
 * @param {provider} props.provider Provider data.
 * @param {Function} props.handleChange Function that handle onChange.
 *
 * @return {JSX.Element}
 */

const MovieProvider = ({ provider, handleChange }) => {
  const [selected, setSelected] = useState(false);

  const handleSelected = () => {
    handleChange({
      name: 'with_watch_providers',
      value: provider.provider_id,
    });

    setSelected(!selected);
  };

  return (
    <ProviderButton type="button" selected={selected} onClick={handleSelected}>
      <Img src={`${image}${provider.logo_path}`} />
    </ProviderButton>
  );
};

MovieProvider.propTypes = {
  provider: propTypes.objectOf(propTypes.string, propTypes.number).isRequired,
  handleChange: propTypes.func.isRequired,
};

export default MovieProvider;
