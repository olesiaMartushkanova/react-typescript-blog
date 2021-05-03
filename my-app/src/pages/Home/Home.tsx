import './Home.css';
import { LATEST_POSTS, TITLE_TEXT } from '../../utils/constants';
import LatestPostsContainer from '../../components/main/LatestPosts/LatestPostsContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../components/main/LatestPosts/LatestPosts.css';
import ContactForm from '../../components/main/ContactForm/ContactForm';
import Navigation from '../../components/main/Navigation/Navigation';

const Home = () => {
  return (
    <div className='home'>
      <Navigation />
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
    </div>
  );
};

export default Home;
