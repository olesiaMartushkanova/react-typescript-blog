import './ContactForm.css';
import SubmitButton from './SubmitButton';
import { useState } from 'react';
import emailjs from 'emailjs-com';

const templateParams = {
  name: 'James',
  notes: 'Check this out!',
};

const sendEmail = emailjs
  .send(
    'service_uuiq0hr',
    'template_qxa5a8i',
    templateParams,
    'user_srvGHruster2XssIBwcI7'
  )
  .then(
    (response) => {
      console.log('SUCCESS!', response.status, response.text);
    },
    (err) => {
      console.log('FAILED...', err);
    }
  );

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
