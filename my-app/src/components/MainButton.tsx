import { Link, useHistory } from 'react-router-dom';
import './MainButton.css';

const MainButton = (props: any) => {
  const { text } = props;

  const history = useHistory();

  const buttonHandler = () => {
    history.push('/about');
  };

  return (
    <button className='MainButton' onClick={buttonHandler}>
      {text}
    </button>
  );
};

export default MainButton;
