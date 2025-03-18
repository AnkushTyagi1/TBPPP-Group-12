import React from "react";
import { Link } from "react-router-dom";
import "./Thankyou.css"

export default function Thankyou() {
  return (
    <div className="thank-you-container">
      <div className="thank-you-box">
        <h1>Thank You</h1>
        <p>Your message has been successfully sent. We’ll get back to you soon.</p>
        <Link to="/" className="back-home">
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
