import PostItem from '../PostItem/PostItem';
import { IPostItem } from '../../types';
// import { Link } from 'react-router-dom';

const LatestPosts = ({ props }: any) => {
  return props.map((postItem: IPostItem) => (
    <div>
      <PostItem title={postItem.title} path={postItem.path} />
    </div>
  ));
};

export default LatestPosts;
