import MainButton from '../../components/MainButton/MainButton';
import { HOME_PATH } from '../../constants';
import './AboutMe.css';

const AboutMe = () => {
  return (
    <div className='aboutMe'>
      <h1>My journey</h1>
      <MainButton text='Home' path={HOME_PATH} />
    </div>
  );
};

export default AboutMe;
