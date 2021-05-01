import { FaPencilAlt, FaTrash } from 'react-icons/fa';
import Button from '../layout/Button';
import { useState } from 'react';
import axios from 'axios';

const Task = (props) => {
  const id = `id${props.task.id}`;
  const [edit, toggleEdit] = useState(false);

  const editTask = () => {
    toggleEdit(true);
    let task = document.querySelector(`#${id}`);
    task.focus();
    task.value = props.task.name;
    task.placeholder = '';
    task.style.backgroundColor = 'white';
    task.readOnly = false;
  }

  const saveEdit = () => {
    let task = document.querySelector(`#${id}`);
    if (task.value === '') {
      task.style.border = '2px solid red';
      task.style.backgroundColor = '#fff1f1';
      return;
    }
    toggleEdit(false);
    task.placeholder = task.value;
    task.style.backgroundColor = 'inherit';
    task.style.border = 'none';
    task.readOnly = true;
    if (task.value !== props.task.name)
      axios.put(`http://localhost:5000/tasks/${props.task.id}`, {name: task.value});
  }

  const deleteTask = () => {
    props.delete(props.task.id);
  }

  const changeBg = () => {
    if (props.mode === 'dark') {
      return '#8c8c8c';
    } else {
      return '#D3D3D3';
    }
  }
  const changeFont = () => {
    if (props.mode === 'dark') {
      return 'white';
    } else {
      return 'black';
    }
  }
  return (
    <div className='task' style={{animationDelay: props.animationDelay + 's', backgroundColor: changeBg(), color: changeFont()}}>
      <span>
        <input autoComplete="off" id={id} maxLength='29' className='taskName' type='text' placeholder={props.task.name} readOnly/>
        <span className='taskIcons'>
          {!edit ? <FaTrash className='trash' onClick={deleteTask} color="#E40000"/> : ''}
          {edit ? <Button text='Save Edit' action={saveEdit} color='#0075E0' padding='25px 0px' size='18px'/> : <FaPencilAlt onClick={editTask} />}
        </span>
      </span>
    </div>
  );
}

export default Task;
