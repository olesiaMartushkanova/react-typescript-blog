import './MainButton.css';

export interface IMainButton {
  text?: string;
  className?: string;
  path?: string;
  onClick?: any;
}

const MainButton: React.FC<IMainButton> = (props) => {
  const { className, text, children, onClick } = props;
  const classes = 'button__main ' + className;

  return (
    <button className={classes} onClick={onClick}>
      {text}
      {children}
    </button>
  );
};

export default MainButton;
