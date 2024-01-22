// Alert.jsx
import React from 'react';
import { IconContext } from 'react-icons';
import { FiCheck, FiX, FiInfo } from 'react-icons/fi';  // Använd de ikoner du behöver

const Alert = ({ color, icon,}) => {
  const getIcon = () => {
    switch (icon) {
      case 'check':
        return <FiCheck />;
      case 'cross':
        return <FiX />;
      case 'info':
        return <FiInfo />;
      default:
        return null;
    }
  };

  return (
    <div style={{ border: `2px solid ${color}`, padding: '10px', margin: '10px', display: 'flex', alignItems: 'center' }}>
      <IconContext.Provider value={{ color: 'black', size: '1.5em', style: { marginRight: '5px' } }}>
        {icon && getIcon()}
      </IconContext.Provider>
      <h3>Det här är en alert!</h3>
    </div>
  );
};

export default Alert;
