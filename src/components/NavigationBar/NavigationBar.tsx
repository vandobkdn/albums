import { AlbumInfo } from './AlbumInfo';
import { ToolBar } from './ToolBar';

export const NavigationBar = () => {
  return (
    <div className="sticky top-0 shadow-xs z-10">
      <div className="h-full w-full bg-white">
        <ToolBar />
        <hr />
        <AlbumInfo />
      </div>
    </div>
  );
};
