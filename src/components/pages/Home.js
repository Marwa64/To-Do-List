import Button from '../layout/Button';
import Tasks from '../tasks/Tasks';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { displayError, removeError, addTask, deleteTaskState, deleteAllTasks } from '../../actions';

const Home = (props) => {
  const dispatch = useDispatch();
  const tasks = useSelector(state => state.tasks);

const setUpTasks = (tasks) => {
  dispatch(deleteAllTasks());
  dispatch(removeError());
  tasks.map(task => dispatch(addTask(task, false)));
}

  useEffect(() => {
    axios.get('http://localhost:5000/tasks/')
    .then(res => setUpTasks(res.data))
    .catch(err => dispatch(displayError(err.message)));
  }, []);


  const deleteTask = (id) => {
    axios.delete(`http://localhost:5000/tasks/${id}`)
      .then(() => {
        dispatch(deleteTaskState(id));
        dispatch(removeError());
       })
      .catch(err => dispatch(displayError(err.message)));
  }
  const deleteAll = () => {
    if (tasks.length > 0) {
      const ids = [];
      tasks.map(task => ids.push(task.id));
      axios.delete(`http://localhost:5000/tasks/${ids}`)
        .then(() => {
          dispatch(deleteAllTasks());
          dispatch(removeError());
        })
        .catch(err => dispatch(displayError(err.message)));
    }
  }

  const green = '#21AC0F', grey = '#787878';

  return (
    <>
      <div className='homeButtons'>
        <Link to='/AddTask'> <Button text='Add' color={green} padding='20px'/> </Link>
        <Button action={deleteAll} text='Remove All' color={grey} padding='20px'/>
      </div>
      <div className='tasksContainer'>
        {tasks.length > 0 ? <Tasks delete={deleteTask} tasks={tasks} fontColor={props.color}/> : <h2 style={{color: props.color}}> Your to-do list is empty, add a new task now! </h2>}
      </div>
    </>
  );
}

export default Home;
