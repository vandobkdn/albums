import { useState } from 'react';
import Album from './album';
import albums from './resource/images.json';
import links from './resource/links.json';

function App() {
  const [navActive, setNavActive] = useState<string>('travel');

  console.log('navActive', navActive);

  return (
    <div className="h-full w-full p-5 md:px-16 md:py-4 bg-white">
      <header className="h-[6em] w-full flex gap-2 flex-row xs:flex-col sm:flex-row md:flew-row lg:flex-row sm:justify-between md:justify-between lg:justify-between mb-4">
        <h1 className="font-normal text-2xl self-center">Bé 🐼 ❤️ Anh 😍</h1>
        <ul className='flex gap-8 text-lg self-center p-2'>
          {
            links.map(({title, label}) => <li onClick={() => setNavActive(title)} key={title} className={`font-normal hover:cursor-pointer ${navActive === title ? 'activeLinks': ''}`}>{label}</li>)
          }
        </ul>
      </header>

      <main className="grid gap-x-4 gap-y-20 xs:gap-y-5 sm:gap-y-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {albums.map((album, index) => (
          <Album key={index} {...album} />
        ))}
      </main>
    </div>
  );
}

export default App;
