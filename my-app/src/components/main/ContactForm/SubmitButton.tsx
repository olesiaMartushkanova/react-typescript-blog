import Button from '@material-ui/core/Button';
import './ContactForm.css';
import Send from '@material-ui/icons/Send';
import green from '@material-ui/core/colors/green';

const SubmitButton = () => {
  // This is not working
  const primary = green[600] as any;

  return (
    <div>
      <Button
        className='submitButton'
        color='primary'
        variant='contained'
        endIcon={<Send>Send</Send>}
        size='medium'>
        Send
      </Button>
    </div>
  );
};

export default SubmitButton;
