import { View, Text, Image } from '../../primitives';

type Props = {
  coverImage: string;
  name: string;
  size: number;
  onSelect: () => void;
};

export const Thumbnail = ({
  coverImage,
  name: albumName,
  size,
  onSelect,
}: Props) => {
  return (
    <View className="flex flex-col items-center p-4 xs:p-0">
      <View className="border-[1px] xs:max-h-[72px] xs:max-w-[68px] sm:max-h-[86px] sm:max-w-[80px] md:max-h-[126px] md:max-w-[120px] lg:max-h-[148px] lg:max-w-[142px] xl:max-h-[230px] xl:max-w-[228px] hover:cursor-pointer rounded-md">
        <Image
          src={coverImage}
          alt={albumName}
          attrs={{
            title: albumName,
          }}
          className="rounded-md"
          onSelect={onSelect}
        />
      </View>
      <View
        tag="span"
        className="pt-2 flex flex-col gap-1 justify-center items-center text-black"
      >
        <Text tag="h1">{albumName}</Text>
        <Text tag="h3" className="text-black opacity-60 text-xs">
          Size: {size}
        </Text>
      </View>
    </View>
  );
};
