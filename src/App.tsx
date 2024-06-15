import Album from './album';
import albums from './resource/images.json';

function App() {
  return (
    <div className="h-full w-full p-5 md:p-16 bg-white">
      <header className="h-[5em] w-full flex justify-start xs:justify-center sm:justify-center md:justify-start">
        <h1 className="font-normal text-2xl">Bé 🐼 ❤️ Anh 😍</h1>
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
