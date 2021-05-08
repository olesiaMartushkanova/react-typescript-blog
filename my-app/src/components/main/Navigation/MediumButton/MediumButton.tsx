import { IMainButton } from '../../../../utils/types';
import MainButton from '../../../primitives/MainButton/MainButton';

const MediumButton = (props: IMainButton) => {
  const { path } = props;

  const buttonHandler = () => {
    window.open(path, '_blank');
  };

  return <MainButton onClick={buttonHandler} text='Medium'></MainButton>;
};

export default MediumButton;
