import classnames from 'classnames';

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
  onSelect?: (imgUrl: string) => void;
}

const Image = ({ src, alt, className, onSelect }: ImageProps) => {
  const handleImageClick = () => {
    if (onSelect) onSelect(src);
  };

  return (
    <img
      draggable={false}
      src={src}
      alt={alt}
      className={classnames(
        'border-2 shadow-md cursor-pointer h-full w-full',
        className,
      )}
      onClick={handleImageClick}
    />
  );
};

export default Image;
