import { Album } from './types';

export default function ({ name, album, created }: Album) {
  return (
    <div className="w-full h-[20em] border-2 text-black-dark hover:cursor-pointer relative shadow-md">
      <img
        src={`/albums/${album}/0.jpg`}
        alt={name}
        className="shadow-mdy w-full h-full"
      />
      <span className="absolute bottom-0 left-2">
        <h1>{name}</h1>
        <p>{created}</p>
      </span>
    </div>
  );
}
