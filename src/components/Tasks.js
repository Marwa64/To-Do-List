import Task from './Task';

const Tasks = (props) => {
  let animationDelay = -0.4;
  return (
    <div>
      {props.tasks.map(task => <Task key={task.id} animationDelay={animationDelay+= 0.4} name={task.name}/>)}
    </div>
  );
}

export default Tasks;
