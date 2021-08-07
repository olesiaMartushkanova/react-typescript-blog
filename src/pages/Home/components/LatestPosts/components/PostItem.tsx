import { useHistory } from 'react-router-dom';
import './PostItem.css';

export interface IPostItem {
  id: string;
  title: string;
  path: string;
}

const PostItem = (props: IPostItem) => {
  const { title, path, id } = props;

  const history = useHistory();
  const postItemHandler = () => {
    history.push(path || '/');
  };

  return (
    <div className='post-item' onClick={postItemHandler}>
      {title}
      <a href={path}></a>
    </div>
  );
};
export default PostItem;
