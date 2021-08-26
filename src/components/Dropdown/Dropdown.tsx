import { useState } from 'react';
import MainButton from '../MainButton/MainButton';
import './Dropdown.css';

interface IDropdown {
  className?: string;
}

const Dropdown = (props: IDropdown) => {
  const { className } = props;

  const [showMenu, setShowMenu] = useState(false);

  const handleClick = () => {
    setShowMenu(true);
    console.log('Clicking: ', showMenu);
  };

  return (
    <div className={`${className} dropdown__container`}>
      <MainButton className='dropdown__button' onClick={handleClick}>
        My Posts
      </MainButton>

      {showMenu && (
        <div className='dropdown__menu' style={{ backgroundColor: 'red' }}>
          <option>First option</option>
          <option>Second option</option>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
