import { IPostItem } from '../../types';
import './PostItem.css';

const PostItem = (props: IPostItem) => {
  const { title, path } = props;

  return (
    <div className='postItem'>
      {title}
      <a href={path} target='_blank'></a>
    </div>
  );
};
export default PostItem;
