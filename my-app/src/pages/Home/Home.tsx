import './Home.css';
import { ABOUT_ME_PATH, LATEST_POSTS, TITLE_TEXT } from '../../utils/constants';
import LatestPosts from '../../components/LatestPosts/LatestPosts';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../components/LatestPosts/LatestPosts.css';
import ContactForm from '../../components/ContactForm/ContactForm';
import Page from '../../components/Page/Page';

const Home = () => {
  return (
    <Page path={ABOUT_ME_PATH} text='About me'>
      <main className='home'>
        <section className='titleContainer'>
          <h1>{TITLE_TEXT}</h1>
        </section>

        <aside className='spacer' />

        <section className='mainSection'>
          <nav className='latestPostsContainer'>
            My latest posts
            <LatestPosts props={LATEST_POSTS} />
          </nav>
          <ContactForm className='contactFormContainer' />
        </section>
      </main>
    </Page>
  );
};

export default Home;
