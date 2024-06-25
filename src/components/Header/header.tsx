import { Icon, Icons } from '../Icon';
import { useAppContext } from '../../context';

export const Header = () => {
  const {
    setActiveLink,
    state: { activeLink },
  } = useAppContext();

  const isWeddingActive = activeLink === 'wedding';

  return (
    <header className="h-full w-full px-4 flex items-center justify-between">
      <Icon icon={Icons.Logo} />
      <button
        aria-label="Hình cưới"
        onClick={() => setActiveLink('wedding')}
        className={`${isWeddingActive && 'text-blue rounded-md bg-gray-200'} text-black text-sm p-1 px-2 hover:rounded-md hover:bg-gray-200 hover:text-blue`}
      >
        Hình cưới
      </button>
    </header>
  );
};
