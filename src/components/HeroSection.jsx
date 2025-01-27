import React from 'react';
import heroImage from '../assets/hero-image.jpg';

function HeroSection() {
  return (
    <section
      className="text-center position-relative"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#fff',
        padding: '4rem 1rem',
        minHeight: '400px',
      }}
    >
      {/* Overlay */}
      <div
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
      ></div>

      {/* Content */}
      <div className="position-relative z-1">
        <h1 style={{ fontSize: '1.75rem', fontWeight: '700' }}>
          Kerala's Largest German Language Institute
        </h1>
        <h2 className="mt-3" style={{ fontSize: '1.25rem', fontWeight: '500' }}>
          Best in the Field
        </h2>
        <div className="mt-4">
          <button className="btn btn-primary btn-sm mx-2">Get the Class Details</button>
          <button className="btn btn-light btn-sm mx-2">Know More</button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
