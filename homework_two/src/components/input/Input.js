import React from 'react';
import classes from "./Input.module.css";

const Input = ({type, onchange}) => {
    return (
        <input className={classes.input} type="text"/>
    );
};

export default Input;