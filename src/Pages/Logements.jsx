import { useParams, Navigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Collapse from '../components/Collapse';
import logements from '../data/logements.json';
import Host from '../components/Host'
import LogementsTags from '../components/LogementsTags';
import '../styles/Logements.css'
import Ratings from '../components/Ratings';
import Carrousel from '../components/Carrousel';

function Logements() {
  const { id } = useParams();
  const logement = logements.find((l) => l.id === id);

  if (!logement) {
    return <Navigate to="/error" />;
  }

  return (
    <section>
        <Header />
      <main>
        <Carrousel pictures={logement.pictures} />
        <section className='logement-description'>
        <section className='description'>
        <h1>{logement.title}</h1>
        <LogementsTags tags={logement.tags} />
        <h3>{logement.location}</h3>
        
        
        </section>
   
        <section className='host-rating'>
         
      
        <Host name={logement.host.name} picture={logement.host.picture} />
        <Ratings />
        </section>
        </section>
        
        <div className="logement-container">
  <Collapse title="Description" content={logement.description} />
  <Collapse title="Équipements" content={logement.equipments} />
</div>

      </main>
        <Footer />
    </section>
  );
}

export default Logements;
