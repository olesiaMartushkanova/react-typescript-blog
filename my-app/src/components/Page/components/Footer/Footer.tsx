import { SOCIAL_BUTTONS } from '../../../../utils/constants';
import './Footer.css';
import SocialFollow from './components/SocialFollow/SocialFollow';

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
