import { IInput } from '../../utils/types';
import './Input.css';

const Input: React.FC<IInput> = (props) => {
  const { name, className, placeholder, type, value } = props;
  const classes = 'input ' + className;

  return (
    <div>
      <input
        type={type}
        className={classes}
        placeholder={placeholder}
        name={name}
        value={value}
      />
    </div>
  );
};

export default Input;
