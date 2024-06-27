import { useAppContext } from '../../context';

export const AlbumInfo = () => {
  const { chosenAlbum } = useAppContext().state;
  let children = <h2 className="text-black">My Albums</h2>;

  if (chosenAlbum) {
    children = (
      <div
        id="album-info"
        className="xs:hidden md:flex gap-8 items-center justify-center h-full text-black text-sm leading-8 md:w-full"
      >
        <h6>Ngày tạo {chosenAlbum?.createdAt}</h6>
        <h6>Chụp bằng Sonny A6400 📸 📸 📸</h6>
        <h6>{chosenAlbum.photos.length} Hình</h6>
      </div>
    );
  }

  return (
    <div
      className={`h-[4em] ${!!chosenAlbum && 'xs:h-[1em] sm:h-[4em] md:h-[4em] lg:h-[4em] xl:h-[4em]'} px-4 bg-white`}
    >
      <nav className="h-full">{children}</nav>
    </div>
  );
};
