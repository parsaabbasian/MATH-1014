import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Future topics can be added here */}
            <Route path="/about" element={
              <div className="main-content glass-card section-card">
                <h1 className="text-gradient">About CalcMaster</h1>
                <p style={{ marginTop: '1.5rem', fontSize: '1.1rem', color: 'var(--text-muted)' }}>
                  CalcMaster is a premium learning platform designed to make complex calculus concepts accessible and engaging.
                  Our mission is to provide clear, beautiful, and interactive educational content for students worldwide.
                </p>
              </div>
            } />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
