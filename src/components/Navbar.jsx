import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ showSections = true }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="logo-text">Era Trans</span>
        </Link>

        {showSections && (
          <ul className="navbar-menu">
            <li onClick={() => scrollToSection('hero')}>Beranda</li>
            <li onClick={() => scrollToSection('layanan')}>Layanan</li>
            <li onClick={() => scrollToSection('armada')}>Armada</li>
            <li onClick={() => scrollToSection('dokumentasi')}>Dokumentasi</li>
            <li onClick={() => scrollToSection('reservasi')}>Reservasi</li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
