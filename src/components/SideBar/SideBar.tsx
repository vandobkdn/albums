import { Icon, Icons } from '../Icon';
import { useAppContext } from '../../context';

export const SideBar = () => {
  const {
    state: { albums, chosenAlbum },
    setIsOpenNavBar,
    selectAlbum,
  } = useAppContext();
  const travelAlbums = albums.filter((album) => album.type === 'travel');

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
            {travelAlbums.map((album) => (
              <li
                className={`${chosenAlbum?.name === album.name ? `bg-header rounded-md` : ``} flex gap-2 items-center justify-between px-6 py-1 text-sm hover:cursor-pointer hover:bg-header hover:rounded-md`}
                onClick={() => {
                  selectAlbum(album);
                  setIsOpenNavBar(false);
                }}
              >
                <span className="flex gap-2 items-center">
                  <Icon icon={Icons.AlbumIcon} classNames="text-blue" />{' '}
                  {album.name}
                </span>

                <small className="text-xs text-black">{`${album.photos.length} items`}</small>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
