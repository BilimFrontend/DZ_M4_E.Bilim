import React, {useState} from 'react';
import Task from "../task/Task";

const List = ({titles,handleDelete, handleDone, handleEdit}) => {
    const [currentEdit, setCurrentEdit] = useState()

    return (
        <div>
            {titles.map(title => <Task
                key={title.id}
                task={title}
                handleDelete={handleDelete}
                handleDone={handleDone}
                handleEdit={handleEdit}
                handleCurrentEdit={setCurrentEdit}
                isEdit={currentEdit === title.id}
            />)}
        </div>
    );
};

export default List;