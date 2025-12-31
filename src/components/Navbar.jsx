import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = ({ showSections = true }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
      setMenuOpen(false);
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="logo-text">Era Trans</span>
        </Link>

        {showSections && (
          <>
            <button className="hamburger" onClick={toggleMenu}>
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>

            <ul className={`navbar-menu ${menuOpen ? 'active' : ''}`}>
              <li onClick={() => scrollToSection('hero')}>Beranda</li>
              <li onClick={() => scrollToSection('layanan')}>Layanan</li>
              <li onClick={() => scrollToSection('armada')}>Armada</li>
              <li onClick={() => scrollToSection('dokumentasi')}>Dokumentasi</li>
              <li onClick={() => scrollToSection('reservasi')}>Reservasi</li>
            </ul>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
