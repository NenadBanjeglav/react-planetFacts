import { useState } from "react";
import data from "./data.json";
import { Header } from "./Header";
import { Content } from "./Content";

export default function App() {
  const planetsData = data;
  const [planet, setPlanet] = useState(planetsData[0]);

  return (
    <div className="app">
      <Header setPlanet={setPlanet} planetsData={planetsData} />
      <Content planet={planet} />
    </div>
  );
}
