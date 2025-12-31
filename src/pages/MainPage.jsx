import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaChevronDown, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './MainPage.css';

const MainPage = () => {
  const navigate = useNavigate();
  const [currentHeroImage, setCurrentHeroImage] = useState(0);
  const [currentDocSlide, setCurrentDocSlide] = useState(0);
  const [parallaxOffset, setParallaxOffset] = useState(0);

  const heroImages = ['/img/hero1.webp', '/img/hero2.webp', '/img/hero3.jpg'];
  const busImages = [
    { id: 1, image: '/img/bus1.webp', name: 'Masrafi', route: '/bus1' },
    { id: 2, image: '/img/bus2.webp', name: 'Petr Cech', route: '/bus2' },
    { id: 3, image: '/img/bus3.jpeg', name: 'Masriried', route: '/bus3' }
  ];
  const docImages = ['/img/doc1.jpg', '/img/doc2.webp', '/img/doc3.jpeg', '/img/doc4.jpg', '/img/doc5.jpg'];
  const services = [
    { title: 'Sewa Bis Pariwisata', image: '/img/service1.webp', desc: 'Armada bis terlengkap untuk perjalanan wisata Anda' },
    { title: 'Sewa Mobil', image: '/img/Service2.jpg', desc: 'Berbagai pilihan mobil untuk kebutuhan Anda' },
    { title: 'Sewa Sopir', image: '/img/Service3.jpg', desc: 'Sopir profesional dan berpengalaman' },
    { title: 'Paket Wisata', image: '/img/Service4.jpg', desc: 'Paket wisata lengkap dengan harga terbaik' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.pageYOffset;
      setParallaxOffset(offset * 0.5);
    };

    window.addEventListener('scroll', handleScroll);

    const heroInterval = setInterval(() => {
      setCurrentHeroImage((prev) => (prev + 1) % heroImages.length);
    }, 4000);

    const docInterval = setInterval(() => {
      setCurrentDocSlide((prev) => prev + 1);
    }, 5000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(heroInterval);
      clearInterval(docInterval);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDocPrev = () => {
    setCurrentDocSlide((prev) => prev - 1);
  };

  const handleDocNext = () => {
    setCurrentDocSlide((prev) => prev + 1);
  };

  useEffect(() => {
    if (currentDocSlide >= docImages.length) {
      const timeout = setTimeout(() => {
        setCurrentDocSlide(currentDocSlide - docImages.length);
      }, 500);
      return () => clearTimeout(timeout);
    } else if (currentDocSlide < 0) {
      const timeout = setTimeout(() => {
        setCurrentDocSlide(currentDocSlide + docImages.length);
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [currentDocSlide, docImages.length]);

  return (
    <div className="main-page">
      <Navbar showSections={true} />

      {/* Section 1: Hero */}
      <section id="hero" className="hero-section">
        <div className="hero-background" style={{ transform: `translateY(${parallaxOffset}px)` }}>
          {heroImages.map((img, index) => (
            <div
              key={index}
              className={`hero-image ${index === currentHeroImage ? 'active' : ''}`}
              style={{ backgroundImage: `url(${img})` }}
            />
          ))}
          <div className="hero-overlay" />
        </div>
        <div className="hero-content">
          <h1>Perjalanan Nyaman Bersama Kami</h1>
          <h2>Solusi transportasi terpercaya untuk setiap perjalanan Anda</h2>
        </div>
        <div className="scroll-indicator" onClick={() => scrollToSection('layanan')}>
          <p>Geser untuk melanjutkan</p>
          <FaChevronDown className="scroll-arrow" />
        </div>
      </section>

      {/* Section 2: Layanan */}
      <section id="layanan" className="services-section">
        <div className="container">
          <h2 className="section-title" data-aos="fade-up">Layanan Kami</h2>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="service-image">
                  <img src={service.image} alt={service.title} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Armada */}
      <section id="armada" className="fleet-section">
        <div className="container">
          <h2 className="section-title" data-aos="fade-up">Armada Bis Pariwisata</h2>
          <div className="fleet-slider">
            {busImages.map((bus, index) => (
              <div key={bus.id} className="fleet-item" data-aos="zoom-in" data-aos-delay={index * 100}>
                <div className="fleet-image">
                  <img src={bus.image} alt={bus.name} />
                </div>
                <h3>{bus.name}</h3>
                <button className="detail-button" onClick={() => navigate(bus.route)}>
                  Lebih Lengkap
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Dokumentasi */}
      <section id="dokumentasi" className="documentation-section">
        <div className="container">
          <h2 className="section-title" data-aos="fade-up">Dokumentasi</h2>
          <div className="doc-slider-container" data-aos="fade-up" data-aos-delay="200">
            <button className="slider-arrow left" onClick={handleDocPrev}>
              <FaChevronLeft />
            </button>
            <div className="doc-slider">
              <div
                className="doc-slider-track"
                style={{
                  transform: window.innerWidth <= 768
                    ? `translateX(-${currentDocSlide * 100}%)`
                    : `translateX(-${currentDocSlide * (33.333 + 1.5)}%)`
                }}
              >
                {[...docImages, ...docImages, ...docImages].map((img, index) => (
                  <div key={index} className="doc-slide">
                    <div className="doc-image">
                      <img src={img} alt={`Documentation ${(index % docImages.length) + 1}`} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button className="slider-arrow right" onClick={handleDocNext}>
              <FaChevronRight />
            </button>
          </div>
        </div>
      </section>

      {/* Section 5: Reservasi */}
      <section id="reservasi" className="reservation-section">
        <div className="reservation-overlay"></div>
        <div className="container">
          <h2 className="section-title" data-aos="fade-up">Reservasi</h2>
          <p className="reservation-text" data-aos="fade-up" data-aos-delay="100">Hubungi kami sekarang untuk reservasi dan informasi lebih lanjut</p>
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            Chat WhatsApp
          </a>
        </div>
      </section>

      {/* Section 6: Footer */}
      <Footer />
    </div>
  );
};

export default MainPage;
