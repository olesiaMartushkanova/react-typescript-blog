import { TESTER_ROLE_DESCRIPTION } from '../../../../utils/constants';
import RoleListItem from './components/RoleListItem';

interface IRoleList {
  title: string;
  classNameMain?: string;
  classNameTitle?: string;
}

const RoleList = (props: IRoleList) => {
  const { title, classNameMain, classNameTitle } = props;

  return (
    <div className={classNameMain}>
      <h4 className={classNameTitle}>{title}</h4>
      <RoleListItem props={TESTER_ROLE_DESCRIPTION} />
    </div>
  );
};

export default RoleList;
