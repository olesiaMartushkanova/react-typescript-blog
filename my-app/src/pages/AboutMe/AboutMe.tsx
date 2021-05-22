import Page from '../../components/Page/Page';
import { HOME_PATH } from '../../utils/constants';
import './AboutMe.css';
import Portrait from './Portrait.jpg';

const AboutMe = () => {
  return (
    <Page path={HOME_PATH} text='About me'>
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
            <img className='portfolioPictureContainer' src={Portrait}></img>

            <div className='mainAboutMe'>
              <div className='mainTextContainer'>
                Some cool short text about me
              </div>
              <div className='contactDetailsContainer'>
                <div className='downloadCVButton'></div>
                <div className='contactMeButton'></div>
              </div>
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
