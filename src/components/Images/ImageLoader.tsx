import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export const ImageLoader = () => {
  const WrapperImages = () => (
    <div className="w-auto h-[300px] px-1">
      <div className="h-full w-full">
        <Skeleton height={'100%'} />
      </div>
    </div>
  );
  return (
    <>
      <Skeleton wrapper={WrapperImages} />
      <Skeleton wrapper={WrapperImages} />
      <Skeleton wrapper={WrapperImages} />
      <Skeleton wrapper={WrapperImages} />
      <Skeleton wrapper={WrapperImages} />
    </>
  );
};
