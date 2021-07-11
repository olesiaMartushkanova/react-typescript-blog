import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

import Page from '../../components/Page/Page';
import { HOME_PATH, MY_STORY_PATH } from '../../utils/constants';
import './AboutMe.css';
import Portrait from '../../images/Portrait.jpg';
import DownloadCVButton from './components/DownloadCVButton/DowlonadCVButton';
import ReadMyStoryButton from './components/ReadMyStoryButton/ReadMyStoryButton';
import MainButton from '../../components/MainButton/MainButton';
import RolePieChart from './components/RolePieChart/RolePieChart';

const AboutMe = () => {
  return (
    <Page path={HOME_PATH} text='Home'>
      <main className='main__about-me'>
        <div className='section__introduction'>
          <section className='section__title--about-me'>
            <div className='title__about-me'>Hello! I'm Olesia!</div>
            <aside className='aside__about-me'>
              I am a Software Engineer based in a beautiful New Zealand
            </aside>
          </section>

          <section className='section__portfolio-picture'>
            <img className='img__portfolio-picture' src={Portrait} />
            <section className='section__about-me__main'>
              <aside className='aside__text__main-about-me'>
                I love programming and believe in clean code, teamwork and
                making users happy. I can create web applications using modern
                languages and frameworks. I always work to achieve the best
                results. My main life motto is 'grow and improve every day'.
              </aside>
              <div className='buttons__more'>
                <DownloadCVButton />
                <ReadMyStoryButton
                  className='button__read-my-story'
                  path={MY_STORY_PATH}
                />
                <MainButton
                  className='button__more-about-me'
                  text='More about me '>
                  <FontAwesomeIcon icon={faArrowDown} />
                </MainButton>
              </div>
            </section>
          </section>
          <div className='chart__role'>
            <h3 className='cart-header'>What I do:</h3>
            <RolePieChart />
          </div>
        </div>
      </main>
    </Page>
  );
};

export default AboutMe;
