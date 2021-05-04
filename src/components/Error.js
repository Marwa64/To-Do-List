import { useSelector } from 'react-redux'

const Error = () => {
  const message = useSelector(state => state.error);

  return (
    <>
    {message ?
      <div className='error center'>{message}</div>
      : ''}
    </>
  );
}
export default Error;
