import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './SocialFollow.css';
import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';

export interface ISocialFollow extends FontAwesomeIconProps {
  path: string;
}

const SocialFollow = ({ props }: any) => {
  return props.map((socialButton: ISocialFollow) => (
    <a href={socialButton.path} rel='noreferrer' target='_blank'>
      <FontAwesomeIcon
        icon={socialButton.icon}
        className={socialButton.className}
        color='black'
        size='2x'></FontAwesomeIcon>
    </a>
  ));
};

export default SocialFollow;
