import PostItem from './PostItem';
import { IPostItem } from '../../../utils/types';

const LatestPostsContainer = ({ props }: any) => {
  return props.map((postItem: IPostItem) => (
    <div>
      <PostItem title={postItem.title} path={postItem.path} />
    </div>
  ));
};

export default LatestPostsContainer;
