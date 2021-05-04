import './ContactForm.css';
import { useState } from 'react';
import emailjs from 'emailjs-com';
import { ENV_KEY } from '../../../utils/env';
import SubmitButton from './SubmitButton';

const ContactForm = () => {
  const [value, setValue] = useState();

  const handleChange = (event: any) => {
    setValue(event.target.value);
  };

  const handelSubmit = (event: any) => {
    event.preventDefault();
    console.log('user id: ' + ENV_KEY.emailUserId);

    return emailjs
      .send(
        ENV_KEY.emailServiceId,
        ENV_KEY.emailTemplateId,
        event.target.value,
        ENV_KEY.emailUserId
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
        },
        (err) => {
          console.log('FAILED...', err);
        }
      );
  };

  return (
    <div className='contactForm'>
      <form onSubmit={handelSubmit} name='contactMessage'>
        <label>
          Contact Me
          <textarea
            className='contactInputField'
            placeholder={`Would you like to contact me?\nPlease, send me message and I will reply you in the next couple of days.`}
            onChange={handleChange}>
            {value}
          </textarea>
        </label>
        <SubmitButton />
      </form>
    </div>
  );
};

export default ContactForm;
