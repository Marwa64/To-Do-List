import { connect } from 'react-redux'

const Error = ({ message }) => {
  console.log(message);
  return (
    <>
    {message ?
      <div className='error center'>{message}</div>
      : ''}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    message: state.error
  }
}
export default connect(mapStateToProps, null)(Error);
