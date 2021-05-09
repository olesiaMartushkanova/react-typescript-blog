import './Input.css';

interface IInput {
  id: string;
  type?: string;
  value?: string;
  name?: string;
  className?: string;
  placeholder?: string;
}

const Input: React.FC<IInput> = (props) => {
  const { name, className, placeholder, type, value, id } = props;
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
      />
    </div>
  );
};

export default Input;
