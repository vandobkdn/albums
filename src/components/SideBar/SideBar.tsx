import { Icon, Icons } from '../Icon';
import { useAppContext } from '../../context';
import { View, Clickable, Text } from '../../primitives';

export const SideBar = () => {
  const {
    state: { albums, chosenAlbum },
    setIsOpenNavBar,
    selectAlbum,
  } = useAppContext();

  const travelAlbums = albums.filter((album) => album.type === 'travel');

  return (
    <View className={`fixed inset-0 bg-gray-900 bg-opacity-50 z-50`}>
      <View className="bg-white h-full w-[300px]">
        <header className="h-[44px] w-full px-4 flex items-center justify-end">
          <Clickable onClick={() => setIsOpenNavBar(false)}>
            <Icon icon={Icons.Close} classNames={`text-black`} />
          </Clickable>
        </header>

        <View className="p-2">
          <Text tag="h2" className="text-black text-md">
            My Albums
          </Text>
          <ul className="">
            {travelAlbums.map((album) => (
              <li
                key={album.name}
                className={`${chosenAlbum?.name === album.name ? `bg-header rounded-md` : ``} flex gap-2 items-center justify-between px-6 py-1 text-sm hover:cursor-pointer hover:bg-header hover:rounded-md`}
                onClick={() => {
                  selectAlbum(album);
                  setIsOpenNavBar(false);
                }}
              >
                <View tag="span" className="flex gap-2 items-center">
                  <Icon icon={Icons.AlbumIcon} classNames="text-blue" />{' '}
                  {album.name}
                </View>

                <Text
                  tag="small"
                  className="text-xs text-black"
                >{`${album.photos.length} items`}</Text>
              </li>
            ))}
          </ul>
        </View>
      </View>
    </View>
  );
};
