import { useAppContext } from '../../context';
import { View, Text } from '../../primitives';

export const AlbumInfo = () => {
  const { chosenAlbum } = useAppContext().state;
  let children = (
    <Text tag="h2" className="text-black">
      My Albums
    </Text>
  );

  if (chosenAlbum) {
    children = (
      <View
        attrs={{ id: 'album-info' }}
        className="xs:hidden sm:hidden md:flex gap-8 items-center justify-center h-full text-black text-sm leading-8 md:w-full"
      >
        <h6>Ngày tạo {chosenAlbum?.createdAt}</h6>
        <h6>Chụp bằng Sonny A6400 📸 📸 📸</h6>
        <h6>{chosenAlbum.photos.length} Hình</h6>
      </View>
    );
  }

  return (
    <View
      className={`h-[4em] ${!!chosenAlbum && 'xs:h-[1em] sm:h-[4em] md:h-[4em] lg:h-[4em] xl:h-[4em]'} px-4 bg-white`}
    >
      <View tag="nav" className="h-full">
        {children}
      </View>
    </View>
  );
};
