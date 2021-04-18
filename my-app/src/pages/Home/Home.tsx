import './Home.css';
import MainButton from '../../components/MainButton';
import { ABOUT_ME_PATH, MEDIUM_PATH } from '../../constants';

const TITLE_TEXT =
  'It’s all about my passion to life, learning and personal growth';

const Home = () => {
  return (
    <div className='home'>
      <div id='titleContainer'>
        <h1 className='titleContainer'>{TITLE_TEXT}</h1>
      </div>
      <div id='interactiveContainer'>
        <div>
          <MainButton
            className='mainButton mediumButton'
            text='Medium'
            path={MEDIUM_PATH}
          />
        </div>
        <div>
          <MainButton
            className='mainButton aboutMeButton'
            text='About me'
            path={ABOUT_ME_PATH}
          />
        </div>
      </div>
      <div id='latestPostsContainer'> </div>
      <div id='contactMeContainer'> </div>
      <div id='socialButton'></div>
    </div>
  );
};

export default Home;
