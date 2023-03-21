import { useParams } from 'react-router-dom';
import Navbar from '../components/Header';
import Footer from '../components/Footer';
import Collapse from '../components/Collapse';
import logements from '../data/logements.json';

function Apartments() {
  // Récupère les paramètres de l'URL, y compris l'ID
  const { id } = useParams();

  // Trouve le logement correspondant à l'ID dans le fichier JSON
  const logement = logements.find((l) => l.id === id);

 

  return (
    <div>
      <main>
        <Navbar />
        <div className="collapse-container">
          <Collapse title="Description" description={logement.description} />
          <Collapse title="Équipements" description={logement.equipments} />
        </div>
        <Footer />
      </main>
    </div>
  );
}

export default Apartments;

