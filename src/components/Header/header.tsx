import { Clickable } from '../../primitives';
import { Icon, Icons } from '../Icon';

export const Header = () => {
  return (
    <header className="h-full w-full px-4 flex items-center justify-between">
      <Icon icon={Icons.Logo} />
      <Clickable
        attrs={{
          'aria-label': 'Hình cưới',
        }}
        onClick={() => console.log('click hc')}
        className={` text-black text-sm p-1 px-2 hover:rounded-md hover:bg-gray-200 hover:text-blue`}
      >
        Hình cưới
      </Clickable>
    </header>
  );
};
