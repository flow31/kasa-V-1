import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Error from './Pages/Error';
import About from './Pages/About';
import Logements from './Pages/Logements';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/logements/:id" element={<Logements />} />
          <Route path="/error" element={<Error />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    
  );
}

export default App;
