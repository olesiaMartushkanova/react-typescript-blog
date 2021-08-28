import { useEffect, useRef, useState } from 'react';
import { LATEST_POSTS } from '../../../../pages/Home/constants';
import { MY_STORY_PATH } from '../../../../utils/constants';
import { ILinkListItem } from '../../../LinkList/components/LinkListItem';
import LinkList from '../../../LinkList/LinkList';
import MainButton from '../../../MainButton/MainButton';
import './Dropdown.css';

interface IDropdown {
  className?: string;
}

const postsList: Array<ILinkListItem> = [
  {
    id: 'learning_react_article',
    title: 'How did I become a software engineer?',
    path: MY_STORY_PATH,
    style: { fontSize: '26px' },
  },
];

const Dropdown = (props: IDropdown) => {
  const { className } = props;

  const [showMenu, setShowMenu] = useState(false);
  const dropdown = useRef<HTMLHeadingElement>(null);

  const handleClick = (event: any) => {
    event.preventDefault();
    console.log('HERE');
    setShowMenu(true);
  };

  const closeMenu = (event: any) => {
    if (!dropdown.current?.contains(event.target)) {
      setShowMenu(false);
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
    <div className={`${className} dropdown__container`}>
      <MainButton className='dropdown__button' onClick={handleClick}>
        My Posts
      </MainButton>

      {showMenu && (
        <div className='dropdown__menu' ref={dropdown}>
          <LinkList props={postsList} />
        </div>
      )}
    </div>
  );
};

export default Dropdown;
