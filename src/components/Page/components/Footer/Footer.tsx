import './Footer.css';
import SocialFollow, {
  ISocialFollow,
} from './components/SocialFollow/SocialFollow';
import {
  faInstagram,
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';

const SOCIAL_BUTTONS: Array<ISocialFollow> = [
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

const Footer = () => {
  return (
    <div className='footer'>
      <section className='section__social-follow'>
        <SocialFollow props={SOCIAL_BUTTONS} />
      </section>
    </div>
  );
};

export default Footer;
