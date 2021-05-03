import { FaMoon } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { toggleMode } from '../../actions';

const Header = (props) => {
  const dispatch = useDispatch();
  const darkMode = useSelector(state => state.darkMode);

  const changeMode = () => {
    let background = document.querySelector("html");
    let title = document.querySelector("h1");

    if (darkMode) {
      background.style.backgroundColor = '#F3F3F3';
      title.style.color = 'black';
    } else {
      background.style.backgroundColor = '#1f1f1f';
      title.style.color = 'white';
    }

    dispatch(toggleMode());
  }

  return (
    <>
      <FaMoon color={props.color} style={{float: 'right'}} onClick={changeMode}/>
      <h1> To Do List </h1>
    </>
  );
}

export default Header;
