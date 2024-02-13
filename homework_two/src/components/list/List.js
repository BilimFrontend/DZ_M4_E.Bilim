import React from 'react';
import classes from "./List.module.css";

const List = ({list}) => {
    return (
        <div className={classes.list}>
            <p>{list.id} {list.title}</p>
        </div>
    );
};

export default List;