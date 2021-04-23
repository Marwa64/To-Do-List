import Button from './Button';
import { Link } from 'react-router-dom'
import { useHistory } from "react-router-dom";
import axios from 'axios';

const AddTask = (props) => {
  let history = useHistory();
  const red = '#CF0000', blue = '#0075E0';

  const add = () => {
    let task = {name: document.querySelector("input").value};
    axios.post('http://localhost:5000/tasks', task);
    history.push("/");
  }

  return (
    <div style={{marginTop: '140px'}}>
      <form className='center'>
        <div className='form-control'>
          <h2 style={{color: props.color}}> Task Name: </h2>
           <input type='text' placeholder='Enter Task' maxLength='35'/>
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
