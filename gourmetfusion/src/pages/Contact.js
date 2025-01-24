import React from 'react';
import "./Contact.css";
// import About from './About';

const Contact = () => {
  return (
    // About
    <div className="reservation-container">
    <div className="content">
      <div className="image-section">
      <img src="https://plus.unsplash.com/premium_vector-1683141030927-d8f78a6be4bd?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Reservation" className="reservation-image" />
      </div>
      <div className="form-section">
        <h1>Make a Reservation</h1>
        <p>Booking a table online is easy</p>
        <form className="reservation-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">
                Your Name<span>*</span>
              </label>
              <input
                type="text"
                id="name"
                placeholder="Name here"
      
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">
                Your Email<span>*</span>
              </label>
              <input
                type="email"
                id="email"
                placeholder="Email here"
               
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="phone">
              How can we contact you?<span>*</span>
            </label>
            <input
              type="tel"
              id="phone"
              
              required
            />
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="date">
                Date<span>*</span>
              </label>
              <input
                type="date"
                id="date"
               
              />
            </div>
            <div className="form-group">
              <label htmlFor="timeFrom">
                From<span>*</span>
              </label>
              <input
                type="time"
                id="timeFrom"
                
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="timeTo">
                To<span>*</span>
              </label>
              <input
                type="time"
                id="timeTo"
              
                required
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="guests">
              Total Guests<span>*</span>
            </label>
            <input
              type="number"
              id="guests"
              min="1"
            
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="specialInfo">Special Information</label>
            <textarea
              id="specialInfo"
              rows="3"
              placeholder="Enter your message here"
             
            ></textarea>
          </div>
          <div className="button-group">
            <button type="submit" className="btn btn-primary">
              Book a table
            </button>
            <button type="reset" className="btn btn-primary">
              Request for Cancellation
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  );
};



export default Contact
