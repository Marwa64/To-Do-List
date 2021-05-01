import Task from './Task';

const Tasks = (props) => {
  let animationDelay = -0.4;
  return (
    <div>
      {props.tasks.map((task, index) => <Task key={index} delete={props.delete} animationDelay={animationDelay+= 0.4} task={task} mode={props.mode}/>)}
    </div>
  );
}

export default Tasks;
