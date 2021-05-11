import './ContactForm.css';
import SendButton from './SendButton';
import Input from '../Input/Input';
import { useForm, Controller } from 'react-hook-form';
import { ENV_KEY } from '../../utils/env';
import emailjs from 'emailjs-com';

export type FormValues = {
  email: string;
  name: string;
  message: string;
};

interface IContactForm {
  value?: string;
  className?: string;
}

const ContactForm = (props: IContactForm) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValues>();

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

  const handleSubmitForm = (data: FormValues) => console.log(data);

  return (
    <div className={`contactFormContainer ${props.className}`}>
      <label>Contact Me</label>
      <div>
        <form noValidate onSubmit={handleSubmit(handleSubmitForm)}>
          <Controller
            rules={{ required: 'Please, leave your name.' }}
            control={control}
            name='name'
            render={({ field }) => (
              <Input
                {...field}
                placeholder='Your Name'
                id='name'
                name='name'
                className='contactField'
              />
            )}></Controller>
          {errors.name && <p>{errors.name.message}</p>}

          <Controller
            rules={{ required: 'Please, leave your email,' }}
            control={control}
            name='email'
            render={({ field }) => (
              <Input
                {...field}
                placeholder='Your Email address'
                id='email'
                name='email'
                type='email'
                className='contactField email'
              />
            )}></Controller>
          {errors.email && <p>{errors.email.message}</p>}

          <textarea
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
