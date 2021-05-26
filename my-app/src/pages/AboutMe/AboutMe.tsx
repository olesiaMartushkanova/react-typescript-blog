import Page from '../../components/Page/Page';
import { HOME_PATH } from '../../utils/constants';
import './AboutMe.css';
import Portrait from '../../images/Portrait.jpg';
import DownloadCVButton from '../../components/DownloadCVButton/DowlonadCVButton';

const AboutMe = () => {
  return (
    <Page path={HOME_PATH} text='Home'>
      <div className='aboutMe'>
        <div className='introContainer'>
          <div className='titleAboutMeContainer'>
            <div className='aboutMeTitle'>Hello! I'm Olesia!</div>
            <div className='aboutMeIntro'>
              I am a Software Engineer based in a beautiful New Zealand
            </div>
          </div>

          {/* Main part container */}
          <div className='mainPortfolioContainer'>
            <img className='portfolioPictureContainer' src={Portrait} />

            <div className='mainAboutMeContainer'>
              <div className='introText'>
                Some cool short text about me,Some cool short text about me,Some
                cool short text about me,Some cool short text about me,Some cool
                short text about me which should be saved somewhere
              </div>
              <DownloadCVButton />
            </div>
          </div>

          <div className='moreAboutMeButton'></div>
        </div>

        {/* Next page here */}
      </div>
    </Page>
  );
};

export default AboutMe;
