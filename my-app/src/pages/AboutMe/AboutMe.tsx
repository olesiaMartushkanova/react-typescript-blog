import Page from '../../components/Page/Page';
import { HOME_PATH } from '../../utils/constants';
import './AboutMe.css';
import Portrait from './Portrait.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileDownload } from '@fortawesome/free-solid-svg-icons';

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

            <div className='mainTextContainer'>
              Some cool short text about me,Some cool short text about me,Some
              cool short text about me,Some cool short text about me,Some cool
              short text about me
            </div>
            <div className='contactDetailsContainer'>
              <button className='downloadCVButton'>
                <FontAwesomeIcon icon={faFileDownload} size='3x' />
                <label>Download my CV</label>
              </button>

              <div className='contactMeIcon'></div>
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
