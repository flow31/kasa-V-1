import logo from '../assets/logo.png';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo du site Kasa" />
      <ul>
        <li>Accueil</li>

        <li>A Propos</li>
      </ul>
    </nav>
  );
}

export default Navbar;
