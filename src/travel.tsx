import Album from './album';
import albums from './resource/images.json';

export default function () {
  return (
    <main className="grid gap-x-4 gap-y-20 xs:gap-y-5 sm:gap-y-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {albums.map((album, index) => (
        <Album key={index} {...album} />
      ))}
    </main>
  );
}
