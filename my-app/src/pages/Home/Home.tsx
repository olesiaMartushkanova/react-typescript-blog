import './Home.css';
import { ABOUT_ME_PATH, MEDIUM_PATH, TITLE_TEXT } from '../../constants';
import MainButton from '../../components/MainButton/MainButton';
import SocialFollow from '../../components/SocialFollow/SocialFollow';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  faInstagram,
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
import { ISocialFollow } from '../../types';

const SOCIAL_BUTTONS: Array<ISocialFollow> = [
  {
    icon: faInstagram,
    className: 'instagram',
    color: 'black',
    path: 'https://www.instagram.com/olesia_learns/',
  },
  {
    icon: faLinkedin,
    className: 'linkedin',
    color: 'black',
    path: 'https://www.linkedin.com/in/olesia-martushkanova/',
  },
  {
    icon: faGithub,
    className: 'github',
    color: 'black',
    path: 'https://github.com/olesiaMartushkanova',
  },
];

const Home = () => {
  return (
    <div className='home'>
      <div className='titleContainer'>
        <h1>{TITLE_TEXT}</h1>
      </div>
      <div className='spacer' />

      <div id='mainSection' className='mainSection'>
        <div className='buttonsContainer'>
          <MainButton
            className='mainButton aboutMeButton'
            text='About me'
            path={ABOUT_ME_PATH}
          />
          <MainButton className='mainButton' text='Medium' path={MEDIUM_PATH} />
        </div>

        {/* <div id='latestPostsContainer' className='latestPostsContainer'></div>
        <div id='contactMeContainer' className='contactMeContainer'></div> */}

        <div className='socialContainer'>
          <SocialFollow props={SOCIAL_BUTTONS} />
        </div>
      </div>
    </div>
  );
};

export default Home;
