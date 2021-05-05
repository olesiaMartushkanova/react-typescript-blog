import './ContactForm.css';
import { useState } from 'react';
import emailjs from 'emailjs-com';
import { ENV_KEY } from '../../../utils/env';
import SubmitButton from './SubmitButton';
import Form from '../../common/Form';

const ContactForm = () => {
  const [value, setValue] = useState();

  const handleChange = (event: any) => {
    setValue(event.target.value);
  };

  const handelSubmit = (event: any) => {
    event.preventDefault();
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
    <div className='contactFormContainer'>
      Contact Me
      <form onSubmit={handelSubmit}>
        <Form
          name='email'
          className='contactField'
          placeholder={'Please, leave your email'}></Form>
        <Form
          name='name'
          className='contactField'
          placeholder={'Please, leave your name'}></Form>
        <Form
          name='contactMessage'
          className='contactMessage'
          placeholder={`Would you like to contact me?\nPlease, send me message and I will reply you in the next couple of days.`}
          onChange={handleChange}
          value={value}></Form>
        <SubmitButton />
      </form>
    </div>
  );
};

export default ContactForm;
