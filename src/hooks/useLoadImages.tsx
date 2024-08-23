import { useState, useEffect } from 'react';

type Props = {
  imageUrls: string[];
  limit?: number;
};

const useLoadImages = ({ imageUrls, limit = 5 }: Props) => {
  const [loadedImageUrls, setLoadedImageUrls] = useState<string[]>([]);
  const [loadedImagesCounter, setLoadedImagesCounter] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadImages = async () => {
      const remainingImages = imageUrls.slice(loadedImagesCounter);
      const loaderImages = remainingImages.slice(0, limit);

      const fetchImage = (url: string) => {
        return new Promise<string>(async (resolve) => {
          const response = await fetch(url);
          if (!response.ok) {
            resolve('');
          }
          const blob = await response.blob();
          resolve(URL.createObjectURL(blob));
        });
      };

      const loadImages = loaderImages.map((url) => fetchImage(url));

      const loadedImages = await Promise.all(loadImages);

      setLoadedImageUrls((prevLoadedImages) => [
        ...prevLoadedImages,
        ...loadedImages,
      ]);

      setLoadedImagesCounter((prevLoadedCounter) => prevLoadedCounter + limit);
    };

    if (loadedImagesCounter < imageUrls.length) {
      loadImages();
    } else {
      setIsLoading(false);
    }
  }, [loadedImagesCounter, imageUrls, limit]);

  return { loadedImageUrls, isLoading };
};

export default useLoadImages;
