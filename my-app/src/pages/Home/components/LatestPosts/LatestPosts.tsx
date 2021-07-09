import PostItem, { IPostItem } from './components/PostItem';

const LatestPosts = ({ props }: any) => {
  return props.map((postItem: IPostItem) => (
    <div key={postItem.id}>
      <PostItem id={postItem.id} title={postItem.title} path={postItem.path} />
    </div>
  ));
};

export default LatestPosts;
