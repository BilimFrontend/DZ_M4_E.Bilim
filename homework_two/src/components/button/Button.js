import React from 'react';
import classes from "./Button.module.css";

const Button = ({text, handle}) => {
    return (
        <button className={classes.btn} onClick={handle}>{text}</button>
    );
};

export default Button;