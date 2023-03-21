import Navbar from '../components/Header';
import { Link } from 'react-router-dom';
import '../styles/Error.css'

function Error() {
  return (
    <>
      <Navbar />
      <section className='error'>
        <h1>404</h1>
        <h2>Oups! La page que vous demandez n'existe pas</h2>
        <small>
          <Link to="/" className='link'>Retourner sur la page d'accueil</Link>
        </small>
      </section>
    </>
  );
}

export default Error;

