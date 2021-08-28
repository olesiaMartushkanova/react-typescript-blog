import { useHistory } from 'react-router-dom';
import './LinkListItem.css';

export interface ILinkListItem {
  id: string;
  title: string;
  path: string;
}

const LinkListItem = (props: ILinkListItem) => {
  const { title, path } = props;

  const history = useHistory();
  const linkItemClickHandler = () => {
    history.push(path || '/');
  };

  return (
    <div className='post-item' onClick={linkItemClickHandler}>
      {title}
      <a href={path}></a>
    </div>
  );
};
export default LinkListItem;
