import PostItem, { IPostItem } from './PostItem';

const LatestPosts = ({ props }: any) => {
  return props.map((postItem: IPostItem) => (
    <div>
      <PostItem title={postItem.title} path={postItem.path} />
    </div>
  ));
};

export default LatestPosts;
