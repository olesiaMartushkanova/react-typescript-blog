import './ContactForm.css';
import SendButton from './SendButton';
import Input from '../Input/Input';
import { useForm } from 'react-hook-form';
import { ENV_KEY } from '../../utils/env';
import emailjs from 'emailjs-com';

interface IContactForm {
  value?: string;
  className?: string;
}

type FormValues = {
  email: string;
  name: string;
  message: string;
};

const ContactForm = (props: IContactForm) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  console.log(errors);

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

  const onSubmit = (data: any) => console.log(data);

  return (
    <div className={`contactFormContainer ${props.className}`}>
      <label>Contact Me</label>
      <div>
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Input
            {...register('name', { required: 'Leave your name, please' })}
            placeholder='Your Name'
            id='name'
            name='name'
            className='contactField'
          />
          {errors.name && <p>{errors.name.message}</p>}
          <Input
            {...register('email', { required: 'Leave your email, please' })}
            placeholder='Your Email address'
            id='email'
            name='email'
            type='email'
            className='contactField email'
          />
          {errors.email && <p>{errors.email.message}</p>}

          <textarea
            {...register('message', { required: 'Please, leave your message' })}
            id='message'
            name='message'
            className='message'
            placeholder={`If you send me a message\nI will reply you in the next couple of days.`}></textarea>
          <SendButton />
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
