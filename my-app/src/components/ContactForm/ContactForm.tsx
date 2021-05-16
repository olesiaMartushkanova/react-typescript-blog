import { SyntheticEvent, useState } from 'react';
import './ContactForm.css';
import SendButton from './SendButton';
import { sendEmail } from '../../utils/sendEmail';

interface IContactForm {
  value?: string;
  className?: string;
}

const ContactForm = (props: IContactForm) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredMessage, setEnteredMessage] = useState('');

  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [messageError, setMessageError] = useState('');
  const [formError, setFormError] = useState('');

  const nameChangeHandler = (e: React.FormEvent<EventTarget>) => {
    let target = e.target as HTMLInputElement;
    setEnteredName(target.value);
  };

  const emailChangeHandler = (e: React.FormEvent<EventTarget>) => {
    let target = e.target as HTMLInputElement;
    setEnteredEmail(target.value);
  };

  const messageChangeHandler = (e: React.FormEvent<EventTarget>) => {
    let target = e.target as HTMLInputElement;
    setEnteredMessage(target.value);
  };

  const onSubmit = (e: any) => {
    e.preventDefault();

    const enteredData = {
      name: enteredName,
      email: enteredEmail,
      message: enteredMessage,
    };
    console.log(enteredData);

    if (enteredName === '') {
      setNameError('Please, leave your name');
    }

    if (enteredEmail === '') {
      setEmailError('Please, leave your email');
    }

    if (enteredMessage === '') {
      setMessageError('Please, leave your message');
    }

    if (enteredName === '' && enteredEmail === '' && enteredMessage === '') {
      setNameError('');
      setEmailError('');
      setMessageError('');

      setFormError('All these fields are required. Please, fill them.');
    }

    sendEmail(e.target);
    e.target.reset();

    setEnteredName('');
    setEnteredEmail('');
    setEnteredMessage('');
  };

  return (
    <div className={`contactFormContainer ${props.className}`}>
      <label>Contact Me</label>
      <div>
        <form noValidate onSubmit={onSubmit}>
          <input
            type='text'
            placeholder='Your Name'
            id='name'
            name='name'
            className='input contactField'
            value={enteredName}
            onChange={nameChangeHandler}
          />
          {nameError && <p className='error'>{nameError}</p>}

          <input
            id='email'
            name='email'
            type='email'
            placeholder='Your Email address'
            className='input contactField email'
            value={enteredEmail}
            onChange={emailChangeHandler}
          />
          {emailError && <p className='error'>{emailError}</p>}

          <textarea
            id='message'
            name='message'
            className='message'
            placeholder={`If you send me a message\nI will reply you in the next couple of days.`}
            value={enteredMessage}
            onChange={messageChangeHandler}></textarea>
          {messageError && <p className='error'>{messageError}</p>}
          {formError && <p className='error'>{formError}</p>}

          <SendButton />
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
