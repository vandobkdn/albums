import Album from './album';
import { useAppContext } from './context';

export default function () {
  const {
    state: { albums },
    selectAlbum,
  } = useAppContext();

  const travelAlbums = albums.filter((album) => album.type === 'travel');
  return (
    <main className="grid gap-x-4 gap-y-20 xs:gap-y-5 sm:gap-y-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {travelAlbums.map((album, index) => (
        <Album key={index} {...album} onSelect={() => selectAlbum(album)} />
      ))}
    </main>
  );
}
