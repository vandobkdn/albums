import React, { useState } from 'react';

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
  console.log('isLoaded', isLoaded);

  return (
    <div className={coverImageClassName}>
      <>
        {!isLoaded && (
          <img src="https://i.imgur.com/vwZ7JCS.jpg" alt="loading..." />
        )}
        
        <img
          src={imgSource}
          alt=""
          className="object-cover w-full h-full"
          onClick={onSelect}
          onLoad={() => setIsLoaded(true)}
        />
      </>
    </div>
  );
};
