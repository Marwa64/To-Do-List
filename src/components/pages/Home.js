import Button from '../layout/Button';
import Tasks from '../tasks/Tasks';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { setTasks, deleteAllTasks } from '../../store/actions';

const Home = (props) => {

  useEffect(() => {
    props.setTasks();
  }, []);

  const deleteAll = () => {
    if (props.tasks.length > 0) {
      const ids = [];
      props.tasks.map(task => ids.push(task.id));
      props.deleteAllTasks(ids);
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
        {props.tasks.length > 0 ? <Tasks tasks={props.tasks} fontColor={props.color}/> : <h2 style={{color: props.color}}> Your to-do list is empty, add a new task now! </h2>}
      </div>
    </>
  );
}

const mapStateToProps = state => {
  return {
    tasks: state.tasks
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setTasks: () => dispatch(setTasks()),
    deleteAllTasks: ids => dispatch(deleteAllTasks(ids))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
