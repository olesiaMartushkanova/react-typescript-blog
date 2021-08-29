import { useEffect, useRef, useState } from 'react';
import { MY_STORY_PATH } from '../../../../utils/constants';
import { ILinkListItem } from '../../../LinkList/components/LinkListItem';
import LinkList from '../../../LinkList/LinkList';
import PostsButton from './components/PostsButton/PostsButton';
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

const HeaderDropdown = (props: IDropdown) => {
  const { className } = props;

  const [showMenu, setShowMenu] = useState(false);
  const [buttonColors, setButtonColors] = useState({
    backgroundColor: '#1f2833',
    color: '#ffffff',
    borderBottom: '1px solid #66fcf1',
  });

  const dropdown = useRef<HTMLHeadingElement>(null);

  const handleClick = (event: any) => {
    event.preventDefault();
    setShowMenu(true);
    setButtonColors({
      backgroundColor: '#e9e9e9',
      color: '#1f2833',
      borderBottom: 'none',
    });
  };

  const closeMenu = (event: any) => {
    if (!dropdown.current?.contains(event.target)) {
      setShowMenu(false);
      setButtonColors({
        backgroundColor: '#1f2833',
        color: '#ffffff',
        borderBottom: '1px solid #66fcf1',
      });
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
    <div className={`${className} header-dropdown__container`}>
      <PostsButton onClick={handleClick} style={buttonColors} />

      {showMenu && (
        <div className='header-dropdown__menu' ref={dropdown}>
          <LinkList props={postsList} />
        </div>
      )}
    </div>
  );
};

export default HeaderDropdown;
