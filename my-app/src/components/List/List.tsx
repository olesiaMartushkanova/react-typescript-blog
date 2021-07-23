import ListItem from './components/ListItem';

interface IRoleList {
  list: Array<string>;
  className?: string;
}

const RoleList = (props: IRoleList) => {
  const { className, list } = props;

  return (
    <div className={className}>
      <ListItem props={list} />
    </div>
  );
};

export default RoleList;
