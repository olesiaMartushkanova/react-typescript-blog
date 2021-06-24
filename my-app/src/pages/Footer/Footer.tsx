import { SOCIAL_BUTTONS } from '../../utils/constants';
import './Footer.css';
import SocialFollow from '../../components/SocialFollow/SocialFollow';

const Footer = () => {
  return (
    <footer className='footer'>
      <section className='socialContainer'>
        <SocialFollow props={SOCIAL_BUTTONS} />
      </section>
    </footer>
  );
};

export default Footer;
