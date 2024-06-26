export const Thumbnail = ({
  album,
  name: albumName,
  size,
  onSelect,
}: {
  album: string;
  name: string;
  size: number;
  onSelect: () => void;
}) => {
  return (
    <div className="border-[1px] xs:max-h-[72px] xs:max-w-[68px] sm:max-h-[86px] sm:max-w-[80px] md:max-h-[126px] md:max-w-[120px] lg:max-h-[148px] lg:max-w-[142px] xl:max-h-[230px] xl:max-w-[228px] rounded-sm hover:cursor-pointer">
      <img
        src={`albums/${album}/0.jpg`}
        alt={albumName}
        className="object-cover w-full h-full"
        onClick={() => onSelect()}
      />
      <span className="pt-2 flex flex-col gap-1 justify-center items-center">
        <h1>{albumName}</h1>
        <h6 className="text-black opacity-60 text-xs">Size: {size}</h6>
      </span>
    </div>
  );
};
