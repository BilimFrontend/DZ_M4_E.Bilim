import React from 'react';
import classes from "./Input.module.css";

const Input = ({type = "text",placeholder,onChangeInput, value}) => {
    return (
        <input className={classes.input}
               type={type}
               placeholder={placeholder}
               onChange={onChangeInput}
               value={value}/>
    );
};

export default Input;