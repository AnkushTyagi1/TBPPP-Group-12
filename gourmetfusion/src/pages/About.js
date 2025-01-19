import React from 'react';
import fish from '../assets/Fish-Piccata-1.jpg'
import burger from '../assets/tunaburger.webp'
import grill from '../assets/images.jpeg'

const About = () => {
  return (
   <div className='about-container'>
    <div className='left-about'>
      <h3>About</h3>
      <div className='about-desc'>
      We provide <strong>global seafood supply chain management solutions</strong> to retailers, foodservice distributors, and manufacturers throughout North America.
          <br />
        Our professionals have the depth of seafood product expertise to provide superior value throughout the supply chain by offering integrated strategic procurement and continual product development services.
            </div>
        <div className='about-left-content'>
        <div className='about-content'>

        <h2>Strategic Procurement Services</h2>
         <p>
           The true Cost of Goods Sold (COGS) goes beyond purchase price. We reduce risk and deliver recurring savings to our customers by helping them shift from short-term tactical purchases toward strategic procurement solutions. Our systematic approach ensures competitive purchase pricing, consistent quality, and on-time replenishment.
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
           We are adept at customizing our services to complement the unique product development needs of our customers. Our account teams work confidentially with our clients to periodically review their product portfolio and development pipeline and compare it with the competitive landscape to provide a thorough product line assessment.
         </p>

         <p><strong>Our product development services include:</strong></p>
         <ul>
           <li>Product portfolio evaluation to identify potential gaps.</li>
            <li>Competitive landscape review to identify new product markets.</li>
           <li>Scenario risk assessments.</li>
           <li>Trial testing and performance review.</li>
            <li>Product deployment strategy development.</li>
            <li>Rollout execution.</li>
         </ul>
 


        </div>
        <div className='about-images'>
        <div>
               <img src={grill} alt="Grilled Tilapia Fillet" />
               <p>Grilled Tilapia Fillet With Vegetables And Lemon</p>
             </div>
             <div>
               <img src={fish} alt="Fish Piccata" />
               <p>Fish (Swai Fillet) Piccata With Capers</p>
             </div>
             <div>
               <img src={burger} alt="Yellowfin Tuna Burger" />
               <p>Yellowfin Tuna Burger</p>
             </div>
        </div>
        </div>
    </div>

    <div className="about-right-content">
          <h3>CONTACT :</h3>
          <p>
            Gourmet Fusion Foods<br />
            5840 Uplander Way<br />
            Culver City, CA 90230<br />
            Tel: 310.568.0038<br />
            cs@gourmetfusionfoods.com <br/>
            <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3308.3107918645674!2d-118.38895752366012!3d33.98455002130043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2b75165f9e417%3A0x31bbcfa9934fa209!2s5840%20Uplander%20Way%2C%20Culver%20City%2C%20CA%2090230%2C%20USA!5e0!3m2!1sen!2sin!4v1737287733761!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
          </p>
      </div>
   </div>











    // <div className="about-container">
    //   <div className="about-header">
    //     <h1>About</h1>
    //   </div>

    //   <div className="about-content">
    //     <div className="about-left-content">
    //       <div className='about-desc'>
    //         We provide <strong>global seafood supply chain management solutions</strong> to retailers, foodservice distributors, and manufacturers throughout North America.
    //         <br /><br />
    //         Our professionals have the depth of seafood product expertise to provide superior value throughout the supply chain by offering integrated strategic procurement and continual product development services.
    //       </div>

    //       <h2>Strategic Procurement Services</h2>
    //       <p>
    //         The true Cost of Goods Sold (COGS) goes beyond purchase price. We reduce risk and deliver recurring savings to our customers by helping them shift from short-term tactical purchases toward strategic procurement solutions. Our systematic approach ensures competitive purchase pricing, consistent quality, and on-time replenishment.
    //       </p>

    //       <p><strong>Our strategic procurement services include:</strong></p>
    //       <ul>
    //         <li>A global network of fully audited and approved supply sources.</li>
    //         <li>Quality assurance teams in Southeast Asia and South America that provide on-site inspection services.</li>
    //         <li>Procurement specialists located at the source to communicate supply and market information.</li>
    //         <li>A custom-built, fully integrated logistics management system that provides on-demand shipment status and ensures optimal replenishment.</li>
    //         <li>Flexible financing options.</li>
    //       </ul>

    //       <h2>Product Development Services</h2>
    //       <p>
    //         We are adept at customizing our services to complement the unique product development needs of our customers. Our account teams work confidentially with our clients to periodically review their product portfolio and development pipeline and compare it with the competitive landscape to provide a thorough product line assessment.
    //       </p>

    //       <p><strong>Our product development services include:</strong></p>
    //       <ul>
    //         <li>Product portfolio evaluation to identify potential gaps.</li>
    //         <li>Competitive landscape review to identify new product markets.</li>
    //         <li>Scenario risk assessments.</li>
    //         <li>Trial testing and performance review.</li>
    //         <li>Product deployment strategy development.</li>
    //         <li>Rollout execution.</li>
    //       </ul>
    //     </div>

    //     <div className="about-right-content">
    //       <h3>Contact:</h3>
    //       <p>
    //         Gourmet Fusion Foods<br />
    //         5840 Uplander Way<br />
    //         Culver City, CA 90230<br />
    //         Tel: 310.568.0038<br />
    //         cs@gourmetfusionfoods.com <br/>
    //       </p>

    //       <div className="about-images">
    //         <div>
    //           <img src={grill} alt="Grilled Tilapia Fillet" />
    //           <p>Grilled Tilapia Fillet With Vegetables And Lemon</p>
    //         </div>
    //         <div>
    //           <img src={fish} alt="Fish Piccata" />
    //           <p>Fish (Swai Fillet) Piccata With Capers</p>
    //         </div>
    //         <div>
    //           <img src={burger} alt="Yellowfin Tuna Burger" />
    //           <p>Yellowfin Tuna Burger</p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default About;
