import React from "react";
import "../styles/Cards.css";
import logements from '../data/logements.json';

const Logements = () => {
  return (
    <div className="container">
      {logements.map((logement, index) => (
        <div key={index} className="card">
          <img src={logement.cover} alt={logement.title} />
          <div className="card-content">
            <h3>{logement.title}</h3>
           
          </div>
        </div>
      ))}
    </div>
  );
};

export default Logements;

