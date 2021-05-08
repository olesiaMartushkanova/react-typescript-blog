import './Home.css';
import { LATEST_POSTS, TITLE_TEXT } from '../../utils/constants';
import LatestPosts from '../../components/main/LatestPosts/LatestPosts';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../components/main/LatestPosts/LatestPosts.css';
import ContactForm from '../../components/main/ContactForm/ContactForm';

const Home = () => {
  return (
    <div className='homePage'>
      <div className='titleContainer'>
        <h1>{TITLE_TEXT}</h1>
      </div>
      <div className='spacer' />
      <div className='mainSection'>
        <div className='latestPostsContainer'>
          My latest posts
          <LatestPosts props={LATEST_POSTS} />
        </div>
        <ContactForm className='contactFormContainer' />
      </div>
    </div>
  );
};

export default Home;
