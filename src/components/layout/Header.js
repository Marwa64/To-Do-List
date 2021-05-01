import { FaMoon } from 'react-icons/fa';

const Header = (props) => {
  return (
    <>
      <FaMoon color={props.color} style={{float: 'right'}} onClick={props.changeMode}/>
      <h1> To Do List </h1>
    </>
  );
}

export default Header;
