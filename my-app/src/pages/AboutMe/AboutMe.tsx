import Page from '../../components/Page/Page';
import { HOME_PATH } from '../../utils/constants';
import './AboutMe.css';
import Portrait from '../../images/Portrait.jpg';
import DownloadCVButton from '../../components/DownloadCVButton/DowlonadCVButton';

const AboutMe = () => {
  return (
    <Page path={HOME_PATH} text='Home'>
      <main className='main__about-me'>
        <section className='section__introduction'>
          <section className='section__title--about-me'>
            <div className='title__about-me'>Hello! I'm Olesia!</div>
            <aside className='aside__about-me'>
              I am a Software Engineer based in a beautiful New Zealand
            </aside>
          </section>

          {/* Main part container */}
          <section className='section__portfolio-picture'>
            <img className='img__portfolio-picture' src={Portrait} />

            <section className='section__about-me__main'>
              <aside className='aside__text__main-about-me'>
                I love programming and believe in clean code, teamwork and
                making users happy. I can create web applications using modern
                languages and frameworks. I always work to achieve the best
                results. My main life motto is 'grow and improve every day'.
              </aside>
              <DownloadCVButton />
            </section>
          </section>

          <div className='button__more-about-me'></div>
        </section>

        {/* Next page here */}
      </main>
    </Page>
  );
};

export default AboutMe;
