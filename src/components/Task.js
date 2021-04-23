import { FaPencilAlt, FaTrash } from 'react-icons/fa';

const Task = (props) => {
  const edit = () => {
    console.log("edit " + props.task.id);
  }
  const deleteTask = () => {
    props.delete(props.task.id);
  }
  const changeBg = () => {
    if (props.mode === 'dark') {
      return '#8c8c8c';
    } else {
      return '#D3D3D3';
    }
  }
  const changeFont = () => {
    if (props.mode === 'dark') {
      return 'white';
    } else {
      return 'black';
    }
  }
  return (
    <div className='task' style={{animationDelay: props.animationDelay + 's', backgroundColor: changeBg(), color: changeFont()}}>
      <span>
        {props.task.name}
        <span className='taskIcons'>
          <FaTrash className='trash' onClick={deleteTask} color="#E40000"/>
          <FaPencilAlt onClick={edit} />
        </span>
      </span>
    </div>
  );
}

export default Task;
