import './Home.css';
import {
  ABOUT_ME_PATH,
  LATEST_POSTS,
  MEDIUM_PATH,
  SOCIAL_BUTTONS,
  TITLE_TEXT,
} from '../../constants';
import AboutMeButton from '../../components/header/AboutMeButton/AboutMeButton';
import SocialFollow from '../../components/footer/SocialFollow';
import LatestPostsContainer from '../../components/main/LatestPosts/LatestPostsContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../components/main/LatestPosts/LatestPosts.css';
import MediumButton from '../../components/header/MediumButton/MediumButton';
import ContactForm from '../../components/main/ContactForm/ContactForm';

const Home = () => {
  return (
    <div className='home'>
      <div className='header'>
        <div className='buttonsContainer'>
          <AboutMeButton path={ABOUT_ME_PATH} text='About me' />
          <MediumButton path={MEDIUM_PATH} />
        </div>
      </div>
      <div className='main'>
        <div className='titleContainer'>
          <h1>{TITLE_TEXT}</h1>
        </div>
        <div className='spacer' />

        <div id='mainSection' className='mainSection'>
          <div className='latestPostsContainer'>
            My latest posts
            <LatestPostsContainer props={LATEST_POSTS} />
          </div>

          <ContactForm />
        </div>
      </div>
      <div className='footer'>
        <div className='socialContainer'>
          <SocialFollow props={SOCIAL_BUTTONS} />
        </div>
      </div>
    </div>
  );
};

export default Home;
