import { CSSProperties } from 'react';
import './MainButton.css';

export interface IMainButton {
  text?: string;
  className?: string;
  path?: string;
  onClick?: any;
  style?: CSSProperties;
  onMouseEnter?: any;
}

const MainButton: React.FC<IMainButton> = (props) => {
  const { className, text, children, onClick, style, onMouseEnter } = props;
  const classes = 'button__main ' + className;

  return (
    <button
      className={classes}
      onClick={onClick}
      style={style}
      onMouseEnter={onMouseEnter}>
      {text}
      {children}
    </button>
  );
};

export default MainButton;
