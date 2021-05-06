import './ContactForm.css';
import emailjs from 'emailjs-com';
import { ENV_KEY } from '../../../utils/env';
import SubmitButton from './SubmitButton';
import Input from '../../common/Input';

const ContactForm = () => {
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
        <Input
          type='text'
          className='contactField'
          placeholder='Leave your name, please.'></Input>
        <Input
          type='email'
          className='contactField email'
          placeholder={`Enter your email, please.`}
          name='email_address'></Input>
        <Input
          type='text'
          className='contactMessage'
          placeholder={`Please, send me message and I will reply you in the next couple of days.`}
          name='contact_message'></Input>
        <SubmitButton />
      </form>
    </div>
  );
};

export default ContactForm;
