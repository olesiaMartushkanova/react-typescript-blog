import { MEDIUM_PATH } from '../../utils/constants';
import { IPostItem } from './components/LatestPosts/components/PostItem';

export const TITLE_TEXT =
  'It’s all about my passion to life, learning and personal growth';

export const LATEST_POSTS: Array<IPostItem> = [
  {
    id: 'learning_react_article',
    title: 'Learning React: Part 1',
    path: MEDIUM_PATH,
  },
  {
    id: 'learning_argo_article',
    title: 'Diving into DevOps: learning Argo Workflows',
    path: MEDIUM_PATH,
  },
];
