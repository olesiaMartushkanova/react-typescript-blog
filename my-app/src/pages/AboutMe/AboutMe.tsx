import AboutMeButton from '../../components/AboutMeButton/AboutMeButton';
import { HOME_PATH } from '../../constants';
import './AboutMe.css';

const AboutMe = () => {
  return (
    <div className='aboutMe'>
      <h1>My journey</h1>
      <AboutMeButton text='Home' path={HOME_PATH} />
    </div>
  );
};

export default AboutMe;
