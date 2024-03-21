import { useState } from "react";
import { satData } from "./satData";
import "./styling.css";

export const Buttons = ({ filterByType, setSat, orbitTypes }) => {
  const [activeOrbitType, setActiveOrbitType] = useState();

  return (
    <div className="flex-container">
      <button
        onClick={() => {
          setSat(satData);
          setActiveOrbitType("all");
        }}
        className={activeOrbitType == "all" && "active" || ""}
      >
        All Orbits
      </button>

      {orbitTypes.map((orbitType, index) => {
        return (
          <button
            onClick={() => {
              setActiveOrbitType(orbitType);
              filterByType(orbitType);
            }}
            key={index}
            className={activeOrbitType == orbitType && "active" || ""}
          >
            {orbitType} Orbit
          </button>
        );
      })}
    </div>
  );
};