import { CSSProperties } from 'react';
import './MainButton.css';

export interface IMainButton {
  text?: string;
  className?: string;
  path?: string;
  onClick?: any;
  style?: CSSProperties;
}

const MainButton: React.FC<IMainButton> = (props) => {
  const { className, text, children, onClick, style } = props;
  const classes = 'button__main ' + className;

  return (
    <button className={classes} onClick={onClick} style={style}>
      {text}
      {children}
    </button>
  );
};

export default MainButton;
