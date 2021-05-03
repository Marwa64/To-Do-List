import Button from '../layout/Button';
import Tasks from '../tasks/Tasks';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { setTasks, deleteTaskState, deleteAllTasks } from '../../actions';

const Home = (props) => {
  const dispatch = useDispatch();
  const tasks = useSelector(state => state.tasks);

  useEffect(() => {
    axios.get('http://localhost:5000/tasks/')
    .then(res => dispatch(setTasks(res.data)));
  }, []);


  const deleteTask = (id) => {
    axios.delete(`http://localhost:5000/tasks/${id}`)
      .then(() => dispatch(deleteTaskState(id)))
      .catch(err => console.log(err));
  }
  const deleteAll = () => {
    if (tasks.length > 0) {
      const ids = [];
      tasks.map(task => ids.push(task.id));
      axios.delete(`http://localhost:5000/tasks/${ids}`)
        .then(() => dispatch(deleteAllTasks()))
        .catch(err => console.log(err));
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
