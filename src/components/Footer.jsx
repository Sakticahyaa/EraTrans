import React from 'react';
import { FaWhatsapp, FaYoutube, FaInstagram } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-left">
            <div className="footer-logo">
              <span className="logo-text">Era Trans</span>
            </div>
            <div className="footer-services">
              <h3>Layanan Kami</h3>
              <ul>
                <li>Sewa Bis Pariwisata</li>
                <li>Sewa Mobil</li>
                <li>Sewa Sopir</li>
                <li>Paket Wisata</li>
              </ul>
            </div>
          </div>

          <div className="footer-right">
            <h3>Hubungi Kami</h3>
            <div className="footer-social">
              <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaWhatsapp />
                <span>WhatsApp</span>
              </a>
              <a href="https://www.youtube.com/@eratranschannel" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaYoutube />
                <span>YouTube</span>
              </a>
              <a href="https://www.instagram.com/bus_eratrans/" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaInstagram />
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </footer>

      <div className="powered-by">
        Powered by Hyk Tech
      </div>
    </>
  );
};

export default Footer;
