import React from 'react';
import { IconContext } from 'react-icons';

const Badge = ({ color, size, icon, }) => {
  return (
    <div style={{ backgroundColor: color, padding: '10px', margin: '10px', display: 'flex', alignItems: 'center',  }}>
      <IconContext.Provider value={{ color: 'grey', size: size, style: { marginRight: '20px'} }}>
        {icon && React.createElement(icon)}
      </IconContext.Provider>
      <h3 className='badget__text'>Det här är en badget</h3>
    </div>
  );
};

export default Badge;