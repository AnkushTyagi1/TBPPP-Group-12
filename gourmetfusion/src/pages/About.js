import React from 'react';
import fish from '../assets/Fish-Piccata-1.jpg'
import burger from '../assets/tunaburger.webp'
import grill from '../assets/images.jpeg'
import './About.css'
import { Link } from 'react-router-dom';

const About = () => {
  return (
   <div className='about-container'>
    <div className='left-about'>
      <h3><b>About</b></h3>
      <div className='about-desc'>
      Welcome to <strong>Gourmet Fusion Foods</strong> where we bring the authentic taste of India to your table. Our restaurant is dedicated to offering a unique dining experience that celebrates the rich and diverse flavors of Indian cuisine.
      <br/>
       From the bustling streets of Delhi to the coastal kitchens of Kerala, we pride ourselves on serving dishes made with the freshest ingredients and traditional recipes passed down through generations.
            </div>
        <div className='about-left-content'>
        <div className='about-content'>

        <h2>Strategic Procurement Services</h2>
         <p>
         At <strong>Gourmet Fusion Foods </strong>, we understand that the true cost of a meal goes beyond just the ingredients. We focus on delivering high-quality Indian food by strategically sourcing fresh, authentic ingredients that guarantee exceptional taste and value. Our approach helps us reduce costs, mitigate risks, and provide consistent quality to our customers.
         </p>

         <p><strong>Our strategic procurement services include:</strong></p>
         <ul>
           <li>A global network of fully audited and approved supply sources.</li>
           <li>Quality assurance teams in Southeast Asia and South America that provide on-site inspection services.</li>
           <li>Procurement specialists located at the source to communicate supply and market information.</li>
           <li>A custom-built, fully integrated logistics management system that provides on-demand shipment status and ensures optimal replenishment.</li>
           <li>Flexible financing options.</li>
          </ul>

         <h2>Product Development Services</h2>
         <p>
         We are committed to constantly innovating and refining our menu to offer new and exciting dishes to our guests. Our team works closely with our suppliers and chefs to create new recipes, ensuring that our offerings always meet the evolving tastes of our customers while staying true to authentic Indian cuisine.
         </p>

         <p><strong>Our product development services include:</strong></p>
         <ul>
           <li>Menu evaluation to identify areas for improvement and expansion.</li>
            <li>Competitive landscape review to identify new product markets.</li>
           <li>Risk assessments to ensure the quality and feasibility of new dishes.</li>
           <li>Trial testing and performance review.</li>
            <li>Recipe testing and performance reviews to ensure each new dish meets our quality and flavor standards.</li>
            <li>Rollout execution to seamlessly launch new dishes with consistent quality and customer satisfaction.</li>
         </ul>
 


        </div>
        <div className='about-images'>
        <div>
               <img src={grill} alt="Grilled Tilapia Fillet" />
               <p className='para'>Grilled Tilapia Fillet With Vegetables And Lemon</p>
             </div>
             <div>
               <img src={fish} alt="Fish Piccata" />
               <p className='para'>Fish (Swai Fillet) Piccata With Capers</p>
             </div>
             <div>
               <img src={burger} alt="Yellowfin Tuna Burger" />
               <p className='para'>Yellowfin Tuna Burger</p>
             </div>
        </div>
        </div>
    </div>

    <div className="about-right-content">
          <h2>CONTACT :</h2>
          <p>
            Gourmet Fusion Foods<br />
            5840 Uplander Way<br />
            Culver City, CA 90230<br />
            Tel: +91 9873210590<br />
            cs@gourmetfusionfoods.com <br/>
            </p>


             <h3>Feedback:</h3>
            <p>We value your opinions and strive to make your experience unforgettable. Whether you have suggestions, compliments, or concerns, we are eager to hear from you.
Please use the form below to share your thoughts with us. Your feedback helps us grow and serve you better!</p>
            <h4>How we use your feedback:</h4>
            <ul>
              <li>To improve our services and facilities.</li>
              <li>To address any issues promptly.</li>
              <li>To create a personalized experience for you.</li>
            </ul>
            <Link to='/feedback'>
            <button>Feedback</button>
            </Link>
            <h3>Business hours:</h3>
            <p>At Gourmet Fusion Foods, we ensure that our services cater to your needs throughout the day. Here are our operational hours:</p>
            <h4>Front Desk:</h4>
            <ul>
              <li>Open 24/7.</li>
              <li>Our friendly staff is always available to assist you with check-ins, check-outs, and any inquiries.</li>
            </ul>
            <iframe title="unique-description" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.89301739469!2d-118.40453509999998!3d33.918152899999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2b751276efc87%3A0x9294685e0d7b7db3!2sGourmet%20Fusion%20Foods!5e0!3m2!1sen!2sin!4v1737735778413!5m2!1sen!2sin" 
             width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
             </iframe>
           
      </div>
   </div>

  );
};

export default About;
