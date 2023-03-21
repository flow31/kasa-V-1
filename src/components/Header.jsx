import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
  return (
    <header>
      <Link to="/">
        <img src={logo} alt="Logo du site Kasa" />
      </Link>
      <nav>
      <ul>
        <li>
          <Link to="/" className="link">
            Accueil
          </Link>
        </li>
        <li>
          <Link to="/about" className="link">
            A Propos
          </Link>
        </li>
      </ul>
      </nav>
    </header>
  );
}

export default Header;
