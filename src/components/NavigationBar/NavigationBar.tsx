import { AlbumInfo } from './AlbumInfo';
import { ToolBar } from './ToolBar';
import { View } from '../../primitives';

export const NavigationBar = () => {
  return (
    <View className="sticky top-0 shadow-xs z-10">
      <View className="h-full w-full bg-white">
        <ToolBar />
        <hr />
        <AlbumInfo />
      </View>
    </View>
  );
};
