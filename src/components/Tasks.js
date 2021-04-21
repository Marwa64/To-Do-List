import Task from './Task';

const Tasks = (props) => {
  return (
    <div>
      {props.tasks.map(task => <Task key={task.id} name={task.name}/>)}
    </div>
  );
}

export default Tasks;
