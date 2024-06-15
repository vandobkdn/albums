interface Album {
  title: string;
  album: string;
  des?: string;
  created: string;
  urls: string[];
}

export default function ({ title, album, urls, created }: Album) {
  return (
    <div className="w-full h-[20em] border-2 text-black-dark hover:cursor-pointer relative shadow-md">
      <img
        src={`/albums/${album}/${urls[0]}.jpg`}
        alt={title}
        className="shadow-mdy w-full h-full"
      />
      <span className="absolute bottom-0 left-2">
        <h1>{title}</h1>
        <p>{created}</p>
      </span>
    </div>
  );
}
