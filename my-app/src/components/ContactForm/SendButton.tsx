import Button from '@material-ui/core/Button';
import './SendButton.css';
import Send from '@material-ui/icons/Send';
import green from '@material-ui/core/colors/green';

const SendButton = () => {
  const primary = green[600] as any;
  return (
    <Button
      className='button__send'
      color='primary'
      variant='contained'
      endIcon={<Send>Send</Send>}
      size='medium'
      type='submit'>
      Send
    </Button>
  );
};

export default SendButton;
