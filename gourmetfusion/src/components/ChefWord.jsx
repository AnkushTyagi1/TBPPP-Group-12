import React from 'react'
import image from '../assets/images-2.webp'
import quote from '../assets/quote.png'
// import bg from '../assets/bg.png'
import './ChefWord.css';
import img from '../assets/img.avif'

const ChefWord = () => {
  return (
    <div className='chefWord' >
      <div className='leftChef'>
        <img src={image} alt='bottle'></img>
      </div>
      <div className='rightChef'>
        <h4 style={{fontFamily:'cursive'}}>Chef's word</h4>
        <h1>
        What We Believe In
        </h1>
        <p><sup><img style={{height:'30px', width:'30px'}} src={quote} alt="quote" /></sup> At our restaurant, food is not just a meal; it's a celebration of life and culture. Our philosophy revolves around bringing the richness of traditional Indian flavors to your plate while blending creativity and passion into every dish we prepare. <img style={{height:'30px', width:'30px',transform:"rotate(180deg)"}} src={quote} alt="quote" /></p>

        <h3>Sanjeev Kapoor</h3>
        <p>Chef and Founder</p>
        <img src={img} alt='img'></img>
      </div>
    </div>
  )
}

export default ChefWord
