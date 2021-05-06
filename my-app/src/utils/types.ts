import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';

//  TODO: move interfaces to components files?

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
  className?: string;
}

export interface IInput {
  type: string;
  value?: string;
  name?: string;
  className?: string;
  placeholder?: string;
}
