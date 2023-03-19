import background from '../assets/IMG.png';
import '../styles/Banner.css';

function Banner() {
  return (
    <section className="banner">
      <img
        className="banner-image"
        src={background}
        alt="Logo de l'entreprise ACME"
      />
      <div className="banner-text">
        <h1>Chez vous, partout et ailleurs</h1>
      </div>
    </section>
  );
}

export default Banner;
