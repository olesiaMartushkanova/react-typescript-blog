import { useHistory } from 'react-router-dom';
import MainButton, { IMainButton } from '../../../MainButton/MainButton';

const AboutMeButton = (props: IMainButton) => {
  const { text, path, className } = props;

  const history = useHistory();
  const buttonHandler = () => {
    history.push(path || '/');
  };

  return (
    <MainButton text={text} className={className} onClick={buttonHandler} />
  );
};

export default AboutMeButton;
