import './ContactForm.css';
import emailjs from 'emailjs-com';
import { ENV_KEY } from '../../../utils/env';
import SubmitButton from './SubmitButton';
import Input from '../../common/Input';

interface IContactForm {
  value?: string;
  className?: string;
}

const ContactForm = (props: IContactForm) => {
  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        ENV_KEY.emailServiceId,
        ENV_KEY.emailTemplateId,
        e.target,
        ENV_KEY.emailUserId
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
        },
        (error) => {
          console.log('FAILED to send email...', error);
        }
      );

    e.target.reset();
  };

  return (
    <div className={`contactFormContainer ${props.className}`}>
      <label>Contact Me</label>
      <div>
        <form onSubmit={sendEmail}>
          <Input
            type='text'
            className='contactField'
            placeholder='Leave your name, please.'
            name='name'
          />
          <Input
            type='email'
            className='contactField email'
            placeholder={`Enter your email, please.`}
            name='email'
          />
          <textarea
            className='contactMessage'
            placeholder={`Please, send me message\n and I will reply you in the next couple of days.`}
            name='message'></textarea>
          <SubmitButton />
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
