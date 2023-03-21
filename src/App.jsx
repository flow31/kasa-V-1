import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Error from './Pages/Error';
import About from './Pages/About'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
