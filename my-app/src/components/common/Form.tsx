import { IForm } from '../../utils/types';
import './Form.css';

const Form: React.FC<IForm> = (props) => {
  const { name, className, placeholder, value, onChange } = props;
  const classes = 'form ' + className;

  return (
    <form name={name}>
      <textarea
        className={classes}
        placeholder={placeholder}
        onChange={onChange}
        value={value}></textarea>
    </form>
  );
};

export default Form;
