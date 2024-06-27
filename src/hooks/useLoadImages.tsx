import { useState, useEffect } from 'react';

const useLoadImages = ({
  imageUrls,
  limit = 5,
}: {
  imageUrls: string[];
  limit?: number;
}) => {
  const [loadedImageUrls, setLoadedImageUrls] = useState<string[]>([]);
  const [loadedImagesCounter, setLoadedImagesCounter] = useState<number>(0);

  useEffect(() => {
    const loadImages = async () => {
      try {
        const remainingImages = imageUrls.slice(loadedImagesCounter);
        const loaderImages = remainingImages.slice(0, limit);

        const loadImages = loaderImages.map(async (url) => {
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error(`Failed to fetch image: ${url}`);
          }
          const blob = await response.blob();
          return URL.createObjectURL(blob);
        });

        const loadedImages = await Promise.all(loadImages);
        setLoadedImageUrls((prevLoadedImages) => [
          ...prevLoadedImages,
          ...loadedImages,
        ]);
        setLoadedImagesCounter(
          (prevLoadedCounter) => prevLoadedCounter + limit,
        );
      } catch {}
    };

    if (loadedImagesCounter < imageUrls.length) {
      loadImages();
    }
  }, [imageUrls, limit, loadedImagesCounter]);

  return loadedImageUrls;
};

export default useLoadImages;
