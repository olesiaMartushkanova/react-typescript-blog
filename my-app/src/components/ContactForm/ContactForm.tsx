import { useState } from 'react';
import './ContactForm.css';
import SendButton from './SendButton';
import { sendEmail } from '../../utils/sendEmail';
import validator from 'validator';

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

  const [successMessage, setSuccessMessage] = useState('');

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

    if (enteredName === '' || enteredName.length <= 1) {
      setNameError('Please, leave your full name');
    }

    if (enteredName.length > 26) {
      setNameError(`Sorry, name can't be more than 26 characters.`);
    }

    if (enteredEmail === '' || !validator.isEmail(enteredEmail)) {
      setEmailError('Please, leave your valid email address');
    }

    if (enteredMessage === '') {
      setMessageError('Please, leave your message');
    }

    if (nameError === '' && emailError === '' && messageError === '') {
      // sendEmail(e.target);
      console.log('Sent!');
      setSuccessMessage(
        `Thank you for your message!\nI will reply you as soon as I can!`
      );
      e.target.reset();
    }

    if (enteredName === '' && enteredEmail === '' && enteredMessage === '') {
      setNameError('');
      setEmailError('');
      setMessageError(`Please, feel the form if you want to send me a message`);
    }

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
            placeholder='Do you want to contact me?'
            value={enteredMessage}
            onChange={messageChangeHandler}></textarea>
          {messageError && <p className='error'>{messageError}</p>}
          {successMessage && <p className='successMessage'>{successMessage}</p>}

          <SendButton />
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
