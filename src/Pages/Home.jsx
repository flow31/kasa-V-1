import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Cards from '../components/Cards'
function Home() {
  return (
    <div>
      <main>
        <Navbar />
        <Banner />
        <Cards />
        <Footer />
      </main>
    </div>
  );
}

export default Home;
