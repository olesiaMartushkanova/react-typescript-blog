import './ContactForm.css';
import SendButton from './SendButton';
import { useForm } from 'react-hook-form';
import { sendEmail } from '../../utils/sendEmail';

interface IContactForm {
  value?: string;
  className?: string;
}

type FormValues = {
  name: string;
  email: string;
  message: string;
};

const ContactForm = (props: IContactForm) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues, e: any) => {
    console.log(data);
    e.preventDefault();
    sendEmail(e.target);
    e.target.reset();
  };

  return (
    <div className={`contactFormContainer ${props.className}`}>
      <label>Contact Me</label>
      <div>
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register('name', {
              required: 'Please, leave your name.',
              maxLength: 26,
              minLength: 2,
            })}
            type='text'
            placeholder='Your Name'
            id='name'
            name='name'
            className='input contactField'
          />
          {errors.name && <p className='error'>{errors.name.message}</p>}
          {errors.name && <p className='error'>{errors.name.message}</p>}

          <input
            {...register('email', { required: 'please, leave your email.' })}
            placeholder='Your Email address'
            id='email'
            name='email'
            type='email'
            className='input contactField email'
          />
          {errors.email && <p className='error'>{errors.email.message}</p>}

          <textarea
            {...register('message')}
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
