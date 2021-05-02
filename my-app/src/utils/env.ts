import * as dotenv from 'dotenv';

dotenv.config();

const emailServiceId = process.env.EMAIL_SERVICE_ID as string;
const emailTemplateId = process.env.EMAIL_TEMPLATE_ID as string;
const emailUserId = process.env.EMAIL_USER_ID as string;

export const ENV_KEY = {
  emailServiceId,
  emailTemplateId,
  emailUserId,
};
