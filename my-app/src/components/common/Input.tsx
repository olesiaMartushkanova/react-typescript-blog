import { IForm } from '../../utils/types';
import './Input.css';

const Input: React.FC<IForm> = (props) => {
  const { name, className, placeholder, type } = props;
  const classes = 'input ' + className;

  return (
    <div>
      <input
        type={type}
        className={classes}
        placeholder={placeholder}
        name={name}
      />
    </div>
  );
};

export default Input;
