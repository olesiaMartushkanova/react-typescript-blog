import TextListItem, { TextListItemType } from './components/TextListItem';

interface IList {
  list: Array<TextListItemType>;
  className?: string;
}

const TextList = ({ className, list }: IList) => {
  return (
    <div className={className}>
      <TextListItem props={list} displayIcon={true} />
    </div>
  );
};

export default TextList;
