import { useHistory } from 'react-router-dom';
import MainButton, { IMainButton } from '../../../MainButton/MainButton';

interface IMediumButton extends IMainButton {
  openInNewTab?: boolean;
}

const MediumButton = (props: IMediumButton) => {
  const { path, text, openInNewTab } = props;

  const history = useHistory();

  const buttonHandler = () => {
    if (openInNewTab) {
      window.open(path, '_blank');
    } else {
      history.push(path || '/');
    }
  };

  return <MainButton onClick={buttonHandler} text={text}></MainButton>;
};

export default MediumButton;
