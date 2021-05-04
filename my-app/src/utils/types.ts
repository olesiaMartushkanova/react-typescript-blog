import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';

export interface IMainButton {
  text?: string;
  className?: string;
  path?: string;
  variant?: string;
  size?: 'lg' | 'sm';
  onClick?: any;
}

export interface ISocialFollow extends FontAwesomeIconProps {
  path: string;
}

export interface IPostItem {
  title: string;
  path: string;
}

export interface INavigation {
  path: string;
  text: string;
}
