import background from '../assets/IMG.png';
import '../styles/Banner.css';

function Banner() {
  return (
    <section>
      <input type="image" img src={background} alt="photo" />
    </section>
  );
}

export default Banner;
