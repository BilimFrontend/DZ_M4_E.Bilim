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
        <div className={classes.form_bg}>
            <div className={classes.form}>
                <p>Form</p>
                <div className={classes.input_box}>
                    <input className={classes.input_user}
                           name="user"
                           type='text'
                           placeholder="User"
                           onChange={changeInput}/>
                    <input className={classes.input_user}
                           name="age"
                           type='number'
                           placeholder="Age"
                           onChange={changeInput}/>
                </div>
            </div>
        </div>
    );
};

export default FormPage;