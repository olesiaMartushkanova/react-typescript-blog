import { useHistory } from 'react-router-dom';
import { IMainButton } from '../../../utils/types';
import MainButton from '../../common/MainButton';
import './AboutMeButton.css';

const AboutMeButton = (props: IMainButton) => {
  const { text, path } = props;

  const history = useHistory();
  const buttonHandler = () => {
    history.push(path || '/');
  };

  return (
    <MainButton className='aboutMeButton' onClick={buttonHandler}>
      {text}
    </MainButton>
  );
};

export default AboutMeButton;
