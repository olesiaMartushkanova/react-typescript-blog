import { MEDIA_QUERY_SIZE } from '../../utils/constants';
import { useMediaQueryHook } from '../../utils/hooks/useMediaQuery';
import MainButton, { IMainButton } from '../MainButton/MainButton';

const MediumButton = (props: IMainButton) => {
  const isPageWide = useMediaQueryHook(MEDIA_QUERY_SIZE.mobile);

  const { path } = props;

  const buttonHandler = () => {
    window.open(path, '_blank');
  };

  return (
    <MainButton
      onClick={buttonHandler}
      text='Medium'
      size={isPageWide ? 'sm' : 'lg'}></MainButton>
  );
};

export default MediumButton;
