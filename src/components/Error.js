import { connect } from 'react-redux';
import { FaTimes } from 'react-icons/fa';
import { removeError } from '../store/actions';

const Error = ({ message, removeError }) => {

  return (
    <>
    {message ?
      <div className='error center'>
        {message}
       <FaTimes onClick={removeError} className='closeError'/>
      </div>
      : ''}
    </>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeError: () => dispatch(removeError())
  }
}

const mapStateToProps = (state) => {
  return {
    message: state.error
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Error);
