import { useAppContext } from '../../context';

import { Thumbnail } from './Thumbnail';

export default () => {
  const {
    state: { albums },
    selectAlbum,
  } = useAppContext();

  const travelAlbums = albums.filter((album) => album.type === 'travel');

  //   gap-x-4 gap-y-20 xs:gap-y-5 sm:gap-y-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4

  return (
    <div className="grid place-content-center gap-y-20 grid-cols-6 xs:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4">
      {travelAlbums.map(({ album, name, size }, index) => (
        <Thumbnail
          key={index}
          size={size}
          name={name}
          coverImage={`albums/${album}/0.jpg`}
        />
      ))}
    </div>
  );
};
