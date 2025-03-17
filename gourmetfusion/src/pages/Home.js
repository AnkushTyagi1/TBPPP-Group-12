import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <>
    <div id="carouselExampleCaptions" className="carousel slide w-75 m-auto mt-2" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
        {/* <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button> */}
      </div>
      <div class="carousel-inner rounded-4">
        <div class="carousel-item active h-75 rounded-4" data-bs-interval="3000">
          <img src="./Home-Slider-01.jpg" class="d-block w-100 object-fit-cover rounded-4" alt="..." />
          <div class="carousel-caption d-none d-md-block">
            <h5>First slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
            <button className='btn btn-outline-light'>Order</button>
          </div>
        </div>
        <div class="carousel-item h-75 rounded-4" data-bs-interval="3000">
          <img src="./Home-Slider-02.jpg" class="d-block w-100 object-fit-cover rounded-4" alt="..." />
          <div class="carousel-caption d-none d-md-block">
            <h5>Second slide label</h5>
            <p>Some representative placeholder content for the second slide.</p>
            <button className='btn btn-outline-light'>Order</button>
          </div>
        </div>
        <div class="carousel-item h-75 rounded-4" data-bs-interval="3000">
          <img src="./Home-Slider-03.jpg" class="d-block w-100 rounded-4 object-fit-cover" alt="..." />
          <div class="carousel-caption d-none d-md-block">
            <h5>Third slide label</h5>
            <p>Some representative placeholder content for the third slide.</p>
            <button className='btn btn-outline-light'>Order</button>
          </div>
        </div>
        {/* <div class="carousel-item h-75 rounded-4" data-bs-interval="3000">
          <img src="./Home-Slider-04.jpg" class="d-block w-100 rounded-4 object-fit-cover" alt="..." />
          <div class="carousel-caption d-none d-md-block">
            <h5>Third slide label</h5>
            <p>Some representative placeholder content for the third slide.</p>
          </div>
        </div> */}
        <div class="carousel-item h-75 rounded-4" data-bs-interval="3000">
          <img src="./Home-Slider-05.jpg" class="d-block w-100 rounded-4 object-fit-cover " alt="..." />
          <div class="carousel-caption d-none d-md-block">
            <h5>Third slide label</h5>
            <p>Some representative placeholder content for the third slide.</p>
            <button className='btn btn-outline-light'>Order</button>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    <div>

    {/* HomePage Cards */}

      <div className='HomePageCard-container'>
          <div class="card homePage-card" >
            <img src="./homePage-card.webp" class="card-img-top card-img" alt="Special-Dish"/>
            <div class="card-body">
              <h5 class="card-title">Specials</h5>
              <p class="card-text">Pitmaster Rob is always up to something! Check out our rotating specialty sandwiches and limited drops, including a Limited Time Only Monthly Chef's Special that will leave you craving for more!</p>
              <a href="/" class="btn btn-outline-secondary btn-lg">Place Order</a>
          </div>
          </div>
          <div class="card homePage-card" >
            <img src="./homePage-card-01.jpg" class="card-img-top card-img" alt="Special-Dish"/>
            <div class="card-body">
              <h5 class="card-title">Super Club</h5>
              <p class="card-text">Once a month, Chef & Pitmaster Rob Sonderman presents a new 4-course dine-in experience that goes beyond our regular offerings and puts a smoky spin on gourmet cuisine.</p>
              <a href="/" class="btn btn-outline-secondary btn-lg">Place Order</a>
            </div>
          </div>
      </div>
    </div>

    </>
  )
}

export default Home
