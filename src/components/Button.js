

const Button = (props) => {
  return (
    <span style={{padding: props.padding, marginLeft: props.left}}>
      <button style={{backgroundColor: props.color, fontSize: props.size}}> {props.text} </button>
    </span>
  );
}

export default Button;
