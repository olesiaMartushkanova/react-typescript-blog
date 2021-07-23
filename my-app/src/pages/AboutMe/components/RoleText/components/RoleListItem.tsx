export interface IRoleListItem {
  id: string;
  list: Array<string>;
}

const RoleListItem = ({ props }: any) => {
  return props.map((listItem: IRoleListItem) => (
    <ul key={listItem.id}>
      <li>{listItem.list}</li>
    </ul>
  ));
};

export default RoleListItem;
