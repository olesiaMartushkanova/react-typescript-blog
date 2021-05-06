import './Home.css';
import { ABOUT_ME_PATH, LATEST_POSTS, TITLE_TEXT } from '../../utils/constants';
import LatestPosts from '../../components/main/LatestPosts/LatestPosts';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../components/main/LatestPosts/LatestPosts.css';
import ContactForm from '../../components/main/ContactForm/ContactForm';
import Navigation from '../../components/main/Navigation/Navigation';

const Home = () => {
  return (
    <div className='home'>
      <Navigation
        path={ABOUT_ME_PATH}
        text='About me'
        className='buttonsContainer'
      />
      <div className='main'>
        <div className='titleContainer'>
          <h1>{TITLE_TEXT}</h1>
        </div>
        <div className='spacer' />
        <div className='mainSection'>
          <div className='latestPostsContainer'>
            My latest posts
            <LatestPosts props={LATEST_POSTS} />
          </div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Home;
