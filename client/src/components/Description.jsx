import React from "react";
// import ReactDOM from "react-dom";

const Description = ({ clickedCow }) => {
  if (clickedCow) {
    return (
      <div id="description-component">
        <h2 className="cow-name">{clickedCow.name}</h2>
        <div className="cow-description">{clickedCow.description}</div>
      </div>
    );
  }
};
export default Description;
