import Button from './Button';
import Tasks from './Tasks';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Home = () => {
  const [tasks, setTasks] = useState([]);


  const green = '#21AC0F', grey = '#787878';

  return (
    <>
      <div className='homeButtons'>
        <Link to='/AddTask'> <Button text='Add' color={green} padding='20px'/> </Link>
        <Button text='Remove All' color={grey} padding='20px'/>
      </div>
      <div style={{marginTop: '140px', padding: '25px'}}>
        {tasks.length > 0 ? <Tasks tasks={tasks}/> : <h2> Your to-do list is empty, add a new task now! </h2>}
      </div>
    </>
  );
}

export default Home;
