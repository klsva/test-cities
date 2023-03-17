import React from 'react';
import classes from './Input.module.css';

const Input = (props) => {
  return (
    <input className={classes.custominput} {...props}/>
  );
};

export default Input;