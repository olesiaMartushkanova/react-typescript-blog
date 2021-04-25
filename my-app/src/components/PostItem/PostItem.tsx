import { IPostItem } from '../../types';
import './PostItem.css';

const PostItem = (props: IPostItem) => {
  const { title, path } = props;

  const clickHandler = () => {
    window.open(path, '_blank');
  };

  return (
    <div className='postItem' onClick={clickHandler}>
      {title}
      <a href={path}></a>
    </div>
  );
};
export default PostItem;
