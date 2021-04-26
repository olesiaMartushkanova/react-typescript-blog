import { useHistory } from 'react-router-dom';
import { IMainButton } from '../../types';
import './MainButton.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const MainButton = (props: IMainButton) => {
  const { text, className, path } = props;

  const history = useHistory();
  const buttonHandler = () => {
    history.push(path || '/');
  };

  return (
    <Button
      className={className}
      variant='secondary'
      size='lg'
      onClick={buttonHandler}>
      {text}
    </Button>
  );
};

export default MainButton;
