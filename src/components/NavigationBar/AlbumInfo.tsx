import { useAppContext } from '../../context';

export const AlbumInfo = () => {
  const { chosenAlbum } = useAppContext().state;
  let children = <h2 className="text-black">My Albums</h2>;
  if (chosenAlbum) {
    children = (
      <div id="album-info" className="text-black leading-8 md:w-full">
        <h2>
          <strong>Album: </strong> {chosenAlbum?.name}
        </h2>
        {/* <h6>Ngày tạo: {chosenAlbum?.createdAt}</h6>
        <h6>Sonny A6400 📸 📸 📸</h6>
        <p className="border-2 min-h-[6em] rounded-md px-2">
          {chosenAlbum?.bio}
        </p> */}
      </div>
    );
  }

  return (
    <div className="h-[4em] px-4 bg-white">
      <nav className="h-full">{children}</nav>
    </div>
  );
};
