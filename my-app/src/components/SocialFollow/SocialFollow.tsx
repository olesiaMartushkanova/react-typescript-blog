import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome';
import './SocialFollow.css';

const SocialFollow = ({ props }: any) => {
  return props.map((socialButton: FontAwesomeIconProps) => (
    <FontAwesomeIcon
      icon={socialButton.icon}
      className={socialButton.className}
      color={socialButton.color}
      size='2x'></FontAwesomeIcon>
  ));
};

export default SocialFollow;
