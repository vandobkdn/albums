import { useState } from 'react';

import { ImageLoader } from './ImageLoader';
import { View, Image } from '../../primitives';

export const LoadedImage = ({
  src,
  className,
  onSelect,
}: {
  className: string;
  src: string;
  onSelect?: () => void;
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <View className={className}>
      <>
        {!isLoaded && <ImageLoader />}
        <Image
          src={src}
          alt=""
          onSelect={onSelect}
          onLoad={() => setIsLoaded(true)}
        />
      </>
    </View>
  );
};
