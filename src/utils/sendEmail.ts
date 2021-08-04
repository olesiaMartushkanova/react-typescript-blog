import emailjs from 'emailjs-com';
import { ENV_KEY } from './env';

export const sendEmail = (target: any) => {
  emailjs
    .sendForm(
      ENV_KEY.emailServiceId,
      ENV_KEY.emailTemplateId,
      target,
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
};
