import showMessage from '../utils/message';
import { action } from './index';

export const showAlertMessage = (text, type = 'success') =>
  action('SHOW_ALERT_MESSAGE', showMessage(text, type));
