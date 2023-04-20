import { useEffect, useState } from "react"; 
import logements from "../data/logements.json"; 
import rating1 from "../assets/rating1.png"; 
import rating2 from "../assets/rating2.png"; 
import '../styles/Ratings.css' 

function Ratings() {
  const [rating, setRating] = useState(0); // Définition de l'état initial de la note à 0

  useEffect(() => {
    const id = window.location.pathname.split("/").pop(); // Récupération de l'ID du logement à partir de l'URL

    const logement = logements.find((logement) => logement.id === id); // Recherche du logement correspondant à l'ID
    setRating(logement.rating); // Définition de la note du logement comme état de la note
  }, []); 

  return (
    <div className="ratings"> 
      {[...Array(5)].map((star, i) => { // Parcours d'une plage de 5 éléments pour générer les images d'étoiles
        const ratingValue = i + 1; // Définition de la note en fonction de l'index du tableau
        return (
          <img
            key={i} // Clé unique pour chaque image
            src={
              ratingValue <= rating ? rating1 : rating2 // Utilisation de la notation 1 ou 2 en fonction de la note en cours de traitement
            }
            alt="étoile" 
          />
        );
      })}
    </div>
  );
}

export default Ratings; 
