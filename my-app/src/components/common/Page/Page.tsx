import Navigation from '../../main/Navigation/Navigation';
import React from 'react';
import Footer from '../../footer/Footer';
import './Page.css';

interface IPage {
  path: string;
  text: string;
}

const Page: React.FC<IPage> = (props) => {
  const { children, path, text } = props;

  return (
    <div className='mainContainer'>
      <Navigation path={path} text={text} className='buttonsContainer' />
      {children}
      <Footer />
    </div>
  );
};

export default Page;
