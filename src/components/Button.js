

const Button = (props) => {
  return (
    <span style={{padding: props.padding}}>
      <button className='button' style={{backgroundColor: props.color}}> {props.text} </button>
    </span>
  );
}

export default Button;
