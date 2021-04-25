import PostItem from './PostItem';
import { IPostItem } from '../../types';
// import { Link } from 'react-router-dom';

const LatestPostsContainer = ({ props }: any) => {
  return props.map((postItem: IPostItem) => (
    <div>
      <PostItem title={postItem.title} path={postItem.path} />
    </div>
  ));
};

export default LatestPostsContainer;
