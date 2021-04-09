import { Link } from 'react-router-dom';
import './MainButton.css';

const MainButton = (props: any) => {
  const { text } = props;

  return (
    <div className='MainButton'>
      <Link to='/about'>{text}</Link>
    </div>
  );
};

export default MainButton;
