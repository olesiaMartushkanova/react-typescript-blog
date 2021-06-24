import Page from '../../components/Page/Page';
import { HOME_PATH } from '../../utils/constants';
import './AboutMe.css';
import Portrait from '../../images/Portrait.jpg';
import DownloadCVButton from '../../components/DownloadCVButton/DowlonadCVButton';

const AboutMe = () => {
  return (
    <Page path={HOME_PATH} text='Home'>
      <main className='aboutMe'>
        <section className='introContainer'>
          <section className='titleAboutMeContainer'>
            <title className='aboutMeTitle'>Hello! I'm Olesia!</title>
            <aside className='aboutMeIntro'>
              I am a Software Engineer based in a beautiful New Zealand
            </aside>
          </section>

          {/* Main part container */}
          <section className='mainPortfolioContainer'>
            <img className='portfolioPictureContainer' src={Portrait} />

            <section className='mainAboutMeContainer'>
              <aside className='introText'>
                Some cool short text about me,Some cool short text about me,Some
                cool short text about me,Some cool short text about me,Some cool
                short text about me which should be saved somewhere
              </aside>
              <DownloadCVButton />
            </section>
          </section>

          <div className='moreAboutMeButton'></div>
        </section>

        {/* Next page here */}
      </main>
    </Page>
  );
};

export default AboutMe;
