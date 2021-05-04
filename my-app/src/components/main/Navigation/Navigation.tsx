import { MEDIUM_PATH } from '../../../utils/constants';
import AboutMeButton from './AboutMeButton/AboutMeButton';
import './Navigation.css';
import MediumButton from './MediumButton/MediumButton';
import { INavigation } from '../../../utils/types';

const Navigation = (props: INavigation) => {
  const { path, text } = props;

  return (
    <div className='navigationContainer'>
      <div className='buttonsContainer'>
        <AboutMeButton path={path} text={text} />
        <MediumButton path={MEDIUM_PATH} />
      </div>
    </div>
  );
};

export default Navigation;
