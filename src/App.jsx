import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Section11_1 from './pages/Section11_1';
import About from './pages/About';
import Topics from './pages/Topics';
import Landing from './pages/Landing';
import Section11_2 from './pages/Section11_2';
import Section11_3 from './pages/Section11_3';
import Section7_7 from './pages/Section7_7';
import Resources from './pages/Resources';
import CheatSheet from './pages/CheatSheet';
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
              <Route path="/11-3" element={<Section11_3 />} />
              <Route path="/7-7" element={<Section7_7 />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/cheat-sheet" element={<CheatSheet />} />
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
