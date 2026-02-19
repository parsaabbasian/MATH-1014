import React from 'react';
import { Link } from 'react-router-dom';
import { Sigma, BookOpen, Calculator, Info } from 'lucide-react';

const Navbar = () => {
    return (
        <nav className="navbar glass-card">
            <div className="nav-container">
                <Link to="/" className="nav-logo">
                    <Sigma className="logo-icon" size={28} />
                    <span className="logo-text">Calc<span className="text-gradient">Master</span></span>
                </Link>
                <div className="nav-links">
                    <Link to="/" className="nav-link">
                        <BookOpen size={18} />
                        <span>Topics</span>
                    </Link>
                    <Link to="/about" className="nav-link">
                        <Info size={18} />
                        <span>About</span>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
