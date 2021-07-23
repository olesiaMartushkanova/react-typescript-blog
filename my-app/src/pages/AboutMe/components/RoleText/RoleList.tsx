import RoleListItem from './components/RoleListItem';

interface IRoleList {
  list: Array<string>;
  className?: string;
}

const RoleList = (props: IRoleList) => {
  const { className, list } = props;

  return (
    <div className={className}>
      <RoleListItem props={list} />
    </div>
  );
};

export default RoleList;
