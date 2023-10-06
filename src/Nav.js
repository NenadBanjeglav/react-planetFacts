export function Nav({ setPlanet, planetsData }) {
  return (
    <nav className="nav">
      <ul className="nav__list">
        {planetsData.map((el) => (
          <li key={el.name} className="nav__item">
            <button
              value={el.name}
              onClick={(e) =>
                setPlanet(planetsData.find((el) => el.name === e.target.value))
              }
              className="nav__btn"
            >
              {el.name}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
