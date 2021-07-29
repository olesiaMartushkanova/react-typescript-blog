const ListItem = ({ props }: any) => {
  return props.map((listItem: any) => (
    <ul key={listItem}>
      <li>
        {listItem}
        {/* TODO: add icon as optional parameter here */}
      </li>
    </ul>
  ));
};

export default ListItem;
