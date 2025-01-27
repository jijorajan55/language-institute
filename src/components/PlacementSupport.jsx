import React from 'react';

function PlacementSupport() {
  const handleCall = () => {
    window.open('tel:+123456789'); // Replace with your actual phone number
  };

  return (
    <section
      className="container my-5 text-center"
      style={{
        padding: '2rem',
        backgroundColor: '#f8f9fa',
        borderRadius: '12px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      }}
    >
      <h2 className="mb-4" style={{ fontSize: '2rem', color: '#333' }}>
        Placement Support
      </h2>
      <p style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>
        Helping Job Seekers - Ausbildung Opportunities
      </p>
      <button
        className="btn btn-primary"
        onClick={handleCall}
        aria-label="Call for Placement Support"
      >
        Call Now
      </button>
    </section>
  );
}

export default PlacementSupport;
