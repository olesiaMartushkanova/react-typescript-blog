import './Home.css';
import { ABOUT_ME_PATH, LATEST_POSTS, TITLE_TEXT } from '../../utils/constants';
import LatestPosts from '../../components/LatestPosts/LatestPosts';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../components/LatestPosts/LatestPosts.css';
import ContactForm from '../../components/ContactForm/ContactForm';
import Page from '../../components/Page/Page';

const Home = () => {
  return (
    <Page path={ABOUT_ME_PATH} text='Home'>
      <div className='home'>
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
    </Page>
  );
};

export default Home;
