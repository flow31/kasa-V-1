import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
  const currentPath = window.location.pathname;

  return (
    <header>
      <Link className='linklogo' to="/">
        <img src={logo} alt="Logo du site Kasa" />
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/" className={`link ${currentPath === '/' ? 'active' : ''}`}>
              Accueil
            </Link>
          </li>
          <li>
            <Link to="/about" className={`link ${currentPath === '/about' ? 'active' : ''}`}>
              A Propos
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}


export default Header;
