import React, { useState } from "react";
import "./Contact.css";
import chefLogo from "../assets/chef-logo-design-vector.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    feedback: ""
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Feedback Submitted", formData);

  };

  return (
    <div className="feedback-container">
      <div className="content">
        <div className="image-section">
          <img src={chefLogo} alt="Hotel Feedback" className="feedback-image" />
        </div>
        <div className="form-section">
          <h1>Hotel Feedback</h1>
          <p>We value your feedback</p>
          <form className="feedback-form" onSubmit={handleSubmit}>
            <input type="text" id="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
            <input type="email" id="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
            <input type="date" id="date" value={formData.date} onChange={handleChange} required />
            <textarea id="feedback" rows="4" placeholder="Your Feedback" value={formData.feedback} onChange={handleChange} required></textarea>
            <div className="button-group">
              <button type="submit" className="btn btn-primary">Submit Feedback</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
