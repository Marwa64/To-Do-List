import Button from '../layout/Button';
import Tasks from '../tasks/Tasks';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setTasks, deleteAllTasks } from '../../actions';

const Home = (props) => {
  const dispatch = useDispatch();
  const tasks = useSelector(state => state.tasks);

  useEffect(() => {
    dispatch(setTasks());
  }, []);

  const deleteAll = () => {
    if (tasks.length > 0) {
      const ids = [];
      tasks.map(task => ids.push(task.id));
      dispatch(deleteAllTasks(ids));
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
        {tasks.length > 0 ? <Tasks tasks={tasks} fontColor={props.color}/> : <h2 style={{color: props.color}}> Your to-do list is empty, add a new task now! </h2>}
      </div>
    </>
  );
}

export default Home;
