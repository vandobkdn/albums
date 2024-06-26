export const Thumbnail = ({
  coverImage,
  name: albumName,
  photos,
  onSelect,
}: {
  coverImage: string;
  name: string;
  photos: string[];
  onSelect: () => void;
}) => {
  return (
    <div className="flex flex-col items-center p-4 xs:p-0">
      <div className="border-[1px] xs:max-h-[72px] xs:max-w-[68px] sm:max-h-[86px] sm:max-w-[80px] md:max-h-[126px] md:max-w-[120px] lg:max-h-[148px] lg:max-w-[142px] xl:max-h-[230px] xl:max-w-[228px] hover:cursor-pointer rounded-md">
        <img
          src={coverImage}
          alt={albumName}
          title={albumName}
          className="object-cover rounded-md w-full h-full"
          onClick={() => onSelect()}
        />
      </div>
      <span className="pt-2 flex flex-col gap-1 justify-center items-center text-black">
        <h1>{albumName}</h1>
        <h6 className="text-black opacity-60 text-xs">Size: {photos.length}</h6>
      </span>
    </div>
  );
};
