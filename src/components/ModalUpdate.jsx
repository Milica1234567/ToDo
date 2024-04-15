import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import DropDown from './DropDown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import {faPlus} from '@fortawesome/free-solid-svg-icons'

import './styles.css'

//pasujem task iz ToDoItemNew (valjda?) filtriram memoriju i izmenim task u potpunosti
//menjam oba key value para u slucaju da menja i dan i task
//slicno se menja kao u rand gde menjam samo artwork 


function ModUpdate({passTask, setPassTask}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [textTask, setTextTask] = useState("");
    const [selected, setSelected] = useState("");
    const [task, setTask] = useState([]);

    const handleTask = (text, day) =>{
        const newTask = {
            id: Date.now(),
            day,
            text
            };
            setTask([...task, newTask]);
            setTextTask('')
            setSelected('');
    }


    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(task));
      }, [task]);
  
  return (
    <>
      <button className='button-task' variant="primary" onClick={()=>{handleShow()}}>
        <FontAwesomeIcon icon={faPenToSquare} />
      </button>




      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <h2 className='modal-title'>Update Task</h2>
        </Modal.Header>
        <Modal.Body>
            
            <DropDown selected={selected} setSelected={setSelected}/>
            <input className='input-task' placeholder='Write your task' onChange={(e)=>{setTextTask(e.target.value)}}></input>
            <button className='add-task-modal-btn' onClick={()=>{handleTask(textTask, selected)}}><FontAwesomeIcon icon={faPlus}  /> Add</button>
        </Modal.Body>
        <Modal.Footer>
            <p className='reminder'>All done? Make sure you save your tasks!</p>
            <button className='add-task-modal-btn' onClick={()=>{setPassTask(task)}}>Save</button>
            
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModUpdate;