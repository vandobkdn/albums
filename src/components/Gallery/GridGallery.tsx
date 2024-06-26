import { Image } from '../Image';
import { useAppContext } from '../../context';
import useLoadImages from '../../hooks/useLoadImages';

export const GridGallery = () => {
  const {
    state: { chosenAlbum },
    selectImage,
  } = useAppContext();

  const loadedPhotos = useLoadImages({
    imageUrls: chosenAlbum?.photos || [],
    limit: 5,
  });

  return (
    <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-1 gap-y-2">
      {loadedPhotos.map((url, index) => (
        <Image
          key={index}
          imgSource={url}
          coverImageClassName="mx-auto relative overflow-hidden flex justify-center items-center w-[22em] h-[20em] md:w-[16em]"
          onSelect={() => selectImage(url)}
        />
        // <div
        //   key={index}
        //   className="relative overflow-hidden flex justify-center items-center w-[22em] h-[20em] md:w-[16em]"
        // >
        //   <img
        //     src={url}
        //     alt={chosenAlbum?.name}
        //     className="object-cover h-full w-full"
        //     onClick={() => selectImage(url)}
        //   />
        // </div>
      ))}
    </div>
  );
};
