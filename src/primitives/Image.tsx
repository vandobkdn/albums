import { HTMLAttributes } from 'react';
import classnames from 'classnames';

type Props = {
  attrs?: HTMLAttributes<HTMLImageElement> & {
    [p: `data-${string}`]: string | undefined;
  };
  src: string;
  alt?: string;
  className?: string;
  onSelect?: () => void;
};

export const Image = ({ src, alt, className, attrs, onSelect }: Props) => {
  return (
    <img
      {...attrs}
      src={src}
      alt={alt}
      onClick={onSelect}
      loading="lazy"
      className={classnames('object-cover w-full h-full', className)}
    />
  );
};
