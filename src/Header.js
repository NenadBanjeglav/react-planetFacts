import { Nav } from "./Nav";

export function Header({ setPlanet, planetsData }) {
  return (
    <header className="header">
      <h2 className="heading-secondary">The Planets</h2>
      <Nav setPlanet={setPlanet} planetsData={planetsData} />
    </header>
  );
}
