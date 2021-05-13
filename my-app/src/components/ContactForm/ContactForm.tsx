import { SyntheticEvent, useState } from 'react';
import './ContactForm.css';
import SendButton from './SendButton';
import { sendEmail } from '../../utils/sendEmail';

interface IContactForm {
  value?: string;
  className?: string;
}

const ContactForm = (props: IContactForm) => {
  const [formData, setFormData] = useState({} as any);
  const [formErrors, setFormErrors] = useState({} as any);

  const onSubmit = (e: any) => {
    e.preventDefault();

    const newFormErrors: any = {};
    if (!formData['name']) {
      newFormErrors['name'] = 'Please, leave your name';
    }

    if (!formData['email']) {
      newFormErrors['email'] = 'Please, leave your email';
    }

    if (!formData['message']) {
      newFormErrors['message'] = 'Please, leave your message';
    }

    if (Object.keys(newFormErrors).length === 0) {
      // sendEmail(e.target);
      e.target.reset();
      setFormData({});
      console.log('Sent');
    }

    setFormErrors(newFormErrors);
  };

  const setFormValue = (name: string, event: any) => {
    const newFormData = formData;
    newFormData[name] = event.target.value;
    setFormData(newFormData);
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
            onChange={(event) => setFormValue('name', event)}
          />
          {formErrors['name'] && <p className='error'>{formErrors['name']}</p>}

          <input
            id='email'
            name='email'
            type='email'
            placeholder='Your Email address'
            className='input contactField email'
            onChange={(event) => setFormValue('email', event)}
          />
          {formErrors['email'] && (
            <p className='error'>{formErrors['email']}</p>
          )}

          <textarea
            id='message'
            name='message'
            className='message'
            placeholder={`If you send me a message\nI will reply you in the next couple of days.`}
            onChange={(event) => setFormValue('message', event)}></textarea>
          {formErrors['message'] && (
            <p className='error'>{formErrors['message']}</p>
          )}

          <SendButton />
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
