import validator from 'validator';
import { useState } from 'react';
import './ContactForm.css';
import SendButton from './SendButton';
import { sendEmail } from '../../utils/sendEmail';

interface IContactForm {
  value?: string;
  className?: string;
}

const ContactForm = (props: IContactForm) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [messageError, setMessageError] = useState('');

  const [successMessage, setSuccessMessage] = useState('');

  const nameChangeHandler = (e: React.FormEvent<EventTarget>) => {
    const target = e.target as HTMLInputElement;
    setName(target.value);
  };

  const emailChangeHandler = (e: React.FormEvent<EventTarget>) => {
    const target = e.target as HTMLInputElement;
    setEmail(target.value);
  };

  const messageChangeHandler = (e: React.FormEvent<EventTarget>) => {
    const target = e.target as HTMLInputElement;
    setMessage(target.value);
  };

  const nameFocusHandler = () => setNameError('');

  const emailFocusHandler = () => setEmailError('');

  const messageFocusHandler = () => setMessageError('');

  const onSubmit = (e: any) => {
    setSuccessMessage('');
    e.preventDefault();

    let isValid: boolean = true;

    if (name === '' || name.length <= 1) {
      setNameError('Please, leave your full name');
      isValid = false;
    }

    if (name.length > 26) {
      setNameError(`Sorry, name can't be more than 26 characters.`);
      isValid = false;
    }

    if (email === '' || !validator.isEmail(email)) {
      setEmailError('Please, leave your valid email address');
      isValid = false;
    }

    if (message === '') {
      setMessageError('Please, leave your message');
      isValid = false;
    }

    if (name === '' && email === '' && message === '') {
      setMessageError(`Please, feel the form if you want to send me a message`);
      isValid = false;
    }

    if (isValid) {
      sendEmail(e.target);
      e.target.reset();

      setSuccessMessage(
        `Thank you for your message!\nI will reply you as soon as I can!`
      );
      setName('');
      setEmail('');
      setMessage('');
    }
  };

  return (
    <div className={`contactFormContainer ${props.className}`}>
      <label className='formLabel'>Contact Me</label>
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
            value={name}
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
            value={email}
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
            value={message}
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
