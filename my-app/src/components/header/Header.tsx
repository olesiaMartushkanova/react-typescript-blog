import Navigation from '../main/Navigation/Navigation';
import React from 'react';
import './Header.css';
import Footer from '../footer/Footer';

interface IHeader {
  path: string;
  text: string;
}

const Header: React.FC<IHeader> = (props) => {
  const { children, path, text } = props;

  return (
    <div className='header'>
      <Navigation path={path} text={text} className='buttonsContainer' />
      {children}
      <Footer />
    </div>
  );
};

export default Header;
