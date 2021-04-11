import './Home.css';
import MainButton from '../../components/MainButton';
import { ABOUT_ME_PATH } from '../../constants';

const TITLE_TEXT =
  'It’s all about my passion to life, learning and personal growth';

const Home = () => {
  return (
    <div className='home'>
      <div id='titleContainer'>
        <h1 className='titleContainer'>{TITLE_TEXT}</h1>
      </div>
      <div id='interactiveContainer'>
        {/* <div id='navigationContainer'>
          <MainButton text='About me' path={ABOUT_ME_PATH} />
        </div> */}
        <div id='latestPostsContainer'> </div>
        <div id='contactMeContainer'> </div>
      </div>
    </div>
  );
};

export default Home;
