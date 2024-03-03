import React, {useState} from 'react';
import classes from "./FormPage.module.css"

const FormPage = () => {

    const [inputValue, setInputValue] = useState({
        user: '',
        age: 0
    })
    const changeInput = (event) => {
        setInputValue({...inputValue, [event.target.name]: event.target.value})

    }

    console.log(inputValue)

    return (
        <div className={classes.form}>
            <input
                name="user"
                type='text'
                placeholder="user"
                onChange={changeInput}/>
            <input
                name="age"
                type='number'
                placeholder="age"
                onChange={changeInput}/>
        </div>
    );
};

export default FormPage;