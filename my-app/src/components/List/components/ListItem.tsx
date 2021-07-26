const ListItem = ({ props }: any) => {
  return props.map((listItem: any) => (
    <ul key={listItem}>
      <li>{listItem}</li>
    </ul>
  ));
};

export default ListItem;
