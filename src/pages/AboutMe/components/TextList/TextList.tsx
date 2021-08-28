import TextListItem, { TextListItemType } from './components/TextListItem';

interface IList {
  list: Array<TextListItemType>;
  className?: string;
}

const TextList = (props: IList) => {
  const { className, list } = props;

  return (
    <div className={className}>
      <TextListItem props={list} displayIcon={true} />
    </div>
  );
};

export default TextList;
