import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export type ListItemType = {
  itemText: string;
  icon?: any;
};

const ListItem = ({ props }: any) => {
  return props.map((listItem: ListItemType) => (
    <ul
      key={listItem.itemText}
      style={{ display: 'flex', flexDirection: 'row', listStyle: 'none' }}>
      <FontAwesomeIcon
        style={{ marginRight: '7px' }}
        icon={listItem.icon}
        color='black'
      />
      <li>{listItem.itemText}</li>
    </ul>
  ));
};

export default ListItem;
