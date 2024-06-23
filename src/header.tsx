import { useAppContext } from './context';

const Header = () => {
  const {
    setActiveLink,
    state: { navLinks, activeLink },
  } = useAppContext();

  return (
    <header className="h-[6em] w-full flex gap-2 flex-row xs:flex-col sm:flex-row md:flew-row lg:flex-row sm:justify-between md:justify-between lg:justify-between mb-4">
      <h1 className="font-normal text-2xl self-center">Bé 🐼 ❤️ Anh 😍</h1>
      <ul className="flex gap-8 text-lg self-center p-2">
        {navLinks.map(({ title, label }) => (
          <li
            onClick={() => setActiveLink(title)}
            key={title}
            className={`font-normal hover:cursor-pointer ${activeLink === title ? 'activeLinks' : ''}`}
          >
            {label}
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
