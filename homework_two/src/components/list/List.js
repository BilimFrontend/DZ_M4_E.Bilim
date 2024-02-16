import React from 'react';
import Task from "../task/Task";

const List = ({titles,handleDelete}) => {
    return (
        <div>
            {titles.map(title => <Task key={title.id} task={title} handleDelete={() => handleDelete(title.id)}/>)}
        </div>
    );
};

export default List;