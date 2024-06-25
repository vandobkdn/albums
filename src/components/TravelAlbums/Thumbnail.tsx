export const Thumbnail = ({
  coverImage,
  name: albumName,
  size,
}: {
  coverImage: string;
  name: string;
  size: number;
}) => {
  return (
    <div className="border-[1px] xs:max-h-[72px] xs:max-w-[72px] sm:max-h-[86px] sm:max-w-[86px] md:max-h-[124px] md:max-w-[124px] lg:max-h-[148px] lg:max-w-[148px] xl:max-h-[230px] xl:max-w-[230px]">
      <img src={coverImage} alt={albumName} className="w-full h-full" />
      <span className="pt-2 flex flex-col gap-1 justify-center items-center">
        <h1>{albumName}</h1>
        <h6 className="text-black opacity-60 text-sm">Size: {size}</h6>
      </span>
    </div>
  );
};
