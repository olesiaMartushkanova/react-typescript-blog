import './ContactForm.css';
import emailjs from 'emailjs-com';
import { ENV_KEY } from '../../../utils/env';
import SubmitButton from './SubmitButton';
import Input from '../../common/Input';

interface IContactForm {
  className?: string;
}

const ContactForm = ({ className }: IContactForm) => {
  const sendEmail = (e: any) => {
    e.preventDefault();
    emailjs
      .send(
        ENV_KEY.emailServiceId,
        ENV_KEY.emailTemplateId,
        e.target.value,
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
    e.target.reset();
  };

  return (
    <div className={`contactFormContainer ${className}`}>
      <label>Contact Me</label>
      <div>
        <form onSubmit={sendEmail}>
          <Input
            type='text'
            className='contactField'
            placeholder='Leave your name, please.'
            name='from_name'
          />
          <Input
            type='email'
            className='contactField email'
            placeholder={`Enter your email, please.`}
            name='email_address'
          />
          <Input
            type='text'
            className='contactMessage'
            placeholder={`Please, send me message\n and I will reply you in the next couple of days.`}
            name='contact_message'
          />
          <Input type='submit' value='Send message' />
          {/* <SubmitButton /> */}
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
