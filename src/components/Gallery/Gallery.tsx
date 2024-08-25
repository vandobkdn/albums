import { useEffect, useState } from 'react';
import { useAppContext } from '../../context';
import { CarouselGallery } from './CarouselGallery';
import { GridGallery } from './GridGallery';

export const Gallery = () => {
  const [isChangeAlbum, setIsChangeAlbums] = useState(false);
  const { chosenAlbum, chosenImage } = useAppContext().state;

  useEffect(() => {
    setIsChangeAlbums(true);
    setTimeout(() => setIsChangeAlbums(false), 500);
  }, [chosenAlbum]);

  return isChangeAlbum ? (
    <div>Loading....</div>
  ) : chosenImage && chosenAlbum ? (
    <CarouselGallery />
  ) : (
    <GridGallery />
  );
};
