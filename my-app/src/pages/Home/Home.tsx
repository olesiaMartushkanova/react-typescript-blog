import './Home.css';
import { ABOUT_ME_PATH, MEDIA_QUERY_SIZE } from '../../utils/constants';
import LatestPosts from './components/LatestPosts/LatestPosts';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactForm from './components/ContactForm/ContactForm';
import Page from '../../components/Page/Page';
import { useMediaQueryHook } from '../../utils/hooks/useMediaQuery';
import { LATEST_POSTS, TITLE_TEXT } from './constants';

const Home = () => {
  const isPageWide = useMediaQueryHook(MEDIA_QUERY_SIZE.desktop);

  return (
    <Page homeButtonPath={ABOUT_ME_PATH} text='About me'>
      <main className='main__home'>
        {isPageWide && (
          <section className='section__title'>
            <h1>{TITLE_TEXT}</h1>
          </section>
        )}

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
