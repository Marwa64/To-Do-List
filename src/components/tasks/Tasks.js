import Task from './Task';

const Tasks = (props) => {
  let animationDelay = -0.4;
  return (
    <div>
      {props.tasks.map((task, index) => <Task key={index} animationDelay={animationDelay+= 0.4} task={task} fontColor={props.fontColor}/>)}
    </div>
  );
}

export default Tasks;
