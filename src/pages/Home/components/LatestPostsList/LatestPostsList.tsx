import LinkList from '../../../../components/LinkList/LinkList';
import { LATEST_POSTS } from '../../constants';
import './LatestPostsList.css';

const LatestPostsLink = () => {
  return (
    <div className='latest-post-item'>
      <LinkList props={LATEST_POSTS} />
    </div>
  );
};

export default LatestPostsLink;
