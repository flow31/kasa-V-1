import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">
        <img src={logo} alt="Logo du site Kasa" />
      </Link>
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
  );
}

export default Navbar;
