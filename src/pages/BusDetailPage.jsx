import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import {
  MdAirlineSeatReclineExtra,
  MdAcUnit,
  MdTv,
  MdWifi,
  MdLocalDrink,
  MdKitchen,
  MdChargingStation,
  MdSanitizer,
  MdLuggage,
  MdMusicNote
} from 'react-icons/md';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './BusDetailPage.css';

const BusDetailPage = () => {
  const { busId } = useParams();
  const [currentSlide, setCurrentSlide] = useState(0);

  const busData = {
    bus1: {
      name: 'Masrafi',
      image: '/img/bus1.webp',
      images: ['/img/bus1a.jpeg', '/img/bus1b.jpeg', '/img/bus1c.jpeg'],
      description: 'Bus medium yang nyaman untuk perjalanan jarak menengah'
    },
    bus2: {
      name: 'Petr Cech',
      image: '/img/bus2.webp',
      images: ['/img/bus2a.jpeg', '/img/bus2b.jpeg', '/img/bus2c.webp'],
      description: 'Bus executive dengan desain modern dan elegan'
    },
    bus3: {
      name: 'Masriried',
      image: '/img/bus3.jpeg',
      images: ['/img/bus3a.jpeg', '/img/bus3b.jpeg', '/img/bus3c.webp'],
      description: 'Bus premium dengan fasilitas terlengkap untuk kenyamanan perjalanan Anda'
    }
  };

  const facilities = [
    { icon: <MdAirlineSeatReclineExtra />, name: 'Kursi Reclining' },
    { icon: <MdAcUnit />, name: 'AC' },
    { icon: <MdTv />, name: 'TV & Audio' },
    { icon: <MdWifi />, name: 'WiFi' },
    { icon: <MdLocalDrink />, name: 'Air Minum' },
    { icon: <MdKitchen />, name: 'Kulkas' },
    { icon: <MdChargingStation />, name: 'Charging Port' },
    { icon: <MdSanitizer />, name: 'Toilet' },
    { icon: <MdLuggage />, name: 'Bagasi Luas' },
    { icon: <MdMusicNote />, name: 'Karaoke' }
  ];

  const currentBus = busData[busId] || busData.bus1;
  const docImages = currentBus.images;

  useEffect(() => {
    window.scrollTo(0, 0);

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 3 >= docImages.length ? 0 : prev + 3));
    }, 5000);

    return () => clearInterval(interval);
  }, [docImages.length]);

  const handlePrev = () => {
    const isMobile = window.innerWidth <= 768;
    if (isMobile) {
      setCurrentSlide((prev) => (prev - 1 < 0 ? docImages.length - 1 : prev - 1));
    } else {
      setCurrentSlide((prev) => (prev - 3 < 0 ? Math.max(0, docImages.length - 3) : prev - 3));
    }
  };

  const handleNext = () => {
    const isMobile = window.innerWidth <= 768;
    if (isMobile) {
      setCurrentSlide((prev) => (prev + 1 >= docImages.length ? 0 : prev + 1));
    } else {
      setCurrentSlide((prev) => (prev + 3 >= docImages.length ? 0 : prev + 3));
    }
  };

  return (
    <div className="bus-detail-page">
      <Navbar showSections={false} />

      {/* Hero Section */}
      <section className="bus-hero">
        <div className="bus-hero-image">
          <img src={currentBus.image} alt={currentBus.name} />
          <div className="bus-hero-overlay" />
          <h1 className="bus-name">{currentBus.name}</h1>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="facilities-section">
        <div className="container">
          <h2 className="section-title" data-aos="fade-up">Fasilitas</h2>
          <div className="facilities-grid">
            {facilities.map((facility, index) => (
              <div key={index} className="facility-item" data-aos="zoom-in" data-aos-delay={index * 50}>
                <div className="facility-icon">{facility.icon}</div>
                <p>{facility.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation Section */}
      <section className="bus-documentation-section">
        <div className="container">
          <h2 className="section-title" data-aos="fade-up">Galeri</h2>
          <div className="bus-doc-slider-container" data-aos="fade-up" data-aos-delay="200">
            <button className="slider-arrow left" onClick={handlePrev}>
              <FaChevronLeft />
            </button>
            <div className="bus-doc-slider">
              <div
                className="bus-doc-slider-track"
                style={{
                  transform: window.innerWidth <= 768
                    ? `translateX(-${currentSlide * 100}%)`
                    : `translateX(-${(currentSlide / 3) * 100}%)`
                }}
              >
                {window.innerWidth <= 768
                  ? docImages.map((img, index) => (
                      <div key={index} className="bus-doc-slide">
                        <div className="bus-doc-image">
                          <img src={img} alt={`${currentBus.name} ${index + 1}`} />
                        </div>
                      </div>
                    ))
                  : Array.from({ length: Math.ceil(docImages.length / 3) }).map((_, slideIndex) => (
                      <div key={slideIndex} className="bus-doc-slide">
                        {docImages.slice(slideIndex * 3, slideIndex * 3 + 3).map((img, imgIndex) => (
                          <div key={imgIndex} className="bus-doc-image">
                            <img src={img} alt={`${currentBus.name} ${slideIndex * 3 + imgIndex + 1}`} />
                          </div>
                        ))}
                      </div>
                    ))
                }
              </div>
            </div>
            <button className="slider-arrow right" onClick={handleNext}>
              <FaChevronRight />
            </button>
          </div>
          <p className="gallery-description" data-aos="fade-up" data-aos-delay="300">{currentBus.description}</p>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default BusDetailPage;
