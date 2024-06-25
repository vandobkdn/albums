import { Icon, Icons } from '../Icon';
import { useAppContext } from '../../context';

export const SideBar = () => {
  const {
    state: { albums },
    setIsOpenNavBar,
  } = useAppContext();
  const travels = albums.filter((album) => album.type === 'travel');

  return (
    <div className={`fixed inset-0 bg-gray-900 bg-opacity-50 z-50`}>
      <div className="bg-white h-full w-[300px]">
        <header className="h-[44px] w-full px-4 flex items-center justify-end">
          <button onClick={() => setIsOpenNavBar(false)}>
            <Icon icon={Icons.Close} classNames={`text-black`} />
          </button>
        </header>

        <div className="p-2">
          <h2 className="text-black text-md">My Albums</h2>
          <ul className="">
            {travels.map((item) => (
              <li
                className={`flex gap-2 items-center px-6 py-1 text-sm hover:cursor-pointer hover:bg-header hover:rounded-md`}
              >
                <Icon icon={Icons.AlbumIcon} classNames="text-blue" />
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
