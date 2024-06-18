import classnames from 'classnames';

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
}

const Image = ({ src, alt, className }: ImageProps) => (
  <img
    src={src}
    alt={alt}
    className={classnames(
      'border-2 shadow-md cursor-pointer h-full w-full',
      className,
    )}
  />
);

export default Image;
