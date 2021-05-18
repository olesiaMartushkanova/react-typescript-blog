import './PostItem.css';

export interface IPostItem {
  title: string;
  path: string;
}

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
