import Page from '../../components/Page/Page';
import { HOME_PATH } from '../../utils/constants';
import './AboutMe.css';

const AboutMe = () => {
  return (
    <Page path={HOME_PATH} text='About me'>
      <div className='aboutMe'></div>
    </Page>
  );
};

export default AboutMe;
