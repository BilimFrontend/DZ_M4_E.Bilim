import React from 'react';
import classes from "./Modal.module.css";
import Button from "../button/Button";
import Input from "../input/Input";

const Modal = ({children, handleShow}) => {
    return (
        <>
            <div className={classes.modalWrapper}>

            </div>

            <div className={classes.modalContent}>
                <Button handle={handleShow} text={"Close"}/>
                <Input type={"text"} onchange={""}/>
                {children}
            </div>
        </>
    );
};

export default Modal;