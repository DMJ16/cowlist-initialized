import React from "react";
import CowListEntry from "./CowListEntry.jsx";

// Q: why don't we need return?

const CowList = ({ cows, onClick, clickedCow }) => (
  <div>
    <h4>Cows</h4>
    <div className="cow-list">
      {cows.map((cow) => (
        <CowListEntry
          key={cow.id}
          cow={cow}
          onClick={onClick}
          clickedCow={clickedCow}
        />
      ))}
    </div>
  </div>
);

export default CowList;
