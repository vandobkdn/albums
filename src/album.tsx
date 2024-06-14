interface Album {
  title: string;
  des?: string;
  created: string;
  urls: string[];
}

export default function ({ title, urls, created }: Album) {
  return (
    <div className="w-full h-[20em] border-2 text-black-dark hover:cursor-pointer relative shadow-md">
      <img src={urls[0]} alt={title} className="shadow-mdy w-full h-full" />
      <span className="absolute bottom-0 left-2">
        <h1>{title}</h1>
        <p>{created}</p>
      </span>
    </div>
  );
}
