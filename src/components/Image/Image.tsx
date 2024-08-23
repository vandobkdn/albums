import { useState } from 'react';

import SkeletonLoader from '../ImageLoader';

export const Image = ({
  imgSource,
  coverImageClassName,
  onSelect,
}: {
  coverImageClassName: string;
  imgSource: string;
  onSelect?: () => void;
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={coverImageClassName}>
      <>
        {!isLoaded && <SkeletonLoader />}

        <img
          src={imgSource}
          alt=""
          className="object-cover w-full h-full"
          onClick={onSelect}
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
        />
      </>
    </div>
  );
};
