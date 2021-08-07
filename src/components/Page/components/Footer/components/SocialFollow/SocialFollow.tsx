import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome';
import './SocialFollow.css';

export interface ISocialFollow extends FontAwesomeIconProps {
  id: string;
  path: string;
}

const SocialFollow = ({ props }: any) => {
  return props.map((socialButton: ISocialFollow) => (
    <a
      key={socialButton.id}
      href={socialButton.path}
      rel='noreferrer'
      target='_blank'>
      <FontAwesomeIcon
        icon={socialButton.icon}
        className={socialButton.className}
        color='white'
        size='2x'></FontAwesomeIcon>
    </a>
  ));
};

export default SocialFollow;
