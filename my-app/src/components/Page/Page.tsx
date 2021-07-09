import React from 'react';
import './Page.css';
import Footer from './components/Footer/Footer';
import AboutMeButton from './components/AboutMeButton/AboutMeButton';
import MediumButton from './components/MediumButton/MediumButton';
import { MEDIUM_PATH } from '../../utils/constants';

interface IHeader {
  path: string;
  text: string;
}

const Header: React.FC<IHeader> = (props) => {
  const { children, path, text } = props;

  return (
    <main className='page'>
      <header className='header'>
        <nav className='nav__buttons'>
          <AboutMeButton path={path} text={text} />
          <MediumButton path={MEDIUM_PATH} />
        </nav>
      </header>
      {children}
      <Footer />
    </main>
  );
};

export default Header;
