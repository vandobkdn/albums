import { Image } from '../Image';
import { useAppContext } from '../../context';
import useLoadImages from '../../hooks/useLoadImages';
import SkeletonLoader from '../ImageLoader';

export const GridGallery = () => {
  const {
    state: { chosenAlbum },
    selectImage,
  } = useAppContext();

  const { loadedImageUrls, isLoading } = useLoadImages({
    imageUrls: chosenAlbum?.photos || [],
    limit: 2,
  });

  return (
    <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-1 gap-y-2">
      {loadedImageUrls.map((url, index) => (
        <Image
          key={index}
          imgSource={url}
          coverImageClassName="mx-auto relative overflow-hidden flex justify-center items-center w-[22em] h-[20em] md:w-[16em]"
          onSelect={() => selectImage(url)}
        />
      ))}
      {isLoading && <SkeletonLoader />}
    </div>
  );
};
