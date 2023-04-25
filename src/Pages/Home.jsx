import Header from '../components/Header';
import '../styles/BannerHome.css'
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Cards from '../components/Cards';
import IMG from '../assets/IMG.png';

function Home() {
  return (
    <div>
      <Header />
      <main>
        <section className='banner-home'>
          <Banner backgroundImage={IMG} title="Chez vous, partout et ailleurs" />
        </section>
        <section>
          <Cards />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
