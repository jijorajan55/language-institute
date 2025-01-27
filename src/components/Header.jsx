import React from 'react';
import logo from '../assets/logo.png';

function Header() {
  return (
    <header className="bg-white py-3 shadow-sm">
      <div className="container d-flex align-items-center justify-content-between">
        <img src={logo} alt="Logo" className="img-fluid" style={{ maxWidth: '80px' }} />
        <h1 className="m-0" style={{ fontSize: '1.25rem', fontWeight: '600' }}>
          Doctor German Institute
        </h1>
      </div>
    </header>
  );
}

export default Header;
