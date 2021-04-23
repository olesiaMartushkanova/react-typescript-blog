import {
  faInstagram,
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
import { ISocialFollow } from './types';

export const ABOUT_ME_PATH = '/about-me';
export const HOME_PATH = '/';
export const MEDIUM_PATH = '/medium';
export const TITLE_TEXT =
  'It’s all about my passion to life, learning and personal growth';

export const SOCIAL_BUTTONS: Array<ISocialFollow> = [
  {
    icon: faInstagram,
    className: 'instagram',
    color: 'black',
    path: 'https://www.instagram.com/olesia_learns/',
  },
  {
    icon: faLinkedin,
    className: 'linkedin',
    color: 'black',
    path: 'https://www.linkedin.com/in/olesia-martushkanova/',
  },
  {
    icon: faGithub,
    className: 'github',
    color: 'black',
    path: 'https://github.com/olesiaMartushkanova',
  },
];
