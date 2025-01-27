import React from 'react';

function ContactForm() {
  return (
    <section
      className="container my-5"
      style={{
        padding: '2rem',
        backgroundColor: '#ffffff',
        borderRadius: '12px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      }}
    >
      <h2
        className="text-center mb-4"
        style={{ fontSize: '2rem', fontWeight: '600', color: '#333' }}
      >
        Get Callback from Our Team
      </h2>
      <form style={{ maxWidth: '600px', margin: '0 auto' }}>
        {/* Name Field */}
        <div className="form-group mb-3">
          <label htmlFor="name" style={{ fontWeight: '500', color: '#555' }}>
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter Name"
            style={{ padding: '0.8rem', borderRadius: '8px' }}
          />
        </div>

        {/* Phone Field */}
        <div className="form-group mb-3">
          <label htmlFor="phone" style={{ fontWeight: '500', color: '#555' }}>
            Phone
          </label>
          <input
            type="tel"
            className="form-control"
            id="phone"
            placeholder="Enter Phone"
            style={{ padding: '0.8rem', borderRadius: '8px' }}
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="btn btn-primary"
            style={{
              padding: '0.8rem 1.5rem',
              fontSize: '1rem',
              borderRadius: '8px',
            }}
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}

export default ContactForm;
