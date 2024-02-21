import React, {useState} from 'react';
import classes from "./Task.module.css";
import Button from "../button/Button";
const Task = ({task, handleDelete, handleDone, handleEdit, handleCurrentEdit, isEdit}) => {
    const [input, setInput] = useState(task.title)
    if (isEdit) {
        return<div className={classes.edit_card}>
            <input
                onChange={event => setInput(event.target.value)}
                value={input}
                type={"text"}/>
            <Button color={"#64cc64"}
                onClick={
                    () => {
                        handleEdit({
                            ...task,
                            title: input
                        })
                        handleCurrentEdit("")
                    }
                }
                text={"Сохранить"}

            />
            <Button color={"#de5f5f"}
                onClick={
                    () => {
                        handleCurrentEdit("")
                    }
                }
                text={"Отмена"}/>
        </div>
    }

    return (
        <div className={`${classes.list} ${task.completed && classes.isDone}`}>
            <p>{task.id} {task.title}</p>
            <div className={classes.btn_box}>
                <Button color={"#de5f5f"} onClick={() => handleDelete(task.id)} text={"Удалить"}/>
                <Button color={"#5f9ade"} onClick={() => handleDone(task.id)} text={"Выполнено"}/>
                <Button color={"#dea35f"} onClick={() => handleCurrentEdit(task.id)} text={"Редактировать"}/>
            </div>
        </div>
    );
};

export default Task;