import Button from '@material-ui/core/Button';
import './SubmitButton.css';
import Send from '@material-ui/icons/Send';
import green from '@material-ui/core/colors/green';

const SubmitButton = () => {
  return (
    <div>
      <Button
        className='submitButton contactStyle'
        color='primary'
        variant='contained'
        endIcon={<Send>Send</Send>}
        size='medium'
        type='submit'>
        Send
      </Button>
    </div>
  );
};

export default SubmitButton;
