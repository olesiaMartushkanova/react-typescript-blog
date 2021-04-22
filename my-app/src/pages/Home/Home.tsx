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

const socialButtons = [
  { icon: faInstagram, className: 'instagram', color: 'black' },
  { icon: faLinkedin, className: 'linkedin', color: 'black' },
  { icon: faGithub, className: 'github', color: 'black' },
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
          <SocialFollow props={socialButtons} />
        </div>
      </div>
    </div>
  );
};

export default Home;
