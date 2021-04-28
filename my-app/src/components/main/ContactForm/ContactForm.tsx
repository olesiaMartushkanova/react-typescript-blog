import './ContactForm.css';
import SubmitButton from './SubmitButton';

const ContactForm = () => {
  return (
    <div className='contactForm'>
      Contact Me
      <div>
        <input className='inputField' type='text' />
        <SubmitButton />
      </div>
    </div>
  );
};

export default ContactForm;
