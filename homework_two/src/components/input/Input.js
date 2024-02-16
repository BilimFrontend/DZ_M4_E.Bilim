import React from 'react';
import classes from "./Input.module.css";

const Input = ({type,placeholder,onChangeInput}) => {
    return (
        <input className={classes.input}
               type={type}
               placeholder={placeholder}
               onChange={onChangeInput}/>
    );
};

export default Input;