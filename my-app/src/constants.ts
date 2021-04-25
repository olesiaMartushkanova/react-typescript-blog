import {
  faInstagram,
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
import { IPostItem, ISocialFollow } from './types';

export const ABOUT_ME_PATH = '/about-me';
export const HOME_PATH = '/';
export const MEDIUM_PATH = '/medium';
export const TITLE_TEXT =
  'It’s all about my passion to life, learning and personal growth';

export const SOCIAL_BUTTONS: Array<ISocialFollow> = [
  {
    icon: faInstagram,
    className: 'instagram',
    path: 'https://www.instagram.com/olesia_learns/',
  },
  {
    icon: faLinkedin,
    className: 'linkedin',
    path: 'https://www.linkedin.com/in/olesia-martushkanova/',
  },
  {
    icon: faGithub,
    className: 'github',
    path: 'https://github.com/olesiaMartushkanova',
  },
];

const BASE_MEDIUM_PATH = 'https://medium.com/me/';

export const LATEST_POSTS: Array<IPostItem> = [
  {
    title: 'Learning React: Part 1',
    path: `${BASE_MEDIUM_PATH}/stories/drafts`,
  },
  {
    title: 'Diving into DevOps: learning Argo Workflows',
    path: `${BASE_MEDIUM_PATH}/stories/drafts`,
  },
];
