import Button from 'react-bootstrap/esm/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../MainButton/MainButton.css';
import { IMainButton } from '../../types';
import { MEDIUM_PATH } from '../../constants';

const MediumButton = (props: IMainButton) => {
  const { text, variant, size, path } = props;

  const buttonHandler = () => {
    window.open(path, '_blank');
  };

  return (
    <div>
      <Button
        onClick={buttonHandler}
        className='mainButton'
        variant={variant ? variant : 'secondary'}
        size={size ? size : 'lg'}>
        {text}
      </Button>
    </div>
  );
};

export default MediumButton;
