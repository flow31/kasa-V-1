import Header from '../components/Header';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Cards from '../components/Cards';
import IMG from '../assets/IMG.png'
function Home() {
  return (
   
      <main>
        <Header />
        <Banner backgroundImage={IMG} title="Chez vous, partout et ailleurs" /> 
        
        <Cards />
        <Footer />
      </main>
    
  );
}

export default Home;
