import React from 'react';
import './Page.css';
import Footer from './components/Footer/Footer';
import AboutMeButton from './components/AboutMeButton/AboutMeButton';
import MediumButton from './components/MediumButton/MediumButton';
import { MEDIUM_PATH } from '../../utils/constants';

interface IPage {
  homeButtonPath: string;
  text: string;
}

const Page: React.FC<IPage> = (props) => {
  const { children, homeButtonPath, text } = props;

  return (
    <div className='app-blog-page'>
      <header className='header'>
        <nav className='nav__buttons'>
          <AboutMeButton path={homeButtonPath} text={text} />
          <MediumButton path={MEDIUM_PATH} />
        </nav>
      </header>
      <div> {children}</div>
      <Footer />
    </div>
  );
};

export default Page;
