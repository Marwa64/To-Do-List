import { FaMoon } from 'react-icons/fa';
import { connect } from 'react-redux';
import { toggleMode } from '../../store/actions';

const Header = ({ color, darkMode, toggleMode }) => {

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

    toggleMode();
  }

  return (
    <>
      <FaMoon color={color} style={{float: 'right'}} onClick={changeMode}/>
      <h1> To Do List </h1>
    </>
  );
}

const mapStateToProps = state => {
  return {
    darkMode: state.darkMode
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleMode: () => dispatch(toggleMode())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
