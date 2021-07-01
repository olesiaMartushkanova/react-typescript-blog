import './Home.css';
import { ABOUT_ME_PATH, LATEST_POSTS, TITLE_TEXT } from '../../utils/constants';
import LatestPosts from '../../components/LatestPosts/LatestPosts';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactForm from '../../components/ContactForm/ContactForm';
import Page from '../../components/Page/Page';
import { BrowserView } from 'react-device-detect';

const Home = () => {
  return (
    <Page path={ABOUT_ME_PATH} text='About me'>
      <main className='main__home'>
        <BrowserView>
          <section className='section__title'>
            <h1>{TITLE_TEXT}</h1>
          </section>
        </BrowserView>

        <div className='spacer' />

        <section className='section__main--home-page'>
          <nav className='nav__latest-posts'>
            My latest posts
            <LatestPosts props={LATEST_POSTS} />
          </nav>
          <ContactForm className='container__contact-me' />
        </section>
      </main>
    </Page>
  );
};

export default Home;
