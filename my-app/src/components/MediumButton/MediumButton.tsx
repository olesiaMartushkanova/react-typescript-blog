import Button from 'react-bootstrap/esm/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../MainButton/MainButton.css';
import { IMainButton } from '../../types';

const MediumButton = (props: IMainButton) => {
  const { path } = props;

  const buttonHandler = () => {
    window.open(path, '_blank');
  };

  return (
    <Button
      onClick={buttonHandler}
      className='mainButton'
      variant='secondary'
      size='lg'>
      Medium
    </Button>
  );
};

export default MediumButton;
