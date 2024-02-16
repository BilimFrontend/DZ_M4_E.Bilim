import React from 'react';
import classes from "./Task.module.css";
import Button from "../button/Button";
const Task = ({task, handleDelete}) => {
    return (
        <div className={classes.list}>
            <p>{task.id} {task.title}</p>
            <Button onClick={handleDelete} text={"Удалить"}/>
        </div>
    );
};

export default Task;