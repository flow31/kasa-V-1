import { useParams } from 'react-router-dom';
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
  

  return (
    <div>
        <Header />
      <main>
        <Carrousel pictures={logement.pictures} />
        <section className='description'>
        <h1>{logement.title}</h1>
        <Host name={logement.host.name} picture={logement.host.picture} />
        
        </section>
        <section className='location'>
        <h3>{logement.location}</h3>
        </section>
        <section className='tags-rating'>
         
        <LogementsTags tags={logement.tags} />
        
        <Ratings />
        </section>
        
        <div className="logement-container">
  <Collapse title="Description" content={logement.description} />
  <Collapse title="Équipements" content={logement.equipments} />
</div>

      </main>
        <Footer />
    </div>
  );
}

export default Logements;
