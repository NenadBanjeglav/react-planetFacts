export function PlanetImage({ planet, activeBtn }) {
  return (
    <div className="image-wrap">
      {activeBtn === "overview" && (
        <img
          className="image"
          src={process.env.PUBLIC_URL + planet.images.planet}
          alt={planet.name}
        />
      )}

      {activeBtn === "structure" && (
        <img
          className="image"
          src={process.env.PUBLIC_URL + planet.images.internal}
          alt={planet.name}
        />
      )}

      {activeBtn === "geology" && (
        <>
          <img
            className="image"
            src={process.env.PUBLIC_URL + planet.images.planet}
            alt={planet.name}
          />
          <img
            className="geo-image"
            src={process.env.PUBLIC_URL + planet.images.geology}
            alt={planet.name}
          />
        </>
      )}
    </div>
  );
}
