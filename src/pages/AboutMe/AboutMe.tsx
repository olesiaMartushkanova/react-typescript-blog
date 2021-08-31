import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { useRef } from 'react';
import Page from '../../components/Page/Page';
import {
  HOME_PATH,
  MEDIA_QUERY_SIZE,
  MY_STORY_PATH,
} from '../../utils/constants';
import './AboutMe.css';
import Portrait from '../../images/Portrait.jpg';
import ReadMyStoryButton from './components/ReadMyStoryButton/ReadMyStoryButton';
import MainButton from '../../components/MainButton/MainButton';
import RolePieChart from './components/RolePieChart/RolePieChart';
import TextList from './components/TextList/TextList';
import {
  ABOUT_ME_ASIDE,
  ABOUT_ME_TITLE,
  RANDOM_FACTS,
  SOFT_SKILLS,
  TECH_SKILLS,
} from './constants';
import { useMediaQueryHook } from '../../utils/hooks/useMediaQuery';

const AboutMe = () => {
  const skillsTitleRef = useRef<HTMLDivElement>(null);

  const executeScrollsToSkillsSection = () =>
    skillsTitleRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });

  const isPageWide = useMediaQueryHook(MEDIA_QUERY_SIZE.desktop);

  return (
    <Page homeButtonPath={HOME_PATH} homeButtonText='Home'>
      <div className='main__about-me'>
        <div className='section__introduction'>
          <section className='section__title--about-me'>
            <div className='title__about-me'>{ABOUT_ME_TITLE}</div>
            <aside className='aside__about-me'>{ABOUT_ME_ASIDE}</aside>
          </section>

          <section className='section__portfolio-picture'>
            <img className='img__portfolio-picture' src={Portrait} />
            <section className='section__about-me__main'>
              <text className='text__main-about-me'>
                <p>
                  {`If I had to describe myself I would say: "I am a self-taught Software Developer with a background in automation testings, dedicated to learning and improving every day. I enjoy building web-applications and work DevOps environment. I love programming a lot! That's why I
                  care about what I do and I always work hard to achieve the best results. `}
                </p>
                <p>My life motto is 'Learn every day'."</p>
              </text>
            </section>
          </section>

          <div className='buttons__more'>
            <ReadMyStoryButton
              className='button__read-my-story'
              path={MY_STORY_PATH}
            />

            {isPageWide && (
              <MainButton
                className='button__more-about-me'
                text='More about me '
                onClick={executeScrollsToSkillsSection}>
                <FontAwesomeIcon icon={faArrowDown} />
              </MainButton>
            )}
          </div>
        </div>

        <section className='section__skills-chart'>
          <div
            ref={skillsTitleRef}
            className='space__before-skills-title'></div>
          <div className='sub-title__about-me'>Some of my skills</div>
          <div className='section__skills-description'>
            <TextList className='list soft-skills' list={SOFT_SKILLS} />
            <TextList className='list hard-skills' list={TECH_SKILLS} />
          </div>
          <RolePieChart />
        </section>

        <section className='section__random-facts'>
          <div className='sub-title__about-me'>Random facts about me</div>
          <TextList
            className='list random-facts-description'
            list={RANDOM_FACTS}
          />
        </section>
      </div>
    </Page>
  );
};

export default AboutMe;
