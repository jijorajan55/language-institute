import React from 'react';

function Footer() {
  return (
    <footer
      className="text-light text-center py-4"
      style={{
        backgroundColor: '#222',
        borderTop: '4px solid #007bff',
        padding: '2rem 1rem',
        marginTop: '2rem',
      }}
    >
      {/* Footer Text */}
      <p style={{ fontSize: '1rem', marginBottom: '1rem' }}>
        &copy; {new Date().getFullYear()} Doctor German. All rights reserved.
      </p>

      {/* Social Media Icons */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
        <a
          href="https://www.facebook.com/yourpage"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: '#007bff',
            fontSize: '1.5rem',
            transition: 'color 0.3s ease',
          }}
        >
          <i className="fab fa-facebook-f"></i>
        </a>
        <a
          href="https://www.instagram.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: '#007bff',
            fontSize: '1.5rem',
            transition: 'color 0.3s ease',
          }}
        >
          <i className="fab fa-instagram"></i>
        </a>
        {/* Add more icons as needed */}
      </div>

      {/* Small Note */}
      <p style={{ fontSize: '0.9rem', marginTop: '1rem', color: '#ccc' }}>
        Designed with care to help you achieve success in Germany.
      </p>
    </footer>
  );
}

export default Footer;
