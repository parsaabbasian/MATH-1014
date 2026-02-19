import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="app-container">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={
                <div className="main-content glass-card section-card">
                  <h1 className="text-gradient" style={{ fontSize: '3rem', marginBottom: '2rem' }}>About CalcMaster</h1>
                  <p style={{ fontSize: '1.4rem', color: 'var(--text-muted)', fontFamily: 'var(--font-serif)', fontStyle: 'italic', lineHeight: '1.8' }}>
                    CalcMaster is a state-of-the-art educational platform designed to bridge the gap between complex mathematical theory and intuitive understanding.
                    Through rigorous LaTeX formatting and interactive step-by-step discovery, we empower students to master the series and sequences that define the language of change.
                  </p>
                </div>
              } />
            </Routes>
          </main>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
