import { IPostItem } from '../../../utils/types';
import './PostItem.css';

const PostItem = (props: IPostItem) => {
  const { title, path } = props;

  const postItemHandler = () => {
    window.open(path, '_blank');
  };

  return (
    <div className='postItem' onClick={postItemHandler}>
      {title}
      <a href={path}></a>
    </div>
  );
};
export default PostItem;
