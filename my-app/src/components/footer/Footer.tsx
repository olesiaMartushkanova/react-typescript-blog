import { SOCIAL_BUTTONS } from '../../utils/constants';
import './Footer.css';
import SocialFollow from './SocialFollow/SocialFollow';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='socialContainer'>
        <SocialFollow props={SOCIAL_BUTTONS} />
      </div>
    </div>
  );
};

export default Footer;
