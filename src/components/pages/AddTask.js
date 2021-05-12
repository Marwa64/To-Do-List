import Button from '../layout/Button';
import { Link } from 'react-router-dom'
import { useHistory } from "react-router-dom";
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { displayError, removeError } from '../../store/actions';

const AddTask = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const red = '#CF0000', blue = '#0075E0';

  const add = () => {
    let taskInput = document.querySelector("#taskInput");
    let val = taskInput.value.trim();
    if (!val) {
      taskInput.style.border = '2px solid red';
      taskInput.style.backgroundColor = '#fff1f1';
      return;
    }
    let task = {name: taskInput.value};
    axios.post('http://localhost:5000/tasks', task)
    .then(() => {
      dispatch(removeError());
      history.push("/");
    })
    .catch(err => dispatch(displayError(err.message)));
  }

  return (
    <div style={{marginTop: '140px'}}>
      <form className='center'>
        <div className='form-control'>
          <h2 style={{color: props.color}}> Task Name: </h2>
           <input id="taskInput" type='text' placeholder='Enter Task' maxLength='29'/>
        </div>
      </form>
      <div className='center'>
        <Link to='/'><Button text='Discard' color={red} size='21px'/> </Link>
        <Button action={add} text='Save' color={blue} padding='60px 0px' size='21px' id='save'/>
      </div>
    </div>
  );
}

export default AddTask;
