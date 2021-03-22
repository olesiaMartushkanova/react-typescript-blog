import React from 'react';
import logo from './logo.svg';
import './HomePage.css';
import NavigationButton from '../../components/navigationButtonComponent/NavigationButton';

function HomePage() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>My future site site.</p>
        <p> Here is my button </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default HomePage;
