import React from 'react';
import icon1 from '../assets/icon1.png';
import icon2 from '../assets/icon2.png';
import icon3 from '../assets/icon3.png';
import icon4 from '../assets/icon4.png';
import icon5 from '../assets/icon5.png';
import icon6 from '../assets/icon6.png';

function WhyDoctorGerman() {
  return (
    <section className="why-doctor-german py-5 bg-light">
      <div className="container text-center">
        <h2 className="fw-bold mb-4">Why Doctor German</h2>
        <div className="row">
          <div className="col-6 mb-4">
            <div className="d-flex align-items-center">
              <img
                src={icon1}
                alt="Icon 1"
                className="img-fluid me-3"
                style={{ width: '30px' }}
              />
              <span>Accredited by Berlin Ministry</span>
            </div>
          </div>
          <div className="col-6 mb-4">
            <div className="d-flex align-items-center">
              <img
                src={icon2}
                alt="Icon 2"
                className="img-fluid me-3"
                style={{ width: '30px' }}
              />
              <span>The Real Muscle Tonic</span>
            </div>
          </div>
          <div className="col-6 mb-4">
            <div className="d-flex align-items-center">
              <img
                src={icon3}
                alt="Icon 3"
                className="img-fluid me-3"
                style={{ width: '30px' }}
              />
              <span>Fine Laser Quality</span>
            </div>
          </div>
          <div className="col-6 mb-4">
            <div className="d-flex align-items-center">
              <img
                src={icon4}
                alt="Icon 4"
                className="img-fluid me-3"
                style={{ width: '30px' }}
              />
              <span>Free Offline Educational Talks</span>
            </div>
          </div>
          <div className="col-6 mb-4">
            <div className="d-flex align-items-center">
              <img
                src={icon5}
                alt="Icon 5"
                className="img-fluid me-3"
                style={{ width: '30px' }}
              />
              <span>Fast Track Cooking Guidance</span>
            </div>
          </div>
          <div className="col-6 mb-4">
            <div className="d-flex align-items-center">
              <img
                src={icon6}
                alt="Icon 6"
                className="img-fluid me-3"
                style={{ width: '30px' }}
              />
              <span>Talented Doctors</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyDoctorGerman;
