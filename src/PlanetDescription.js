export function PlanetDescription({ planet, activeBtn }) {
  return (
    <div className="text-wrap">
      <h1 className="heading-primary">{planet.name}</h1>

      <p className="text-primary">
        {activeBtn === "overview" && planet.overview.content}
        {activeBtn === "structure" && planet.structure.content}
        {activeBtn === "geology" && planet.geology.content}
      </p>
      <p className="text-source">
        Source:{" "}
        {activeBtn === "overview" && (
          <a className="source-link" href={planet.overview.source}>
            {" "}
            Wikipedia
            <img
              className="source-icon"
              src="./assets/icon-source.svg"
              alt="Arrow"
            />
          </a>
        )}
        {activeBtn === "structure" && (
          <a className="source-link" href={planet.structure.source}>
            {" "}
            Wikipedia
            <img
              className="source-icon"
              src="./assets/icon-source.svg"
              alt="Arrow"
            />
          </a>
        )}
        {activeBtn === "geology" && (
          <a className="source-link" href={planet.geology.source}>
            {" "}
            Wikipedia
            <img
              className="source-icon"
              src="./assets/icon-source.svg"
              alt="Arrow"
            />
          </a>
        )}
      </p>
    </div>
  );
}
