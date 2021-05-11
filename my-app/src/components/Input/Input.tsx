import './Input.css';

interface IInput {
  id?: string;
  name?: string;
  type?: string;
  value?: string;
  className?: string;
  placeholder?: string;
  onClick?: any;
}

const Input: React.FC<IInput> = (props) => {
  const { name, className, placeholder, type, value, id, onClick } = props;
  const classes = 'input ' + className;

  return (
    <div>
      <input
        id={id}
        type={type || 'text'}
        className={classes}
        placeholder={placeholder}
        name={name}
        value={value}
        onClick={onClick}
      />
    </div>
  );
};

export default Input;
