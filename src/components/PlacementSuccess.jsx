import React from 'react';
import placementImage from '../assets/placement-image.jpg';

function PlacementSuccess() {
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
      <h2
        className="mb-4"
        style={{ fontSize: '2rem', fontWeight: '600', color: '#333' }}
      >
        Placement Successes
      </h2>
      <img
        src={placementImage}
        alt="Placement Success"
        className="img-fluid mb-4"
        style={{
          height: '700px', // Set the desired height here
          width: 'auto', // Maintain aspect ratio
          borderRadius: '12px',
          objectFit: 'cover', // Ensures the image doesn't distort
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        }}
      />
      <p
        style={{
          fontSize: '1.2rem',
          marginBottom: '1.5rem',
          color: '#555',
        }}
      >
        Get Placed in Germany in just <strong>5 Months</strong>
      </p>
      <button
        className="btn btn-primary"
        style={{
          padding: '0.8rem 1.5rem',
          fontSize: '1rem',
          borderRadius: '8px',
        }}
      >
        Get Placed
      </button>
    </section>
  );
}

export default PlacementSuccess;
