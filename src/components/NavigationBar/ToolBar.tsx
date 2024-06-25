import { useAppContext } from '../../context';
import { Icon, Icons } from '../Icon';

export const ToolBar = () => {
  const {
    setIsOpenNavBar,
    state: { isOpenNavBar },
  } = useAppContext();

  return (
    <div className="flex gap-4 items-center">
      <button
        className="h-[2.6em] flex items-center"
        onClick={() => setIsOpenNavBar(!isOpenNavBar)}
      >
        <Icon icon={Icons.NavBar} classNames="text-blue" />
      </button>
    </div>
  );
};
