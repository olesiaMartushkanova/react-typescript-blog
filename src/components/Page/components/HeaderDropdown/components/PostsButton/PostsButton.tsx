import { CSSProperties } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MainButton from '../../../../../MainButton/MainButton';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

interface IPostsButton {
  style?: CSSProperties;
  onClick?: any;
}

const PostsButton = (props: IPostsButton) => {
  const { style, onClick } = props;

  return (
    <div>
      <MainButton onClick={onClick} style={style} text='My Posts'>
        <FontAwesomeIcon icon={faCaretDown} style={{ marginLeft: '15px' }} />
      </MainButton>
    </div>
  );
};

export default PostsButton;
