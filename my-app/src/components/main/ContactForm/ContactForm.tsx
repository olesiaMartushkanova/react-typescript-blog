import './ContactForm.css';
import SubmitButton from './SubmitButton';
import { useState } from 'react';

const ContactForm = () => {
  const [value, setValue] = useState();

  const onChangeHandler = (event: any) => {
    setValue(event.target.value);
  };

  return (
    <div className='contactForm'>
      Contact Me
      <div>
        <textarea
          className='inputField'
          placeholder={`Would you like to contact me?\nPlease, send me message and I will reply you in the next couple of days.`}
          onChange={onChangeHandler}>
          {value}
        </textarea>
        <SubmitButton />
      </div>
    </div>
  );
};

export default ContactForm;
