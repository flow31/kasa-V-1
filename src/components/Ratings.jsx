import { useEffect, useState } from "react";
import logements from "../data/logements.json";
import rating1 from "../assets/rating1.png";
import rating2 from "../assets/rating2.png";
import '../styles/Ratings.css'

function Ratings() {
  const [rating, setRating] = useState(0);

  useEffect(() => {
    // récupère l'ID depuis l'URL (par exemple en utilisant React Router)
    const id = window.location.pathname.split("/").pop();

    // récupère les informations du logement depuis le fichier JSON
    const logement = logements.find((logement) => logement.id === id);
    setRating(logement.rating);
  }, []);

  return (
    <div className="ratings">
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        return (
          <img
            key={i}
            src={
              ratingValue <= rating ? rating1 : rating2
            }
            alt="étoile"
          />
        );
      })}
    </div>
  );
}

export default Ratings;
