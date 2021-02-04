import React from 'react';
import './ProductGallery.css';

const ProductGallery = () =>{
    return(
        <div className=''>
            <div className='product-gallery-container'>
                <div className='gallery-col-one'>
                    <img src='./Images/HomeScreenImages/gallery1.png' alt='gallery-img1' className='gallery-img1'/>
                    <img src='./Images/HomeScreenImages/gallery3.png' alt='gallery-img1' className='gallery-img2'/>
                </div>
                <div className='gallery-col-two'>
                    <img src='./Images/HomeScreenImages/gallery2.png' alt='gallery-img1' className='gallery-img3'/>
                </div>
            </div>
        </div>
    )
}
export default ProductGallery;