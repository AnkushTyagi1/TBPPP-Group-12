import React, { useState } from "react";
import "./Sustainability.css";
import food1 from "../assets/gallery01.png"; 
import food2 from "../assets/gallery02.png";
import food3 from "../assets/gallery03.png";
import food4 from "../assets/gallery04.png";
import video from "../assets/video.mp4";

const Sustainability = () => {
  const awards = [
    { id: 1, title: "Eco-Friendly Award" },
    { id: 2, title: "Green Restaurant" },
    { id: 3, title: "Zero Waste Certification" },
    { id: 4, title: "Sustainable Food Leader" },
  ];

  const images = [food1, food2, food3, food4];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="sustainability-container">
      <div className="text-section">
        <h4 className="subtitle">Awards & Recognition</h4>
        <h2 className="title">Sustainability</h2>
        <div className="awards-list">
          {awards.map((award) => (
            <div key={award.id} className="award-item">
              <span className="award-number">{award.id}</span>
              <div className="award-text">
                <h3>{award.title}</h3>
                <p>Committed to eco-friendly practices.</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="slider-section">
        <button className="slider-btn left" onClick={prevSlide}>
          &#8592;
        </button>
        <img src={images[currentIndex]} alt="Sustainability" className="slider-image" />
        <button className="slider-btn right" onClick={nextSlide}>
          &#8594;
        </button>
      </div>
      <video autoPlay  controls>
        <source src={video} type="video/mp4"/>
      </video>
    </div>
  );
};

export default Sustainability;
