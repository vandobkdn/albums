import { useEffect, useRef } from 'react';
import { useAppContext } from '../../context';
import useLoadImages from '../../hooks/useLoadImages';

export const CarouselGallery = () => {
  const {
    state: { chosenImage, chosenAlbum },
    selectImage,
  } = useAppContext();

  const loadedPhotos = useLoadImages({ imageUrls: chosenAlbum?.photos || [] });

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
    <div className="p-4 flex gap-8 md:gap-16 flex-col justify-center pc:flex-row pc:justify-start xl:justify-start">
      <div id="imageList" className='xl:mx-auto mobile:my-auto'>
        <div className="mobile:h-[40em] xs:h-[30em] ipPro:h-[38em] tablet:h-[44em] pc:h-[30em] xl:h-[28em] xl:w-[48em]">
          <img
            src={chosenImage}
            alt={chosenImage}
            className="object-cover h-full w-full"
          />
        </div>

        <div
          id="gallery"
          className="gallery mt-4 h-[5em] xl:w-[48em]"
          ref={imgRef}
        >
          {loadedPhotos.map((imgUrl: string, index: number) => (
            <img key={index} src={imgUrl} onClick={() => selectImage(imgUrl)} />
          ))}
        </div>
      </div>
    </div>
  );
};
