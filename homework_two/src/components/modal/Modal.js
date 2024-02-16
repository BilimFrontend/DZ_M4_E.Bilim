import React from 'react';
import classes from "./Modal.module.css";

const Modal = ({children}) => {
    return (
        <>
            <div className={classes.modalWrapper}>

            </div>

            <div className={classes.modalContent}>
                {children}
            </div>
        </>
    );
};

export default Modal;