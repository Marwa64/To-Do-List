import Button from './Button';
import Tasks from './Tasks';
import NoTasks from './NoTasks';
import { Link } from 'react-router-dom';

const Home = (props) => {
  let green = '#57C70A', grey = '#B8B5B5';
  return (
    <>
      <div className='homeButtons'>
        <Link to='/AddTask'> <Button text='Add' color={green} padding='20px'/> </Link>
        <Button text='Remove All' color={grey} padding='20px'/>
      </div>
      {props.tasks ? <Tasks /> : <NoTasks />}
    </>
  );
}

export default Home;
