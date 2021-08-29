import { CSSProperties } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MainButton from '../../../../../MainButton/MainButton';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';

interface IPostsButton {
  style?: CSSProperties;
  onClick?: any;
}

const PostsButton = (props: IPostsButton) => {
  const { style, onClick } = props;

  return (
    <div>
      <MainButton onClick={onClick} style={style}>
        My Posts
      </MainButton>
    </div>
  );
};

export default PostsButton;
