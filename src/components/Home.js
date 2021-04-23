import Button from './Button';
import Tasks from './Tasks';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Home = (props) => {

  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    axios.get('https://my-json-server.typicode.com/marwa64/To-Do-List/tasks')
    .then(res => setTasks(res.data));
  }, [tasks]);


  const deleteTask = (id) => {
    axios.delete(`https://my-json-server.typicode.com/marwa64/To-Do-List/tasks/${id}`)
      .then(() => setTasks(tasks.filter(task => task.id !== id)))
      .catch(err => console.log(err));
  }
  const deleteAll = () => {
    if (tasks.length > 0) {
      const ids = [];
      tasks.map(task => ids.push(task.id));
      axios.delete(`https://my-json-server.typicode.com/marwa64/To-Do-List/tasks/${ids}`)
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
        {tasks.length > 0 ? <Tasks delete={deleteTask} mode={props.mode} tasks={tasks}/> : <h2 style={{color: props.color}}> Your to-do list is empty, add a new task now! </h2>}
      </div>
    </>
  );
}

export default Home;
