import validator from 'validator';
import { useState, useRef } from 'react';
import './ContactForm.css';
import SendButton from './SendButton';
import { sendEmail } from '../../utils/sendEmail';

interface IContactForm {
  value?: string;
  className?: string;
}

const ContactForm: React.FC<IContactForm> = (props) => {
  const nameInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const messageInputRef = useRef<HTMLTextAreaElement>(null);

  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [messageError, setMessageError] = useState('');

  const [successMessage, setSuccessMessage] = useState('');

  const nameFocusHandler = () => {
    setNameError('');
    setSuccessMessage('');
  };

  const emailFocusHandler = () => {
    setEmailError('');
    setSuccessMessage('');
  };

  const messageFocusHandler = () => {
    setMessageError('');
    setSuccessMessage('');
  };

  const onSubmit = (e: any) => {
    setSuccessMessage('');
    e.preventDefault();

    let enteredName = nameInputRef.current?.value as string;
    let enteredEmail = emailInputRef.current?.value as string;
    let enteredMessage = messageInputRef.current?.value as string;

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

      // Resetting input fields
      enteredName = '';
      enteredEmail = '';
      enteredMessage = '';
    }
  };

  return (
    <section className={`form-container__contact ${props.className}`}>
      <label className='formLabel'>Contact Me</label>
      <>
        <form noValidate onSubmit={onSubmit}>
          <input
            type='text'
            placeholder='Your Name'
            id='name'
            name='name'
            ref={nameInputRef}
            className={
              nameError
                ? 'text-field input__contact-field invalid'
                : 'text-field input__contact-field'
            }
            onFocus={nameFocusHandler}
          />
          {nameError && <div className='text__error'>{nameError}</div>}

          <input
            id='email'
            name='email'
            type='email'
            placeholder='Your Email address'
            className={
              emailError
                ? 'text-field input__contact-field input__contact-field--email invalid'
                : 'text-field input__contact-field input__contact-field--email'
            }
            ref={emailInputRef}
            onFocus={emailFocusHandler}
          />
          {emailError && <div className='text__error'>{emailError}</div>}

          <textarea
            id='message'
            name='message'
            ref={messageInputRef}
            className={
              messageError
                ? 'text-field textarea__message invalid'
                : 'text-field textarea__message'
            }
            placeholder='Do you want to contact me?'
            onFocus={messageFocusHandler}></textarea>
          {messageError && <div className='text__error'>{messageError}</div>}
          {successMessage && (
            <div className='text__success'>{successMessage}</div>
          )}

          <SendButton />
        </form>
      </>
    </section>
  );
};

export default ContactForm;
