import { useAppContext } from '../../context';
import { CarouselGallery } from './CarouselGallery';
import { GridGallery } from './GridGallery';

export const Gallery = () => {
  const { chosenAlbum, chosenImage } = useAppContext().state;

  if (chosenImage && chosenAlbum) {
    return <CarouselGallery />;
  }

  return <GridGallery />;
};
