import { useHistory } from 'react-router-dom';
import MainButton, {
  IMainButton,
} from '../../../../components/MainButton/MainButton';

const ReadMyStoryButton = ({ path, className }: IMainButton) => {
  const history = useHistory();
  const buttonHandler = () => {
    history.push(path || '/');
  };

  return (
    <MainButton
      className={className}
      onClick={buttonHandler}
      text='Read my story'></MainButton>
  );
};

export default ReadMyStoryButton;
