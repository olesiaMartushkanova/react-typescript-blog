import MainButton, {
  IMainButton,
} from '../../../../components/MainButton/MainButton';

const ReadMyStoryButton = (props: IMainButton) => {
  const { path, className } = props;

  const buttonHandler = () => {
    window.open(path, '_blank');
  };

  return (
    <MainButton
      className={className}
      onClick={buttonHandler}
      text='Read my story'></MainButton>
  );
};

export default ReadMyStoryButton;
