import ListItem from './components/ListItem';

interface IList {
  list: Array<string>;
  className?: string;
}

const List = (props: IList) => {
  const { className, list } = props;

  return (
    <div className={className}>
      <ListItem props={list} />
    </div>
  );
};

export default List;
