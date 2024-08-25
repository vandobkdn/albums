import { useEffect, useRef } from 'react';

import { View, ViewRef } from '../../primitives';
import { useAppContext } from '../../context';
import useLoadImages from '../../hooks/useLoadImages';

export const CarouselGallery = () => {
  const {
    state: { chosenImage, chosenAlbum },
    selectImage,
  } = useAppContext();

  const { loadedImageUrls } = useLoadImages({
    imageUrls: chosenAlbum?.photos || [],
    limit: 2,
  });

  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!imgRef.current || !imgRef.current.children) return;

    const imageList = imgRef.current.children;

    const image = imageList[0] as HTMLImageElement;
    imgRef.current.scrollTo({
      left: image?.offsetWidth * 3,
      behavior: 'smooth',
    });
  }, []);

  return (
    <View className="p-4 xs:p-[2px] flex gap-8 md:gap-16 flex-col justify-center pc:flex-row pc:justify-start xl:justify-start">
      <View attrs={{ id: 'imageList' }} className="xl:mx-auto mobile:my-auto">
        <View className="mobile:h-[30em] xs:h-[30em] ipPro:h-[30em] tablet:h-[44em] pc:h-[30em] xl:h-[28em] xl:w-[48em]">
          <img
            src={chosenImage}
            alt={chosenImage}
            className="object-cover h-full w-full"
          />
        </View>

        <ViewRef
          attrs={{ id: 'gallery' }}
          className="gallery mt-4 h-[5em] xl:w-[48em]"
          ref={imgRef}
        >
          {loadedImageUrls.map((imgUrl: string, index: number) => (
            <img key={index} src={imgUrl} onClick={() => selectImage(imgUrl)} />
          ))}
        </ViewRef>
      </View>
    </View>
  );
};
