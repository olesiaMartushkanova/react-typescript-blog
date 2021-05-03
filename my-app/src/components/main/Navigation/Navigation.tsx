import { ABOUT_ME_PATH, MEDIUM_PATH } from '../../../utils/constants';
import AboutMeButton from './AboutMeButton/AboutMeButton';
import './Navigation.css';
import MediumButton from './MediumButton/MediumButton';

const Navigation = () => {
  return (
    <div className='navigationContainer'>
      <div className='buttonsContainer'>
        <AboutMeButton path={ABOUT_ME_PATH} text='About me' />
        <MediumButton path={MEDIUM_PATH} />
      </div>
    </div>
  );
};

export default Navigation;
