import { useHistory } from 'react-router-dom';
import MainButton, {
  IMainButton,
} from '../../../../components/MainButton/MainButton';

const CodeChallengeButton = (props: IMainButton) => {
  const { path, className } = props;

  const history = useHistory();
  const buttonHandler = () => {
    history.push(path || '/');
  };

  return (
    <MainButton
      className={className}
      onClick={buttonHandler}
      text='My 100 days of code'></MainButton>
  );
};

export default CodeChallengeButton;
