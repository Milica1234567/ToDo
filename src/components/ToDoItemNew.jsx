import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import ModUpdate from './ModalUpdate';



function TodoItem({ task, deleteTask, updateTask }) {

    const [isDone, setIsDone] = useState(false);    

    const handleDoneTask = () =>{
        setIsDone(!isDone);
    }

    const strikethroughStyle = {
        textDecoration: 'line-through',
    };

 return (
 <div className="todo-item">
    <div className='task-text'> {!isDone ? <p>{task.text}</p> : <p style={strikethroughStyle}>{task.text}</p>}</div>
    
    <div className='buttons'>
        <button className='button-task' onClick={()=>handleDoneTask()}><FontAwesomeIcon icon={faCheck} /></button>
        <button className='button-task' onClick={() => deleteTask(task.id)}><FontAwesomeIcon icon={faTrash} /></button>
        <ModUpdate/>
    </div>
    
 </div>
 );
}
export default TodoItem;