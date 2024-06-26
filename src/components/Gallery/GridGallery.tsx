import { useAppContext } from '../../context';

export const GridGallery = () => {
  const {
    state: { chosenAlbum },
    selectImage,
  } = useAppContext();

  return (
    <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-1 gap-y-2">
      {chosenAlbum?.photos.map((url, index) => (
        <div
          key={index}
          className="relative overflow-hidden flex justify-center items-center w-[22em] h-[20em] md:w-[16em]"
        >
          <img
            src={url}
            alt={chosenAlbum.name}
            className="object-cover h-full w-full"
            onClick={() => selectImage(url)}
          />
        </div>
      ))}
    </div>
  );
};
