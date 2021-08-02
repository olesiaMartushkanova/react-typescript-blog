import ListItem, { ListItemType } from './components/ListItem';

interface IList {
  list: Array<ListItemType>;
  className?: string;
}

const List = (props: IList) => {
  const { className, list } = props;

  return (
    <div className={className}>
      <ListItem props={list} displayIcon={true} />
    </div>
  );
};

export default List;
