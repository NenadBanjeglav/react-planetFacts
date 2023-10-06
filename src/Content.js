import { useState } from "react";
import { PlanetInfoPoints } from "./PlanetInfoPoints";
import { OverviewButtons } from "./OverviewButtons";
import { PlanetDescription } from "./PlanetDescription";
import { PlanetImage } from "./PlanetImage";

export function Content({ planet }) {
  const [activeBtn, setActiveBtn] = useState("overview");

  return (
    <main className="main">
      <div className="image-text-wrap">
        <PlanetImage planet={planet} activeBtn={activeBtn} />
        <div className="text-btns-wrap">
          <PlanetDescription planet={planet} activeBtn={activeBtn} />
          <div className="btns-wrap">
            <OverviewButtons
              setActiveBtn={setActiveBtn}
              activeBtn={activeBtn}
              planet={planet}
            />
          </div>
        </div>
      </div>
      <div className="info-wrap">
        <PlanetInfoPoints planet={planet} />
      </div>
    </main>
  );
}
