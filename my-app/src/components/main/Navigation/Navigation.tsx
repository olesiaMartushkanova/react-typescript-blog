import { MEDIUM_PATH } from '../../../utils/constants';
import AboutMeButton from './AboutMeButton/AboutMeButton';
import './Navigation.css';
import MediumButton from './MediumButton/MediumButton';
import { INavigation } from '../../../utils/types';

const Navigation = ({ homeButtonPath }: INavigation) => {
  return (
    <div className='navigationContainer'>
      <div className='buttonsContainer'>
        <AboutMeButton path={homeButtonPath} text='About me' />
        <MediumButton path={MEDIUM_PATH} />
      </div>
    </div>
  );
};

export default Navigation;
