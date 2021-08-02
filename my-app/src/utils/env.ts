import * as dotenv from 'dotenv';

dotenv.config();

const emailServiceId = process.env.REACT_APP_EMAIL_SERVICE_ID as string;
const emailTemplateId = process.env.REACT_APP_EMAIL_TEMPLATE_ID as string;
const emailUserId = process.env.REACT_APP_EMAIL_USER_ID as string;
const downloadCvFeature = process.env.REACT_APP_DOWNLOAD_CV !== 'false';
const hundredDaysButton = process.env.REACT_APP_HUNDRED_DAYS_BUTTON !== 'false';

export const ENV_KEY = {
  emailServiceId,
  emailTemplateId,
  emailUserId,
  downloadCvFeature,
  hundredDaysButton,
};
