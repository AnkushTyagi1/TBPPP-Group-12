import React from 'react'
import SubHeading from '../components/Subheading'
import MenuItem from '../components/MenuItem'
import data from '../constants/data'
import images from '../constants/images'
import "./Product.css";
import ChefWord from '../components/ChefWord'
import bg from '../assets/bg.png'
const Product = () => {
  return (
    <div className="app__specialMenu flex__center section__padding" id="menu" style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
    <div className="app__specialMenu-title">
      <SubHeading title="Menu that fits your palatte" />
      <h1 className="headtext__cormorant" style={{color:'yellow', fontFamily:'cursive'}}>Today&apos;s Special</h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine  flex__center">
        <p className="app__specialMenu-menu_heading"  style={{color:'white', fontFamily:'cursive'}}>Wine & Beer</p>
        <div className="app__specialMenu_menu_items">
          {data.wines.map((wine, index) => (
            <MenuItem key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags} />
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <img src={images.menu} alt="menu__img" />
      </div>

      <div className="app__specialMenu-menu_cocktails  flex__center">
        <p className="app__specialMenu-menu_heading" style={{color:'white', fontFamily:'cursive'}}>Cocktails</p>
        <div className="app__specialMenu_menu_items">
          {data.cocktails.map((cocktail, index) => (
            <MenuItem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags} />
          ))}
        </div>
      </div>
    </div>
          <ChefWord/>
   
  </div>
  )
}
export default Product
