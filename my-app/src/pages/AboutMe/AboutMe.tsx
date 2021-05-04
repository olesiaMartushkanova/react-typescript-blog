import Navigation from '../../components/main/Navigation/Navigation';
import { HOME_PATH } from '../../utils/constants';
import './AboutMe.css';

const AboutMe = () => {
  return (
    <div className='aboutMe'>
      <Navigation path={HOME_PATH} text='Home' />
    </div>
  );
};

export default AboutMe;
