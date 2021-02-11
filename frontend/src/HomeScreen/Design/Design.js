import React from 'react'
import './Design.css'

const Design = () => {
  return (
    <>
      <div className='design-section'>
        <div className='design-col-one'>
          <div className='design-title'>Design I Development I Customize</div>
          <div className='design-text'>
            The Preciso Fashion Team constantly strives to provide customers
            with products that are unique and specifically suited to their
            needs. To that end, our team is constantly designing and
            developing while remaining open to suggestions and preferences.
          </div>
          <div className='design-text'>
            We pride ourselves on our ability to provide tailormade
            customizations that not only represent our philosophy but also
            mirror the requirements of our buyers. Our efforts to distinguish
            ourselves with innovation and design is visible in all our
            products.
          </div>
          <div className='img-flex'>
            <img
              src='./Images/HomeScreenImages/design1.png'
              alt='design-img1'
              className='design-img1'
            />
            <img
              src='./Images/HomeScreenImages/design1.png'
              alt='design-img2'
              className='design-img2'
            />
          </div>
        </div>
      </div>
    </>
  )
}
export default Design;
