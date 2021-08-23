import './Home.css';
import { ABOUT_ME_PATH, MEDIA_QUERY_SIZE } from '../../utils/constants';
import LatestPosts from './components/LatestPosts/LatestPosts';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactForm from './components/ContactForm/ContactForm';
import Page from '../../components/Page/Page';
import { useMediaQueryHook } from '../../utils/hooks/useMediaQuery';
import { LATEST_POSTS, TITLE_TEXT } from './constants';
import MainButton from '../../components/MainButton/MainButton';
import { useState } from 'react';

const Home = () => {
  const isPageWide = useMediaQueryHook(MEDIA_QUERY_SIZE.desktop);
  const isMobile = useMediaQueryHook(MEDIA_QUERY_SIZE.mobile);

  const [openContactForm, setOpenContactForm] = useState(false);

  const contactMeButtonHandler = () => {
    setOpenContactForm(true);
    console.log('setting contact me button handler');
  };

  return (
    <Page homeButtonPath={ABOUT_ME_PATH} homeButtonText='About me'>
      <main className='main__home'>
        <section className='section__title'>
          <div>Hi, there!</div>
          <div>{TITLE_TEXT}</div>
        </section>

        {isPageWide && <div className='spacer' />}

        <section className='section__main--home-page'>
          <nav className='nav__latest-posts'>
            <div className='nav__latest-posts-title'> My latest posts</div>

            <LatestPosts props={LATEST_POSTS} />
          </nav>

          {isMobile && !openContactForm && (
            <MainButton
              text='Contact me'
              onClick={contactMeButtonHandler}
              className='button__contact-me'
            />
          )}

          {isMobile ? (
            openContactForm && <ContactForm className='container__contact-me' />
          ) : (
            <ContactForm className='container__contact-me' />
          )}
        </section>
      </main>
    </Page>
  );
};

export default Home;
