import { message } from 'antd';

export default (content, type = 'success', duration = 3) => {
  let displayMessage = content;

  if (!content && type === 'error') {
    displayMessage = 'Something went wrong!';
  }
  message[type](displayMessage, duration);
};
