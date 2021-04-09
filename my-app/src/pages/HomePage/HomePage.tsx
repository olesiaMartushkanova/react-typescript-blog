import './HomePage.css';
import MainButton from './../../components/MainButton';

const HomePage = () => {
  return (
    <div className='HomePage'>
      <h1>My future site site</h1>
      <p> Here will be my content </p>
      <p>Navigate to read about me:</p>
      <MainButton text='About me' />
    </div>
  );
};

export default HomePage;
