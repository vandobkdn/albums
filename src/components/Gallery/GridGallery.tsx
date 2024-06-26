import { useAppContext } from '../../context';

export const GridGallery = () => {
  const { chosenAlbum } = useAppContext().state;

  const images = Array(chosenAlbum?.size)
    .fill('')
    .map((_, index) => `albums/${chosenAlbum?.album}/${index}.jpg`);

  return (
    <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-2">
      {images.map((image, index) => (
        <div
          key={index}
          className="relative overflow-hidden flex justify-center items-center w-[22em] h-[20em] md:w-[16em]"
        >
          <img
            src={image}
            alt={image}
            className="object-cover max-h-full max-w-full"
          />
        </div>
      ))}
    </div>
  );
};
