import React from 'react';
import whatsappIcon from '../assets/whatsapp-icon.png';
import whatsappBackground from '../assets/whatsapp.jpg';

function WhatsAppSection() {
  return (
    <section
      className="whatsapp-section text-center position-relative py-5"
      style={{
        backgroundImage: `url(${whatsappBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#fff',
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
      <div className="container position-relative">
        <div className="d-flex flex-column align-items-center">
          <img
            src={whatsappIcon}
            alt="WhatsApp"
            className="img-fluid mb-3"
            style={{ width: '60px' }}
          />
          <p className="mb-4" style={{ fontSize: '1.25rem', fontWeight: '500' }}>
            Get the Class Details on your WhatsApp
          </p>
          <div className="d-flex flex-column gap-3">
            <input
              type="text"
              placeholder="Enter Your WhatsApp Number"
              className="form-control text-center"
              style={{ maxWidth: '300px', margin: '0 auto' }}
            />
            <button className="btn btn-primary">Send Details</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhatsAppSection;
