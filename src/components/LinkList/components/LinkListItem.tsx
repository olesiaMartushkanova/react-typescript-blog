import { CSSProperties } from 'react';
import { useHistory } from 'react-router-dom';
import './LinkListItem.css';

export interface ILinkListItem {
  id: string;
  title: string;
  path: string;
  style?: CSSProperties;
}

const LinkListItem = (props: ILinkListItem) => {
  const { title, path, style } = props;

  const history = useHistory();
  const linkItemClickHandler = () => {
    history.push(path || '/');
  };

  return (
    <div className='link-tem' onClick={linkItemClickHandler} style={style}>
      {title}
      <a href={path}></a>
    </div>
  );
};
export default LinkListItem;
