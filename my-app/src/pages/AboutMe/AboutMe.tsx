import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { useRef } from 'react';
import Page from '../../components/Page/Page';
import { HOME_PATH, MY_STORY_PATH } from '../../utils/constants';
import './AboutMe.css';
import Portrait from '../../images/Portrait.jpg';
import DownloadCVButton from './components/DownloadCVButton/DowlonadCVButton';
import ReadMyStoryButton from './components/ReadMyStoryButton/ReadMyStoryButton';
import MainButton from '../../components/MainButton/MainButton';
import RolePieChart from './components/RolePieChart/RolePieChart';
import RoleList from './components/RoleText/RoleList';
import {
  ABOUT_ME_ASIDE,
  ABOUT_ME_TEXT,
  ABOUT_ME_TITLE,
  SOFT_SKILLS,
  TECH_SKILLS,
} from './constants';

const AboutMe = () => {
  const chartRef = useRef<HTMLDivElement>(null);

  const executeScroll = () =>
    chartRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });

  return (
    <Page homeButtonPath={HOME_PATH} text='Home'>
      <div className='main__about-me'>
        <div className='section__introduction'>
          <section className='section__title--about-me'>
            <div className='title__about-me'>{ABOUT_ME_TITLE}</div>
            <aside className='aside__about-me'>{ABOUT_ME_ASIDE}</aside>
          </section>

          <section className='section__portfolio-picture'>
            <img className='img__portfolio-picture' src={Portrait} />
            <section className='section__about-me__main'>
              <text className='text__main-about-me'>{ABOUT_ME_TEXT}</text>
              <div className='buttons__more'>
                <DownloadCVButton />
                <ReadMyStoryButton
                  className='button__read-my-story'
                  path={MY_STORY_PATH}
                />
                <MainButton
                  className='button__more-about-me'
                  text='More about me '
                  onClick={executeScroll}>
                  <FontAwesomeIcon icon={faArrowDown} />
                </MainButton>
              </div>
            </section>
          </section>
        </div>

        <section className='section__chart-role'>
          <h3 className='chart-header'>What I do</h3>
          <div className='chart'>
            <RoleList list={SOFT_SKILLS} />
            <RolePieChart ref={chartRef} />
            <RoleList list={TECH_SKILLS} />
          </div>
        </section>
      </div>
    </Page>
  );
};

export default AboutMe;
