import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { useRef } from 'react';
import Page from '../../components/Page/Page';
import {
  CODE_CHALLENGE_PATH,
  HOME_PATH,
  MY_STORY_PATH,
} from '../../utils/constants';
import './AboutMe.css';
import Portrait from '../../images/Portrait.jpg';
import DownloadCVButton from './components/DownloadCVButton/DowlonadCVButton';
import ReadMyStoryButton from './components/ReadMyStoryButton/ReadMyStoryButton';
import MainButton from '../../components/MainButton/MainButton';
import RolePieChart from './components/RolePieChart/RolePieChart';
import List from '../../components/List/List';
import {
  ABOUT_ME_ASIDE,
  ABOUT_ME_TEXT,
  ABOUT_ME_TITLE,
  RANDOM_FACTS,
  SOFT_SKILLS,
  TECH_SKILLS,
} from './constants';
import CodeChallengeButton from './components/ReadMyStoryButton copy/ReadMyStoryButton';

const AboutMe = () => {
  const skillsTitleRef = useRef<HTMLDivElement>(null);

  const executeScrollsToSkillsSection = () =>
    skillsTitleRef.current?.scrollIntoView({
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
            </section>
          </section>
          <div className='buttons__more'>
            <DownloadCVButton />
            <ReadMyStoryButton
              className='button__read-my-story'
              path={MY_STORY_PATH}
            />
            <CodeChallengeButton
              className='button__code-challenge'
              path={CODE_CHALLENGE_PATH}
            />
            <MainButton
              className='button__more-about-me'
              text='More about me '
              onClick={executeScrollsToSkillsSection}>
              <FontAwesomeIcon icon={faArrowDown} />
            </MainButton>
          </div>
        </div>

        <section className='section__skills-chart'>
          <div
            ref={skillsTitleRef}
            className='space__before-skills-title'></div>
          <h2>About my skills</h2>
          <div className='section__skills-description'>
            <List className='list soft-skills' list={SOFT_SKILLS} />
            <List className='list hard-skills' list={TECH_SKILLS} />
          </div>
          <RolePieChart />
        </section>

        <section className='section__random-facts'>
          <h2>Random facts about me</h2>
          <List
            className='list random-facts-description'
            list={RANDOM_FACTS}></List>
        </section>
      </div>
    </Page>
  );
};

// IDEA: split css files on mobile and desktop

export default AboutMe;
