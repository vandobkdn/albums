import { useAppContext } from '../../context';
import { View, Text, Clickable } from '../../primitives';
import { Icon, Icons } from '../Icon';

export const ToolBar = () => {
  const {
    setIsOpenNavBar,
    selectAlbum,
    selectImage,
    state: { isOpenNavBar, chosenAlbum },
  } = useAppContext();

  const isOpenAlbum = !!chosenAlbum;

  const handleBackAction = () => {
    selectAlbum(undefined);
    selectImage(undefined);
  };

  return (
    <View className="flex gap-4 items-center justify-between px-4">
      <View className="h-[2.6em] flex items-center gap-4">
        <Clickable
          className="h-full w-full flex items-center"
          onClick={() => setIsOpenNavBar(!isOpenNavBar)}
        >
          <Icon icon={Icons.NavBar} classNames="text-blue" />
        </Clickable>

        {isOpenAlbum && (
          <Clickable
            className="h-full w-full flex items-center border-l-2"
            onClick={handleBackAction}
          >
            <Icon icon={Icons.LeftArrow} classNames="text-blue ml-2" />{' '}
            <Text className="ml-2 text-blue">Back</Text>
          </Clickable>
        )}
      </View>

      {isOpenAlbum && (
        <Text tag="h2">
          <strong>Album: </strong> {chosenAlbum.name}
        </Text>
      )}

      {isOpenAlbum && (
        <button className="h-[2.6em] flex items-center ">
          <Icon icon={Icons.Info} classNames="text-blue" />
        </button>
      )}
    </View>
  );
};
