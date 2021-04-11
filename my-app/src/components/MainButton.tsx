import { Link, useHistory } from 'react-router-dom';
import { IMainButton } from '../types';
import './MainButton.css';

const MainButton = ({ text, path }: IMainButton) => {
  const history = useHistory();

  const buttonHandler = () => {
    history.push(path);
  };

  return (
    <button className='mainButton' onClick={buttonHandler}>
      {text}
    </button>
  );
};

export default MainButton;
