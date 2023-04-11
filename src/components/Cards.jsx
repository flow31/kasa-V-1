import React from "react";
import { Link } from "react-router-dom";
import "../styles/Cards.css";
import logements from "../data/logements.json";

const Logements = () => {
  return (
    <section className="container">
      {logements.map((logement) => (
        <Link  key={logement.id} to={`/logements/${logement.id}`} className="card-link">
          <article className="card">
            <img src={logement.cover} alt={logement.title} />
            <div className="card-content">
              <h3>{logement.title}</h3>
            </div>
          </article>
        </Link>
      ))}
    </section>
  );
};

export default Logements;


