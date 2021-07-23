import {
  faInstagram,
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
import { IPostItem } from '../pages/Home/components/LatestPosts/components/PostItem';
import { ISocialFollow } from '../components/Page/components/Footer/components/SocialFollow/SocialFollow';

export const ABOUT_ME_PATH = '/about-me';
export const HOME_PATH = '/';
export const MEDIUM_PATH = 'https://medium.com/me/stories/drafts';
export const MY_STORY_PATH = '/my-story';

export const TITLE_TEXT =
  'It’s all about my passion to life, learning and personal growth';

export const SOCIAL_BUTTONS: Array<ISocialFollow> = [
  {
    id: 'instagram_icon',
    icon: faInstagram,
    className: 'instagram',
    path: 'https://www.instagram.com/olesia_learns/',
  },
  {
    id: 'linkedin_icon',
    icon: faLinkedin,
    className: 'linkedin',
    path: 'https://www.linkedin.com/in/olesia-martushkanova/',
  },
  {
    id: 'github_icon',
    icon: faGithub,
    className: 'github',
    path: 'https://github.com/olesiaMartushkanova',
  },
];

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

export const MEDIA_QUERY_SIZE = {
  desktop: '(min-width: 769px)',
  mobile: '(max-width: 768px)',
};

export const SOFT_SKILLS: Array<string> = [
  'Being a teamplayer',
  'Support positive culture',
];

export const TECH_SKILLS: Array<string> = ['JavaScript/Typescript', 'React'];
