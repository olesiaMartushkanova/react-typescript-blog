import { useHistory } from 'react-router-dom';
import MainButton, { IMainButton } from '../../../MainButton/MainButton';
import './AboutMeButton.css';

const AboutMeButton = (props: IMainButton) => {
  const { text, path } = props;

  const history = useHistory();
  const buttonHandler = () => {
    history.push(path || '/');
  };

  return (
    <MainButton className='button__about-me' onClick={buttonHandler}>
      {text}
    </MainButton>
  );
};

export default AboutMeButton;
