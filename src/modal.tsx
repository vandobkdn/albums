import { useEffect, useRef, useState } from 'react';
import Image from './Image';
import { useAppContext } from './context';

const Modal = ({ isOpen = false }: { isOpen: boolean }) => {
  const {
    state: { chosenAlbum },
    selectAlbum,
  } = useAppContext();
  const { des, size, album, created, name: albumName } = chosenAlbum || {};
  const imgRef = useRef<HTMLDivElement>(null);
  const images = Array.from(
    { length: size || 0 },
    (_, index) => `${index}`,
  ).map((_, index) => `/albums/${album}/${index}.jpg`);

  const [selectedImage, setSelectedImage] = useState<string>(images[0]);

  useEffect(() => {
    if (!imgRef.current || !imgRef.current.children) return;

    const imageList = imgRef.current.children;

    const image = imageList[0] as HTMLImageElement;
    imgRef.current.scrollTo({
      left: image?.offsetWidth * 3,
      behavior: 'smooth',
    });
  }, []);

  useEffect(() => {
    setSelectedImage(images[0]);
  }, [albumName]);

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50 ${isOpen ? '' : 'hidden'}`}
    >
      <div className="bg-white scroll-width-none overflow-auto w-full h-full mobile:w-4/5 mobile:h-4/5 tablet:w-4/5 tablet:h-4/5 pc:w-4/5 pc:h-4/5 xl:w-1/2 xl:h-4/5">
        <div className="px-4 py-2 bg-gray-200 flex justify-between items-center">
          <h2 className="text-lg font-semibold">{albumName}</h2>
          <button
            className="text-black-light hover:text-black-dark focus:outline-none"
            onClick={() => selectAlbum(undefined)}
          >
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M14.348 14.849a.625.625 0 0 1-.884 0l-3.478-3.479-3.478 3.479a.625.625 0 0 1-.884-.884l3.479-3.478-3.479-3.478a.625.625 0 0 1 .884-.884l3.478 3.479 3.478-3.479a.625.625 0 0 1 .884.884l-3.479 3.478 3.479 3.478a.625.625 0 0 1 0 .884z" />
            </svg>
          </button>
        </div>

        <div className="p-4 flex gap-8 md:gap-16 flex-col justify-center pc:flex-row pc:justify-start">
          <div id="imageList">
            <div className="mobile:h-[20em] tablet:h-[30em] pc:h-[22em] pc:w-[20em] xl:h-[24em]">
              <Image
                src={selectedImage}
                alt={selectedImage}
                className="shadow-none"
              />
            </div>

            <div
              id="gallery"
              className="gallery mt-4 h-[5em] pc:w-[20em]"
              ref={imgRef}
            >
              {images.map((imgUrl, index) => (
                <Image
                  key={index}
                  src={imgUrl}
                  alt={'wedding'}
                  className="shadow-none"
                  onSelect={(url) => setSelectedImage(url)}
                />
              ))}
            </div>
          </div>
          <div id="album-info" className="text-black-light leading-8 md:w-full">
            <hr />
            <h2>
              <strong>Album: </strong> {albumName}
            </h2>
            <h6>Ngày tạo: {created}</h6>
            <h6>Sonny A6400 📸 📸 📸</h6>
            <p className="border-2 min-h-[6em] rounded-md px-2">{des}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
