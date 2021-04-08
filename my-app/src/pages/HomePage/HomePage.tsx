import React from 'react';
import './HomePage.css';
import MainButton from '../../components/MainButton';

function HomePage() {
  return (
    <div className="App">
      <p>My future site site.</p>
      <p> Here is my button </p>
      <MainButton>Is my button working?</MainButton>
    </div>
  );
}

export default HomePage;
