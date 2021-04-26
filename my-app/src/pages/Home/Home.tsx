import './Home.css';
import {
  ABOUT_ME_PATH,
  LATEST_POSTS,
  MEDIUM_PATH,
  SOCIAL_BUTTONS,
  TITLE_TEXT,
} from '../../constants';
import MainButton from '../../components/MainButton/MainButton';
import SocialFollow from '../../components/SocialFollow/SocialFollow';
import LatestPostsContainer from '../../components/LatestPosts/LatestPostsContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../components/LatestPosts/LatestPosts.css';
import MediumButton from '../../components/MediumButton/MediumButton';
import ContactForm from '../../components/ContactForm/ContactForm';

const Home = () => {
  return (
    <div className='home'>
      <div className='main'>
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
            <MediumButton path={MEDIUM_PATH} />
          </div>

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
