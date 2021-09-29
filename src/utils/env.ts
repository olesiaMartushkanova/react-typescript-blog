import * as dotenv from 'dotenv';

dotenv.config();

export const ENV_KEY = {
  emailServiceId: process.env.REACT_APP_EMAIL_SERVICE_ID as string,
  emailTemplateId: process.env.REACT_APP_EMAIL_TEMPLATE_ID as string,
  emailUserId: process.env.REACT_APP_EMAIL_USER_ID as string,
};
