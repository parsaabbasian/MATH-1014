import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Section11_1 from './pages/Section11_1';
import About from './pages/About';
import Topics from './pages/Topics';
import Landing from './pages/Landing';
import Section11_2 from './pages/Section11_2';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="app-container">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/11-1" element={<Section11_1 />} />
              <Route path="/11-2" element={<Section11_2 />} />
              <Route path="/topics" element={<Topics />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </main>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
