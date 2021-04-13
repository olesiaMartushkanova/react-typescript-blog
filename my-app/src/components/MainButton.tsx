import { useHistory } from 'react-router-dom';
import { IMainButton } from '../types';
import './MainButton.css';

const MainButton = ({ className, text, path }: IMainButton) => {
  const history = useHistory();

  const buttonHandler = () => {
    history.push(path);
  };

  return (
    <button className={className} onClick={buttonHandler}>
      {text}
    </button>
  );
};

export default MainButton;
