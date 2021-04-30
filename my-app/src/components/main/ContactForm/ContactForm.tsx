import './ContactForm.css';
import SubmitButton from './SubmitButton';
import { useState } from 'react';
import { IContactForm } from '../../../types';

const ContactForm = (props: IContactForm) => {
  const [value, setValue] = useState(props.value);

  const onChangeHandler = () => {
    setValue('New value');
    console.log('Am I clicked');
  };

  return (
    <div className='contactForm'>
      Contact Me
      <div>
        <input
          className='inputField'
          type='text'
          title='Do you want to contact me?'
          value={value}
          onChange={onChangeHandler}
        />
        <SubmitButton />
      </div>
    </div>
  );
};

export default ContactForm;
