import Button from './Button';
import { Link } from 'react-router-dom'

const AddTask = (props) => {
  const red = '#CF0000', blue = '#0075E0';

  return (
    <div style={{marginTop: '140px'}}>
      <form className='center'>
        <div className='form-control'>
          <h2 style={{color: props.color}}> Task Name: </h2>
           <input type='text' placeholder='Enter Task' maxLength='30'/>
        </div>
      </form>
      <div className='center'>
        <Link to='/'><Button text='Discard' color={red} size='21px'/> </Link>
        <Button text='Save' color={blue} padding='60px 0px' size='21px' id='save'/>
      </div>
    </div>
  );
}

export default AddTask;
