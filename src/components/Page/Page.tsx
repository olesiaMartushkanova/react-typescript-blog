import React from 'react';
import './Page.css';
import Footer from './components/Footer/Footer';
import AboutMeButton from './components/AboutMeButton/AboutMeButton';
import MediumButton from './components/MediumButton/MediumButton';
import { MEDIUM_PATH } from '../../utils/constants';
import HeaderDropdown from './components/HeaderDropdown/HeaderDropdown';
import { ENV_KEY } from '../../utils/env';

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
        <div className='nav__buttons'>
          <HeaderDropdown className='header__dropdown' />

          <AboutMeButton
            className='button__about-me'
            path={homeButtonPath}
            text={homeButtonText}
          />

          {ENV_KEY.mediumButton && (
            <MediumButton
              path={mediumButtonPath ?? MEDIUM_PATH}
              text={mediumButtonText ?? 'Medium'}
              openInNewTab={openMediumInNewTab ?? true}
            />
          )}
        </div>
      </header>
      <div className='page__body'> {children}</div>
      <Footer />
    </div>
  );
};

export default Page;
