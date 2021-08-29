import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useRef, useState } from 'react';
import { MY_STORY_PATH } from '../../../../utils/constants';
import { ILinkListItem } from '../../../LinkList/components/LinkListItem';
import LinkList from '../../../LinkList/LinkList';
import MainButton from '../../../MainButton/MainButton';
import './HeaderDropdown.css';

interface IDropdown {
  className?: string;
}

const postsList: Array<ILinkListItem> = [
  {
    id: 'learning_react_article',
    title: 'How did I become a software engineer?',
    path: MY_STORY_PATH,
  },
];

const dropdownIsOpenedButtonColors = {
  backgroundColor: '#e9e9e9',
  color: '#1f2833',
  borderBottom: 'none',
};

const dropdownIsClosedButtonColors = {
  backgroundColor: '#1f2833',
  color: '#e9e9e9',
  borderBottom: '1px solid #66fcf1',
};

const HeaderDropdown = (props: IDropdown) => {
  const { className } = props;

  const [showMenu, setShowMenu] = useState(false);
  const [buttonColors, setButtonColors] = useState(
    dropdownIsClosedButtonColors
  );

  const dropdown = useRef<HTMLHeadingElement>(null);

  const openMenu = (event: any) => {
    event.preventDefault();
    setShowMenu(true);
    setButtonColors(dropdownIsOpenedButtonColors);
  };

  const closeMenu = (event: any) => {
    if (!dropdown.current?.contains(event.target)) {
      setShowMenu(false);
      setButtonColors(dropdownIsClosedButtonColors);
    }
  };

  useEffect(() => {
    if (showMenu) {
      document.addEventListener('click', closeMenu);
    } else {
      document.removeEventListener('click', closeMenu);
    }
    return () => document.removeEventListener('click', closeMenu);
  }, [showMenu]);

  return (
    <div className={`header-dropdown__container ${className}`}>
      <MainButton onClick={openMenu} style={buttonColors} text='My Posts'>
        <FontAwesomeIcon icon={faCaretDown} style={{ marginLeft: '15px' }} />
      </MainButton>

      {showMenu && (
        <div className='header-dropdown__menu' ref={dropdown}>
          <LinkList props={postsList} />
        </div>
      )}
    </div>
  );
};

export default HeaderDropdown;
