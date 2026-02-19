import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Info, Moon, Sun } from 'lucide-react';
import Logo from './Logo';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <nav className="navbar glass-card">
            <div className="nav-container">
                <Link to="/" className="nav-logo">
                    <Logo size={34} />
                    <span className="logo-text">MATH<span className="text-gradient"> 1014</span></span>
                </Link>

                <div className="nav-right">
                    <Link to="/topics" className="nav-link">
                        <BookOpen size={20} />
                        <span>Topics</span>
                    </Link>
                    <Link to="/about" className="nav-link">
                        <Info size={20} />
                        <span>About</span>
                    </Link>
                    <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
                        {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
