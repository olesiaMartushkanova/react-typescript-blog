import './ReadMyStory.css';
import Page from '../../components/Page/Page';
import { HOME_PATH } from '../../utils/constants';

const ReadMyStory = () => {
  return (
    <Page homeButtonPath={HOME_PATH} text='Home'>
      <div className='main__read-my-story'>
        <h1 className='title__how-started'>
          How did I become a software engineer?
        </h1>
      </div>
    </Page>
  );
};

export default ReadMyStory;
