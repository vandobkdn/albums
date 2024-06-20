import { useState, lazy, Suspense } from 'react';
import links from './resource/links.json';
import Modal from './modal.tsx';

const Travels = lazy(() => import('./travel.tsx'));
const Wedding = lazy(() => import('./wedding.tsx'));

function App() {
  const [navActive, setNavActive] = useState<string>('travel');

  return (
    <div className="h-full w-full p-5 md:px-16 md:py-4 bg-white">
      <header className="h-[6em] w-full flex gap-2 flex-row xs:flex-col sm:flex-row md:flew-row lg:flex-row sm:justify-between md:justify-between lg:justify-between mb-4">
        <h1 className="font-normal text-2xl self-center">Bé 🐼 ❤️ Anh 😍</h1>
        <ul className="flex gap-8 text-lg self-center p-2">
          {links.map(({ title, label }) => (
            <li
              onClick={() => setNavActive(title)}
              key={title}
              className={`font-normal hover:cursor-pointer ${navActive === title ? 'activeLinks' : ''}`}
            >
              {label}
            </li>
          ))}
        </ul>
      </header>

      {/* <Suspense fallback={<h1>Loading....</h1>}>
        {navActive === 'travel' && <Travels />}
        {navActive === 'wedding' && <Wedding />}
      </Suspense> */}
      <Modal />
    </div>
  );
}

export default App;
