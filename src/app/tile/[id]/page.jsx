import tiles from "@/data/tiles.json";

const TileDetails = ({ params }) => {
  const tile = tiles.find((t) => t.id === params.id);

  return (
    <div className="grid md:grid-cols-2 gap-10 p-10">
      <img
        src={tile.image}
        alt={tile.title}
        className="rounded-xl"
      />

      <div>
        <h1 className="text-5xl font-bold">
          {tile.title}
        </h1>

        <p className="mt-5">{tile.description}</p>

        <p className="mt-3">
          Creator: {tile.creator}
        </p>

        <div className="mt-4 flex gap-3">
          {tile.tags.map((tag, index) => (
            <span
              key={index}
              className="badge badge-primary"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TileDetails;