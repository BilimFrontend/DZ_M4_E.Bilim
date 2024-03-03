import React from 'react';
import classes from "./SelectOption.module.css";


const SelectOption = ({selectValue,onChange, option}) => {
    return (
        <select className={classes.select} value={selectValue} onChange={onChange}>
            {option.map((i,index)=><option className={classes.option} key={index} value={i}>{i}</option>)}
        </select>
    );
};

export default SelectOption;