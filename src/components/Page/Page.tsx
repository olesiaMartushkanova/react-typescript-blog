import React from 'react';
import './Page.css';
import Footer from './components/Footer/Footer';
import AboutMeButton from './components/AboutMeButton/AboutMeButton';
import HeaderDropdown from './components/HeaderDropdown/HeaderDropdown';

interface IPage {
  homeButtonPath: string;
  homeButtonText: string;
}

const Page: React.FC<IPage> = ({
  children,
  homeButtonPath,
  homeButtonText,
}) => {
  return (
    <div className='app-blog-page'>
      <header className='header'>
        <div className='nav__buttons'>
          <HeaderDropdown className='posts__dropdown' />

          <AboutMeButton
            className='button__about-me'
            path={homeButtonPath}
            text={homeButtonText}
          />
        </div>
      </header>
      <div className='page__body'> {children}</div>
      <Footer />
    </div>
  );
};

export default Page;
