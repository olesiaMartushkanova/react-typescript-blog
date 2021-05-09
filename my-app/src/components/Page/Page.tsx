import React from 'react';
import './Page.css';
import Footer from '../../pages/Footer/Footer';
import AboutMeButton from '../AboutMeButton/AboutMeButton';
import MediumButton from '../MediumButton/MediumButton';
import { MEDIUM_PATH } from '../../utils/constants';

interface IHeader {
  path: string;
  text: string;
}

const Header: React.FC<IHeader> = (props) => {
  const { children, path, text } = props;

  return (
    <div className='page'>
      <div className='header'>
        <div className='buttonsContainer'>
          <AboutMeButton path={path} text={text} />
          <MediumButton path={MEDIUM_PATH} />
        </div>
      </div>
      {children}
      <Footer />
    </div>
  );
};

export default Header;
