export function OverviewButtons({ setActiveBtn, activeBtn, planet }) {
  return (
    <>
      <button
        style={
          activeBtn === "overview"
            ? { backgroundColor: planet.color }
            : { backgroundColor: "transparent" }
        }
        value="overview"
        className="overview-button"
        onClick={(e) => setActiveBtn(e.target.value)}
      >
        <span
          style={
            activeBtn === "overview"
              ? { visibility: "hidden" }
              : { visibility: "visible" }
          }
          className="btn-num"
        >
          01
        </span>
        Overview
      </button>
      <button
        value="structure"
        className="overview-button"
        onClick={(e) => setActiveBtn(e.target.value)}
        style={
          activeBtn === "structure"
            ? { backgroundColor: planet.color }
            : { backgroundColor: "transparent" }
        }
      >
        <span
          style={
            activeBtn === "structure"
              ? { visibility: "hidden" }
              : { visibility: "visible" }
          }
          className="btn-num"
        >
          02
        </span>
        Internal Structure
      </button>
      <button
        value="geology"
        className="overview-button"
        onClick={(e) => setActiveBtn(e.target.value)}
        style={
          activeBtn === "geology"
            ? { backgroundColor: planet.color }
            : { backgroundColor: "transparent" }
        }
      >
        <span
          style={
            activeBtn === "geology"
              ? { visibility: "hidden" }
              : { visibility: "visible" }
          }
          className="btn-num"
        >
          03
        </span>
        Surface Geology
      </button>
    </>
  );
}
