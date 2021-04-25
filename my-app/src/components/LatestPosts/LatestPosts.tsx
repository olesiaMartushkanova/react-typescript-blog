import PostItem from '../PostItem/PostItem';
import { IPostItem } from '../../types';

const LatestPosts = ({ props }: any) => {
  return props.map((postItem: IPostItem) => (
    <div>
      <PostItem title={postItem.title} path={postItem.path} />
    </div>
  ));
};

export default LatestPosts;
