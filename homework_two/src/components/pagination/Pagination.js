import React from 'react';
import Button from "../button/Button";
import classes from "./Pagination.module.css";


const Pagination = ({handleNext, page, handlePrev}) => {
    return (
        <div className={classes.pagination_box}>
            <Button onClick={handlePrev} text={"Prev"}/>
            <p>{page}</p>
            <Button onClick={handleNext} text={"Next"}/>
        </div>
    );
};

export default Pagination;