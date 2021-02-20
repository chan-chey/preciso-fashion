import React from 'react'
import './Products.css'
import Carousel from 'react-bootstrap/Carousel'
const Products = () => {
  return (
    <React.Fragment>
      <div className='section'>
        <Carousel className='hero-banner'>
          <Carousel.Item interval={2000} className='hero-banner-img'>
            <img
              className='hero-banner-img'
              src='./Images/HomeScreenImages/natural.png'
              alt='herobanner1'
            />
          </Carousel.Item>
          <Carousel.Item interval={3000} className='hero-banner-img'>
            <img
              className='hero-banner-img'
              src='./Images/HomeScreenImages/sustain.png'
              alt='herobanner2'
            />
          </Carousel.Item>
          <Carousel.Item interval={3000} className='hero-banner-img'>
            <img
              className='hero-banner-img'
              src='./Images/HomeScreenImages/eco.png'
              alt='herobanner3'
            />
          </Carousel.Item>
        </Carousel>

        <div className='products-container'>
          <div className='product-wrap-one'>
            <div className='product-text-wrap'>
              <div className='product-title'> Products </div>
              <div className='product-text'>
                We have a vision to have our presence felt in homes and lives
                everywhere and to fulfill this goal, we design and curate a wide
                variety of home décor and home furnishing products which cater
                to different clients and brands worldwide. <br /> <br />
                Products such as bags, home décor, stationery and promotional
                gifts form a major part of our offerings.
              </div>
            </div>
          </div>
          <div className='product-wrap-two'>
            <div className='product-img-col-one'>
              <div className='product-row-one'>
                <img
                  src='./Images/HomeScreenImages/product1.png'
                  alt='product-img1'
                  className='product-image1'
                />
              </div>
              <div className='product-row-two'>
                <img
                  src='./Images/HomeScreenImages/product2.png'
                  alt='product-img2'
                  className='product-image2'
                />
                <img
                  src='./Images/HomeScreenImages/product3.png'
                  alt='product-img3'
                  className='product-image3'
                />
              </div>
            </div>
            <div className='product-img-col-two'>
              <img
                src='./Images/HomeScreenImages/product4.png'
                alt='product-image4'
                className='product-image4'
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
export default Products
