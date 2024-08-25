import { View } from '../../primitives';
import { useAppContext } from '../../context';
import useLoadImages from '../../hooks/useLoadImages';
import { ImageLoader, LoadedImage } from '../Images';

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
    <View className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-1 gap-y-2">
      {loadedImageUrls.map((url, index) => (
        <LoadedImage
          key={index}
          src={url}
          className="mx-auto relative overflow-hidden flex justify-center items-center w-[22em] h-[20em] md:w-[16em]"
          onSelect={() => selectImage(url)}
        />
      ))}
      {isLoading && <ImageLoader />}
    </View>
  );
};
