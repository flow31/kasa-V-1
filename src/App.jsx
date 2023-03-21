import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Error from './Pages/Error';
import About from './Pages/About'
import Apartments from './Pages/Apartments'


function App() {
  return (
    <main className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error />} />
          
          <Route path="/about" element={<About />} />
          <Route path="/logements/:id" element={<Apartments />} />

        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
