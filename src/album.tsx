import { MouseEventHandler } from 'react';
import { Album } from './types';

interface Props {
  onSelect?: MouseEventHandler<HTMLDivElement>;
}

export default function ({ name, album, created, onSelect }: Album & Props) {
  return (
    <div
      className="w-full h-[20em] border-2 text-black-dark hover:cursor-pointer relative shadow-md row-span-2"
      onClick={onSelect}
    >
      <img
        src={`/albums/${album}/0.jpg`}
        alt={name}
        className="shadow-md w-full h-full"
      />
      <span className="absolute bottom-0 left-2">
        <h1>{name}</h1>
        <p>{created}</p>
      </span>
    </div>
  );
}
