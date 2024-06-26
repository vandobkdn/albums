import { Icon, Icons } from '../Icon';
import { useAppContext } from '../../context';

export const Header = () => {
  const {
    state: { albums, chosenAlbum },
    selectAlbum,
  } = useAppContext();

  const weddingAlbum = albums.filter(album => album.type === 'wedding')[0];

  const isWeddingActive = weddingAlbum.type === chosenAlbum?.type;

  const handleSelect = () => selectAlbum(weddingAlbum);

  return (
    <header className="h-full w-full px-4 flex items-center justify-between">
      <Icon icon={Icons.Logo} />
      <button
        aria-label="Hình cưới"
        onClick={handleSelect}
        className={`${isWeddingActive && 'text-blue rounded-md bg-gray-200'} text-black text-sm p-1 px-2 hover:rounded-md hover:bg-gray-200 hover:text-blue`}
      >
        Hình cưới
      </button>
    </header>
  );
};
