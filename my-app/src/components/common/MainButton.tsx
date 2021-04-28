import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MainButton.css';
import { IMainButton } from '../../types';

const MainButton: React.FC<IMainButton> = (props) => {
  const { className, text, children, onClick } = props;
  const classes = 'mainButton ' + className;

  return (
    <Button className={classes} variant='secondary' size='lg' onClick={onClick}>
      {text}
      {children}
    </Button>
  );
};

export default MainButton;
