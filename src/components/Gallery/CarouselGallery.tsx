import { useEffect, useRef } from 'react';
import { useAppContext } from '../../context';

export const CarouselGallery = () => {
  const {
    state: { chosenImage, chosenAlbum },
    selectImage,
  } = useAppContext();

  const { photos, name: albumName, createdAt, bio } = chosenAlbum as any;

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
    <div className="p-4 flex gap-8 md:gap-16 flex-col justify-center pc:flex-row pc:justify-start">
      <div id="imageList">
        <div className="mobile:h-[20em] tablet:h-[30em] pc:h-[22em] pc:w-[20em] xl:h-[24em]">
          <img
            src={chosenImage}
            alt={chosenImage}
            className="object-cover h-full w-full"
          />
        </div>

        <div
          id="gallery"
          className="gallery mt-4 h-[5em] pc:w-[20em]"
          ref={imgRef}
        >
          {photos.map((imgUrl: string, index: number) => (
            <img key={index} src={imgUrl} onClick={() => selectImage(imgUrl)} />
          ))}
        </div>
      </div>
    </div>
  );
};
