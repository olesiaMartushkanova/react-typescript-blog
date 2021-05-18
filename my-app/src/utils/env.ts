import * as dotenv from 'dotenv';

dotenv.config();

const emailServiceId = process.env.REACT_APP_EMAIL_SERVICE_ID as string;
const emailTemplateId = process.env.REACT_APP_EMAIL_TEMPLATE_ID as string;
const emailUserId = process.env.REACT_APP_EMAIL_USER_ID as string;

export const ENV_KEY = {
  emailServiceId,
  emailTemplateId,
  emailUserId,
};
