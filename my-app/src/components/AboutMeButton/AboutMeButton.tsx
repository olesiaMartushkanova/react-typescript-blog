import { useHistory } from 'react-router-dom';
import { MEDIA_QUERY_SIZE } from '../../utils/constants';
import { useMediaQueryHook } from '../../utils/hooks/useMediaQuery';
import MainButton, { IMainButton } from '../MainButton/MainButton';
import './AboutMeButton.css';

const AboutMeButton = (props: IMainButton) => {
  const isPageWide = useMediaQueryHook(MEDIA_QUERY_SIZE.mobile);

  const { text, path } = props;

  const history = useHistory();
  const buttonHandler = () => {
    history.push(path || '/');
  };

  return (
    <MainButton
      className='button__about-me'
      onClick={buttonHandler}
      size={isPageWide ? 'sm' : 'lg'}>
      {text}
    </MainButton>
  );
};

export default AboutMeButton;
