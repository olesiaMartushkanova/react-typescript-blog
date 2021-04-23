import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ISocialFollow } from '../../types';
import './SocialFollow.css';

const SocialFollow = ({ props }: any) => {
  return props.map((socialButton: ISocialFollow) => (
    <a href={socialButton.path}>
      <FontAwesomeIcon
        icon={socialButton.icon}
        className={socialButton.className}
        color={socialButton.color}
        size='2x'></FontAwesomeIcon>
    </a>
  ));
};

export default SocialFollow;
