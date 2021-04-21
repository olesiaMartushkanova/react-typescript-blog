import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './SocialFollow.css';

const SocialFollow = () => {
  return (
    // To return as one component
    <>
      <div className='instagram'>
        <a
          style={{ color: 'black' }}
          href='https://www.instagram.com/olesia_learns'>
          <FontAwesomeIcon icon={faInstagram} size='2x' />
        </a>
      </div>

      <div className='linkedin'>
        <a href='https://www.linkedin.com/in/olesia-martushkanova/'>
          <FontAwesomeIcon icon={faLinkedin} size='2x' />
        </a>
      </div>
    </>
  );
};

export default SocialFollow;
