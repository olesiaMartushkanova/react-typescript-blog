import * as dotenv from 'dotenv';

dotenv.config();

export const ENV_KEY = {
  emailServiceId: process.env.REACT_APP_EMAIL_SERVICE_ID as string,
  emailTemplateId: process.env.REACT_APP_EMAIL_TEMPLATE_ID as string,
  emailUserId: process.env.REACT_APP_EMAIL_USER_ID as string,
  downloadCvFeature: process.env.REACT_APP_DOWNLOAD_CV !== 'false',
  hundredDaysButton: process.env.REACT_APP_HUNDRED_DAYS_BUTTON !== 'false',
  mediumButton: process.env.REACT_APP_MEDIUM_BUTTON !== 'false',
};
