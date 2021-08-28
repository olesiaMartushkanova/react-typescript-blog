import LinkListItem, { ILinkListItem } from './components/LinkListItem';

const LinkList = ({ props }: any) => {
  return props.map((linkListItem: ILinkListItem) => (
    <div key={linkListItem.id}>
      <LinkListItem
        id={linkListItem.id}
        title={linkListItem.title}
        path={linkListItem.path}
        style={linkListItem.style}
      />
    </div>
  ));
};

export default LinkList;
