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

  const nameFocusHandler = () => {
    setNameError('');
  };

  const emailFocusHandler = () => {
    setEmailError('');
  };

  const messageFocusHandler = () => {
    setMessageError('');
  };

  const onSubmit = (e: any) => {
    setSuccessMessage('');
    e.preventDefault();

    let isValid: boolean = true;

    if (enteredName === '' || enteredName.length <= 1) {
      setNameError('Please, leave your full name');
      isValid = false;
    }

    if (enteredName.length > 26) {
      setNameError(`Sorry, name can't be more than 26 characters.`);
      isValid = false;
    }

    if (enteredEmail === '' || !validator.isEmail(enteredEmail)) {
      setEmailError('Please, leave your valid email address');
      isValid = false;
    }

    if (enteredMessage === '') {
      setMessageError('Please, leave your message');
      isValid = false;
    }

    if (enteredName === '' && enteredEmail === '' && enteredMessage === '') {
      setMessageError(`Please, feel the form if you want to send me a message`);
      isValid = false;
    }

    if (isValid) {
      sendEmail(e.target);
      e.target.reset();

      setSuccessMessage(
        `Thank you for your message!\nI will reply you as soon as I can!`
      );
      setEnteredName('');
      setEnteredEmail('');
      setEnteredMessage('');
    }
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
            className={
              nameError
                ? 'input contactField errorBorder'
                : 'input contactField successBorder'
            }
            value={enteredName}
            onChange={nameChangeHandler}
            onFocus={nameFocusHandler}
          />
          {nameError && <div className='error'>{nameError}</div>}

          <input
            id='email'
            name='email'
            type='email'
            placeholder='Your Email address'
            className={
              emailError
                ? 'input contactField email errorBorder'
                : 'input contactField email successBorder'
            }
            value={enteredEmail}
            onChange={emailChangeHandler}
            onFocus={emailFocusHandler}
          />
          {emailError && <div className='error'>{emailError}</div>}

          <textarea
            id='message'
            name='message'
            className={
              messageError
                ? 'input message errorBorder'
                : 'input message successBorder'
            }
            placeholder='Do you want to contact me?'
            value={enteredMessage}
            onChange={messageChangeHandler}
            onFocus={messageFocusHandler}></textarea>
          {messageError && <div className='error'>{messageError}</div>}
          {successMessage && (
            <div className='successMessage'>{successMessage}</div>
          )}

          <SendButton />
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
