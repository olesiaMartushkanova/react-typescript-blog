import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export type TextListItemType = {
  itemText: string;
  icon?: any;
};

const TextListItem = ({ props }: any) => {
  return props.map((listItem: TextListItemType) => (
    <ul
      key={listItem.itemText}
      style={{ display: 'flex', flexDirection: 'row', listStyle: 'none' }}>
      <FontAwesomeIcon
        style={{ marginRight: '7px' }}
        icon={listItem.icon}
        color='white'
      />
      <li>{listItem.itemText}</li>
    </ul>
  ));
};

export default TextListItem;
