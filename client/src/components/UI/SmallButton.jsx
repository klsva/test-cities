import React from 'react';
import classes from './SmallButton.module.css';

const SmallButton = ({children, ...props}) => {
  return (
    <button {...props} className={classes.smallBtn}>
      {children}
    </button>
  );
};

export default SmallButton;