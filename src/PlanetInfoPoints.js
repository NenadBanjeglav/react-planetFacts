export function PlanetInfoPoints({ planet }) {
  return (
    <>
      <div className="info-box">
        <h4 className="heading-quart">Rotation Time</h4>
        <p className="heading-secondary">{planet.rotation}</p>
      </div>
      <div className="info-box">
        <h4 className="heading-quart">Revolution Time</h4>
        <p className="heading-secondary">{planet.revolution}</p>
      </div>
      <div className="info-box">
        <h4 className="heading-quart">Radius</h4>
        <p className="heading-secondary">{planet.radius}</p>
      </div>
      <div className="info-box">
        <h4 className="heading-quart"> Avarage Temp.</h4>
        <p className="heading-secondary">{planet.temperature}</p>
      </div>
    </>
  );
}
