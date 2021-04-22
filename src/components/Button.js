

const Button = (props) => {
  return (
    <span id={props.id} style={{padding: props.padding}}>
      <button style={{backgroundColor: props.color, fontSize: props.size}}> {props.text} </button>
    </span>
  );
}

export default Button;
