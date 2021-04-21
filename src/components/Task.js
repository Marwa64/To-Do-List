import { FaPencilAlt, FaTrash } from 'react-icons/fa';

const Task = (props) => {
  const edit = () => {
    console.log("edit " + props.name);
  }
  return (
    <div className='task'>
      <span>
        {props.name}
        <FaTrash onClick={props.delete} color="#E40000"/>
        <FaPencilAlt onClick={edit} />
      </span>
    </div>
  );
}

export default Task;
