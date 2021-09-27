import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';

export const InterfaceContext = React.createContext();

export default function Interface({ children }) {
  const [mobileMenu, setMobileMenu] = useState(false);

  const menuHandle = () => setMobileMenu(!mobileMenu);

  const store = {
    menuHandle,
    mobileMenu,
  };
  return (
    <InterfaceContext.Provider value={store}>
      {children}
    </InterfaceContext.Provider>
  );
}

export const useInterfaceContext = () => useContext(InterfaceContext);

Interface.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
