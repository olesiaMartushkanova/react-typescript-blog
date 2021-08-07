import React from 'react';
import './Page.css';
import Footer from './components/Footer/Footer';
import AboutMeButton from './components/AboutMeButton/AboutMeButton';
import MediumButton from './components/MediumButton/MediumButton';
import { MEDIUM_PATH } from '../../utils/constants';

interface IPage {
  homeButtonPath: string;
  homeButtonText: string;
  mediumButtonPath?: string;
  mediumButtonText?: string;
  openMediumInNewTab?: boolean;
}

const Page: React.FC<IPage> = (props) => {
  const {
    children,
    homeButtonPath,
    homeButtonText,
    mediumButtonPath,
    mediumButtonText,
    openMediumInNewTab,
  } = props;

  return (
    <div className='app-blog-page'>
      <header className='header'>
        <nav className='nav__buttons'>
          <AboutMeButton path={homeButtonPath} text={homeButtonText} />
          <MediumButton
            path={mediumButtonPath ?? MEDIUM_PATH}
            text={mediumButtonText ?? 'Medium'}
            openInNewTab={openMediumInNewTab ?? true}
          />
        </nav>
      </header>
      <div className='page__body'> {children}</div>
      <Footer />
    </div>
  );
};

export default Page;
