import React from 'react';
import doctorImage from '../assets/doctor.jpg';
import caregiverImage from '../assets/caregiver.jpg';
import lawyerImage from '../assets/lawyer.jpg';

function VictoryMatters() {
  const stats = [
    { percentage: '95.7%', text: 'Success in M4' },
    { percentage: '97.2%', text: 'Success in C7' },
    { percentage: '92.2%', text: 'Success in B2' },
  ];

  const cards = [
    { img: doctorImage, text: 'Success for Doctors' },
    { img: caregiverImage, text: 'Success for Caregivers' },
    { img: lawyerImage, text: 'Success for Lawyers' },
  ];

  const circleStyle = {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    backgroundColor: '#333',
    color: '#fff',
    fontSize: '1.5rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 auto',
  };

  return (
    <section className="container my-5">
      <h2 className="text-center" style={{ color: '#333' }}>
        Victory Matters
      </h2>
      <h4 className="text-center mb-4" style={{ color: '#555' }}>
        Final Attempt: Success in Medical Careers
      </h4>

      {/* Circular Stats */}
      <div className="row text-center">
        {stats.map((stat, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div style={circleStyle}>
              <span>{stat.percentage}</span>
            </div>
            <p>{stat.text}</p>
          </div>
        ))}
      </div>

      {/* Cards Section */}
      <div className="row text-center mt-5">
        {cards.map((card, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card">
              <img
                src={card.img}
                className="card-img-top"
                alt={card.text}
                style={{ borderRadius: '12px' }}
              />
              <div className="card-body">
                <p className="card-text" style={{ fontSize: '1rem', fontWeight: '500' }}>
                  {card.text}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default VictoryMatters;
