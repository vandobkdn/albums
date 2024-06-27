import { useAppContext } from '../../context';
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
    <div className="flex gap-4 items-center justify-between px-4">
      <div className="h-[2.6em] flex items-center gap-4">
        <button
          className="h-full w-full flex items-center"
          onClick={() => setIsOpenNavBar(!isOpenNavBar)}
        >
          <Icon icon={Icons.NavBar} classNames="text-blue" />
        </button>

        {isOpenAlbum && (
          <button
            className="h-full w-full flex items-center border-l-2"
            onClick={handleBackAction}
          >
            <Icon icon={Icons.LeftArrow} classNames="text-blue ml-2" />{' '}
            <span className="ml-2 text-blue">Back</span>
          </button>
        )}
      </div>

      {isOpenAlbum && (
        <h2>
          <strong>Album: </strong> {chosenAlbum.name}
        </h2>
      )}

      {isOpenAlbum && (
        <button className="h-[2.6em] flex items-center ">
          <Icon icon={Icons.Info} classNames="text-blue" />
        </button>
      )}
    </div>
  );
};
