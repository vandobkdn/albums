import { useAppContext } from '../../context';

import { Thumbnail } from './Thumbnail';

export default () => {
  const {
    state: { albums },
    selectAlbum,
  } = useAppContext();

  const travelAlbums = albums.filter((album) => album.type === 'travel');

  return (
    <div className="grid place-content-center gap-y-20 grid-cols-6 xs:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4">
      {travelAlbums.map(album => (
        <Thumbnail key={album.name} {...album} onSelect={() => selectAlbum(album)} />
      ))}
    </div>
  );
};
